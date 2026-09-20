import { spawn } from "node:child_process";
import fs from "node:fs";

async function main() {
    const targetUrl = "http://localhost:5173/";
    console.log(`Starting Edge to run full C++ execution regression suite on: ${targetUrl}...`);

    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const port = 9222;

    const edge = spawn(edgePath, [
        "--headless=new",
        `--remote-debugging-port=${port}`,
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--user-data-dir=C:\\Users\\HP\\AppData\\Local\\Temp\\edge_regression_profile",
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

    console.log("Connected to Edge CDP. Browser version:", versionData.Browser);

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
            if (args.includes("[CodeMedic Executor]") || args.includes("REGRESSION") || args.includes("TEST")) {
                console.log(`[browser] ${args}`);
            }
        }
    };

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");
    await sendCommand("Console.enable");

    console.log(`Navigating to ${targetUrl}...`);
    await sendCommand("Page.navigate", { url: targetUrl });
    await new Promise(r => setTimeout(r, 2500));

    console.log("\n==================================================");
    console.log("RUNNING REGRESSION TEST SUITE INSIDE BROWSER...");
    console.log("==================================================\n");

    const suiteCode = fs.readFileSync("scratch/browser_suite_runner.js", "utf8");

    const suiteEval = await sendCommand("Runtime.evaluate", {
        expression: suiteCode,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("\n==================================================");
    console.log("FINAL REGRESSION SUITE RESULTS:");
    console.log("==================================================\n");

    const tests = suiteEval.result?.value;
    if (Array.isArray(tests)) {
        let allPassed = true;
        for (const t of tests) {
            const icon = t.pass ? "✅" : "❌";
            console.log(`${icon} [${t.test}]:`);
            console.log(`    Expected: ${t.expectedStatus} | Actual: ${t.actualStatus} | Time: ${t.durationMs}ms`);
            console.log(`    Details:  ${t.details}`);
            if (!t.pass) allPassed = false;
        }
        console.log(`\nOVERALL STATUS: ${allPassed ? "ALL 12 TESTS PASSED PERFECTLY!" : "SOME TESTS FAILED!"}`);
    } else {
        console.error("Suite returned unexpected result:", JSON.stringify(suiteEval, null, 2));
    }

    await sendCommand("Page.close");
    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
