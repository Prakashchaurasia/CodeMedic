import { spawn } from "node:child_process";

async function main() {
    const targetUrl = process.argv[2] || "https://code-medic-xi.vercel.app";
    console.log(`Starting Edge to inspect: ${targetUrl}...`);

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

    // Create a new target/page
    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new`, { method: "PUT" });
    const target = await newPageRes.json();
    const wsUrl = target.webSocketDebuggerUrl;

    console.log("Connecting WebSocket to:", wsUrl);
    const ws = new WebSocket(wsUrl);

    await new Promise(resolve => ws.onopen = resolve);

    let id = 1;
    function send(method, params = {}) {
        const msgId = id++;
        ws.send(JSON.stringify({ id: msgId, method, params }));
        return msgId;
    }

    const consoleLogs = [];
    const runtimeErrors = [];

    ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.method === "Runtime.exceptionThrown") {
            const details = msg.params.exceptionDetails;
            const text = details.exception?.description || details.text || JSON.stringify(details);
            runtimeErrors.push({
                text,
                url: details.url,
                lineNumber: details.lineNumber,
                columnNumber: details.columnNumber,
                stackTrace: details.stackTrace
            });
            console.log("\n🚨 RUNTIME EXCEPTION THROWN:");
            console.log(text);
            if (details.stackTrace) {
                console.log(JSON.stringify(details.stackTrace, null, 2));
            }
        } else if (msg.method === "Runtime.consoleAPICalled") {
            const args = msg.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(" ");
            consoleLogs.push({ type: msg.params.type, args });
            console.log(`[console.${msg.params.type}] ${args}`);
        }
    };

    send("Runtime.enable");
    send("Page.enable");
    send("Console.enable");

    console.log(`Navigating to ${targetUrl}...`);
    send("Page.navigate", { url: targetUrl });

    // Wait 8 seconds for page to load and run all JS
    await new Promise(r => setTimeout(r, 8000));

    // Also get DOM body content
    const evalId = id++;
    const bodyContentPromise = new Promise((resolve) => {
        const handler = (event) => {
            const msg = JSON.parse(event.data);
            if (msg.id === evalId) {
                ws.removeEventListener("message", handler);
                resolve(msg.result?.result?.value);
            }
        };
        ws.addEventListener("message", handler);
    });

    ws.send(JSON.stringify({
        id: evalId,
        method: "Runtime.evaluate",
        params: { expression: "document.body.innerHTML" }
    }));

    const bodyHtml = await bodyContentPromise;
    console.log("\n--- BODY INNER HTML (length: " + (bodyHtml?.length || 0) + ") ---");
    console.log(bodyHtml ? bodyHtml.slice(0, 1000) : "(empty)");

    console.log("\n==================================================");
    console.log(`TOTAL CONSOLE LOGS: ${consoleLogs.length}`);
    console.log(`TOTAL RUNTIME ERRORS: ${runtimeErrors.length}`);
    console.log("==================================================");

    ws.close();
    edge.kill();
    process.exit(runtimeErrors.length > 0 ? 1 : 0);
}

main().catch(err => {
    console.error("Fatal inspector error:", err);
    process.exit(1);
});
