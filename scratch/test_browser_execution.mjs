import { spawn } from "node:child_process";

async function main() {
    const targetUrl = "http://localhost:5173/";
    console.log(`Starting Edge to test C++ execution on: ${targetUrl}...`);

    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const port = 9222;

    const edge = spawn(edgePath, [
        "--headless=new",
        `--remote-debugging-port=${port}`,
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--user-data-dir=C:\\Users\\HP\\AppData\\Local\\Temp\\edge_debug_profile",
        "about:blank"
    ], { stdio: "ignore" });

    // Wait for CDP port to open
    let versionData = null;
    for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 500));
        try {
            const res = await fetch(`http://127.0.0.1:${port}/json/version`);
            if (res.ok) {
                versionData = await res.json();
                break;
            }
        } catch (_) {}
    }

    if (!versionData) {
        console.error("Failed to connect to Edge CDP on port " + port);
        edge.kill();
        process.exit(1);
    }

    console.log("Connected to Edge CDP. Browser version:", versionData.Browser);

    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new`, { method: "PUT" });
    const target = await newPageRes.json();
    const wsUrl = target.webSocketDebuggerUrl;

    const ws = new WebSocket(wsUrl);
    await new Promise(resolve => ws.onopen = resolve);

    let id = 1;
    function send(method, params = {}) {
        const msgId = id++;
        ws.send(JSON.stringify({ id: msgId, method, params }));
        return msgId;
    }

    function sendCommand(method, params = {}) {
        const msgId = id++;
        return new Promise((resolve, reject) => {
            const handler = (event) => {
                const msg = JSON.parse(event.data);
                if (msg.id === msgId) {
                    ws.removeEventListener("message", handler);
                    if (msg.error) reject(msg.error);
                    else resolve(msg.result);
                }
            };
            ws.addEventListener("message", handler);
            ws.send(JSON.stringify({ id: msgId, method, params }));
        });
    }

    ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.method === "Runtime.exceptionThrown") {
            const details = msg.params.exceptionDetails;
            console.error("\n🚨 BROWSER RUNTIME EXCEPTION:", details.exception?.description || details.text);
        } else if (msg.method === "Runtime.consoleAPICalled") {
            const args = msg.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(" ");
            if (args.includes("[CodeMedic") || args.includes("C++") || args.includes("Emception") || args.includes("error") || args.includes("Error")) {
                console.log(`[browser console.${msg.params.type}] ${args}`);
            }
        }
    };

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");
    await sendCommand("Console.enable");

    console.log(`Navigating to ${targetUrl}...`);
    await sendCommand("Page.navigate", { url: targetUrl });

    // Wait 4 seconds for initial bundle
    await new Promise(r => setTimeout(r, 4000));

    console.log("Calling executeStudentSolution for Climbing Stairs inside browser...");
    const testEval = await sendCommand("Runtime.evaluate", {
        expression: `(async () => {
            try {
                const { executeStudentSolution, getRuntimeStatus } = await import('/src/services/cppExecutor.js');
                console.log("[Test] Current runtime status:", getRuntimeStatus());

                const problem = {
                    id: "9515edc3-d348-4e2e-a5a0-1e8b1c75092a",
                    title: "Climbing Stairs",
                    execution_config: {
                        functionName: "climbStairs",
                        returnType: "int",
                        parameters: [{ name: "n", type: "int" }]
                    },
                    examples: [
                        { input: "n = 2", output: "2" },
                        { input: "n = 3", output: "3" }
                    ]
                };

                const studentCode = \`class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
};\`;

                console.log("[Test] Starting executeStudentSolution...");
                const startTime = Date.now();
                const result = await executeStudentSolution(studentCode, problem, []);
                console.log("[Test] Finished in", (Date.now() - startTime), "ms. Result:", JSON.stringify(result));
                return result;
            } catch (e) {
                console.error("[Test] Error:", e);
                return { error: e.message, stack: e.stack };
            }
        })()`,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("\n=== EVAL RESULT ===");
    console.log(JSON.stringify(testEval, null, 2));

    await sendCommand("Page.close");
    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
