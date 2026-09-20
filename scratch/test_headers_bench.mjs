import { spawn } from "node:child_process";

async function main() {
    const targetUrl = "http://localhost:5173/";
    console.log(`Measuring compile speed with different header sets...`);

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

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");

    await sendCommand("Page.navigate", { url: targetUrl });
    await new Promise(r => setTimeout(r, 2000));

    const testEval = await sendCommand("Runtime.evaluate", {
        expression: `(async () => {
            try {
                const { runCppCode } = await import('/src/services/cppExecutor.js');

                // Test 1: Minimal C++ (vector + string + iostream)
                console.log("[Bench] Starting minimal compile...");
                const t0 = Date.now();
                const res1 = await runCppCode('#include <iostream>\\n#include <vector>\\n#include <string>\\n#include <algorithm>\\nint main() { std::cout << "Hello" << std::endl; return 0; }');
                const d1 = Date.now() - t0;
                console.log("[Bench] Minimal compile took:", d1, "ms. Success:", res1.success);

                return { d1, res1 };
            } catch (e) {
                return { error: e.message, stack: e.stack };
            }
        })()`,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("\n=== BENCH RESULT ===");
    console.log(JSON.stringify(testEval, null, 2));

    await sendCommand("Page.close");
    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
