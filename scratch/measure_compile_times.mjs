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
        "--user-data-dir=C:\\Users\\HP\\AppData\\Local\\Temp\\edge_measure_profile",
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
            console.log(`[browser-log] ${args}`);
        }
    };

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");
    await sendCommand("Console.enable");

    await sendCommand("Page.navigate", { url: targetUrl });
    await new Promise(r => setTimeout(r, 3000));

    const testScript = `
        (async () => {
            const { preloadCppExecutor, runCppCode, getRuntimeStatus } = await import('/src/services/cppExecutor.js');
            console.log("Status before preload:", getRuntimeStatus());
            const t0 = performance.now();
            await preloadCppExecutor();
            console.log("Preload finished in", (performance.now() - t0).toFixed(0), "ms. Status:", getRuntimeStatus());

            const testCode = \`
#include <iostream>
int main() {
    std::cout << "TEST_PASSED_OK" << std::endl;
    return 0;
}
\`;

            console.log("--- RUN 1 (Cold toolchain download & compile) ---");
            const r1Start = performance.now();
            const res1 = await runCppCode(testCode);
            const r1Time = performance.now() - r1Start;
            console.log("RUN 1 result:", JSON.stringify({ success: res1.success, timedOut: res1.timedOut, stdout: res1.stdout, stderr: res1.stderr, totalMs: r1Time.toFixed(0) }));

            console.log("--- RUN 2 (Warm toolchain & cached worker) ---");
            const r2Start = performance.now();
            const res2 = await runCppCode(testCode);
            const r2Time = performance.now() - r2Start;
            console.log("RUN 2 result:", JSON.stringify({ success: res2.success, timedOut: res2.timedOut, stdout: res2.stdout, stderr: res2.stderr, totalMs: r2Time.toFixed(0) }));

            return { res1, r1Time, res2, r2Time };
        })()
    `;

    console.log("Evaluating testScript in browser...");
    const evalRes = await sendCommand("Runtime.evaluate", {
        expression: testScript,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("Result:", JSON.stringify(evalRes, null, 2));

    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
