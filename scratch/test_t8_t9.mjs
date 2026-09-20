import { spawn } from "node:child_process";

async function main() {
    const port = 9222;
    const targetUrl = "http://localhost:5173/";

    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const edge = spawn(edgePath, [
        "--headless=new",
        `--remote-debugging-port=${port}`,
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--user-data-dir=C:\\Users\\HP\\AppData\\Local\\Temp\\edge_t89_test",
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

    if (!versionData) {
        console.error("Failed to connect to Edge CDP on port " + port);
        edge.kill();
        process.exit(1);
    }

    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new`, { method: "PUT" });
    const target = await newPageRes.json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);
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
            if (args.includes("[CodeMedic Executor]") || args.includes("TEST_RESULT") || args.includes("Phase")) {
                console.log(`[browser-log] ${args}`);
            }
        }
    };

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");
    await sendCommand("Console.enable");

    console.log("Navigating to " + targetUrl);
    await sendCommand("Page.navigate", { url: targetUrl });
    await new Promise(r => setTimeout(r, 3000));

    const testScript = `
        (async () => {
            const { preloadCppExecutor, executeStudentSolution } = await import('/src/services/cppExecutor.js');
            await preloadCppExecutor();

            const climbingStairsProb = {
                title: "Climbing Stairs",
                execution_config: {
                    functionName: "climbStairs",
                    parameters: [{ name: "n", type: "int" }],
                    returnType: "int",
                    outputMode: "RETURN_VALUE"
                },
                examples: [
                    { input: "2", output: "2" }
                ]
            };

            const t8Code = \`class Solution {
public:
    int climbStairs(int n) {
        vector<int> v;
        return v.at(100);
    }
};\`;

            const t9Code = \`class Solution {
public:
    int climbStairs(int n) {
        while (true) {}
        return n;
    }
};\`;

            console.log(">>> RUNNING TEST 8: Runtime Crash");
            const t8 = await executeStudentSolution(t8Code, climbingStairsProb);
            console.log("TEST_RESULT 8:", JSON.stringify({ status: t8.status, message: t8.message }));

            console.log(">>> RUNNING TEST 9: Infinite Loop (TLE)");
            const t9 = await executeStudentSolution(t9Code, climbingStairsProb);
            console.log("TEST_RESULT 9:", JSON.stringify({ status: t9.status, message: t9.message, time: t9.executionTimeMs }));

            return { t8, t9 };
        })()
    `;

    console.log("Evaluating test script in browser...");
    const evalRes = await sendCommand("Runtime.evaluate", {
        expression: testScript,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("Result summary:", JSON.stringify(evalRes, null, 2));

    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
