import { spawn } from "node:child_process";

async function main() {
    const targetUrl = "http://localhost:5173/";
    console.log(`Starting Edge to diagnose execution flow on: ${targetUrl}...`);

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
        if (msg.method === "Runtime.exceptionThrown") {
            const details = msg.params.exceptionDetails;
            console.error("\n🚨 [BROWSER EXCEPTION]:", details.exception?.description || details.text);
        } else if (msg.method === "Runtime.consoleAPICalled") {
            const args = msg.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(" ");
            console.log(`[browser ${msg.params.type}] ${args}`);
        }
    };

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");
    await sendCommand("Console.enable");

    console.log(`Navigating to ${targetUrl}...`);
    await sendCommand("Page.navigate", { url: targetUrl });

    // Wait 5 seconds
    await new Promise(r => setTimeout(r, 5000));

    console.log("\n>>> Executing in-browser diagnostic test...");
    const testEval = await sendCommand("Runtime.evaluate", {
        expression: `(async () => {
            const cpp = await import('/src/services/cppExecutor.js');
            console.log("INITIAL STATUS:", cpp.getRuntimeStatus());

            // Check if warmup is running
            console.log("Calling preloadCppExecutor()...");
            const p = cpp.preloadCppExecutor();
            console.log("preloadCppExecutor returned promise:", !!p);
            
            // Wait for warmup to complete or report status
            const warmupResult = await p;
            console.log("Warmup promise resolved! Status now:", cpp.getRuntimeStatus());

            return { status: cpp.getRuntimeStatus() };
        })()`,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("\n=== DIAGNOSTIC RESULT ===");
    console.log(JSON.stringify(testEval, null, 2));

    await sendCommand("Page.close");
    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
