import { spawn } from "node:child_process";

async function main() {
    const targetUrl = "http://localhost:5173/";
    console.log(`Testing execution WITHOUT warmup.cpp...`);

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

    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new`, { method: "PUT" });
    const target = await newPageRes.json();
    const wsUrl = target.webSocketDebuggerUrl;

    const ws = new WebSocket(wsUrl);
    await new Promise(resolve => ws.onopen = resolve);

    let id = 1;
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
        if (msg.method === "Runtime.consoleAPICalled") {
            const args = msg.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(" ");
            if (args.includes("RUN") || args.includes("Execution") || args.includes("Accepted") || args.includes("Test")) {
                console.log(`[browser log] ${args}`);
            }
        }
    };

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");
    await sendCommand("Console.enable");

    await sendCommand("Page.navigate", { url: targetUrl });
    await new Promise(r => setTimeout(r, 2000));

    const testEval = await sendCommand("Runtime.evaluate", {
        expression: `(async () => {
            try {
                const { executeStudentSolution } = await import('/src/services/cppExecutor.js');

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

                const correctCode = \`class Solution {
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

                console.log("[Test] Direct executeStudentSolution starting...");
                const t0 = Date.now();
                const res = await executeStudentSolution(correctCode, problem, []);
                const duration = Date.now() - t0;
                console.log("[Test] Direct execution took", duration, "ms. Status:", res.status);
                return { duration, res };
            } catch (e) {
                return { error: e.message, stack: e.stack };
            }
        })()`,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("\n=== RESULT ===");
    console.log(JSON.stringify(testEval, null, 2));

    await sendCommand("Page.close");
    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
