import { spawn } from "node:child_process";

async function main() {
    const targetUrl = "http://localhost:5173/";
    console.log(`Testing compile speed of <cstdio> vs <iostream>...`);

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

                // Test: <cstdio> + <vector> + <string> + <algorithm> (NO <iostream>!)
                console.log("[Bench] Starting <cstdio> compile...");
                const t0 = Date.now();
                const code = \`
#include <cstdio>
#include <vector>
#include <string>
#include <algorithm>

int main() {
    std::vector<int> v = {3, 1, 2};
    std::sort(v.begin(), v.end());
    printf("Result: %d, %d, %d\\\\n", v[0], v[1], v[2]);
    return 0;
}
\`;
                const res = await runCppCode(code);
                const d = Date.now() - t0;
                console.log("[Bench] <cstdio> compile took:", d, "ms. Success:", res.success, "stdout:", res.stdout);

                return { d, res };
            } catch (e) {
                return { error: e.message, stack: e.stack };
            }
        })()`,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("\n=== CSTDIO BENCH RESULT ===");
    console.log(JSON.stringify(testEval, null, 2));

    await sendCommand("Page.close");
    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
