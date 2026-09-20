import { spawn } from 'child_process';

async function main() {
    console.log("Launching Edge with full network tracking on https://code-medic-xi.vercel.app...");
    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const port = 9230;
    const userDataDir = "C:\\Users\\HP\\AppData\\Local\\Temp\\edge_dbg_prof_" + Date.now();

    const edgeProc = spawn(edgePath, [
        `--remote-debugging-port=${port}`,
        `--user-data-dir=${userDataDir}`,
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check'
    ]);

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
        edgeProc.kill();
        process.exit(1);
    }

    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new?https://code-medic-xi.vercel.app`, { method: "PUT" });
    const target = await newPageRes.json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(resolve => ws.onopen = resolve);

    let id = 1;
    const pending = new Map();
    function send(method, params = {}) {
        return new Promise((resolve, reject) => {
            const msgId = id++;
            pending.set(msgId, { resolve, reject });
            ws.send(JSON.stringify({ id: msgId, method, params }));
        });
    }

    const requests = new Map(); // requestId -> { url, method, status, error }

    ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && pending.has(msg.id)) {
            const { resolve } = pending.get(msg.id);
            pending.delete(msg.id);
            resolve(msg.result);
        }

        if (msg.method === 'Network.requestWillBeSent') {
            requests.set(msg.params.requestId, {
                url: msg.params.request.url,
                method: msg.params.request.method,
                startTime: Date.now()
            });
            if (msg.params.request.url.includes('/cdn/') || msg.params.request.url.includes('wasm') || msg.params.request.url.includes('worker')) {
                console.log(`[NET >>> START] ${msg.params.request.method} ${msg.params.request.url}`);
            }
        }

        if (msg.method === 'Network.responseReceived') {
            const r = requests.get(msg.params.requestId);
            if (r) {
                r.status = msg.params.response.status;
                r.mimeType = msg.params.response.mimeType;
                r.headers = msg.params.response.headers;
            }
            const url = msg.params.response.url;
            if (url.includes('/cdn/') || url.includes('wasm') || url.includes('worker') || msg.params.response.status >= 400) {
                console.log(`[NET <<< RESP] Status ${msg.params.response.status} (${msg.params.response.mimeType}) -> ${url}`);
            }
        }

        if (msg.method === 'Network.loadingFinished') {
            const r = requests.get(msg.params.requestId);
            if (r && (r.url.includes('/cdn/') || r.url.includes('wasm'))) {
                const duration = Date.now() - r.startTime;
                console.log(`[NET === DONE] (${duration}ms) ${r.url}`);
            }
        }

        if (msg.method === 'Network.loadingFailed') {
            const r = requests.get(msg.params.requestId);
            console.error(`🚨 [NET XXX FAIL] (${msg.params.errorText}) -> ${r ? r.url : msg.params.requestId}`);
        }

        if (msg.method === 'Runtime.consoleAPICalled') {
            const text = msg.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(' ');
            console.log(`[CONSOLE ${msg.params.type}]: ${text}`);
        }

        if (msg.method === 'Runtime.exceptionThrown') {
            console.error('🚨 [EXCEPTION]:', msg.params.exceptionDetails?.text, msg.params.exceptionDetails?.exception?.description);
        }
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Network.enable');

    console.log("Waiting 3s for page boot...");
    await new Promise(r => setTimeout(r, 3000));

    // Now let's execute Emception compile in the page context directly using the page's bundled modules or dynamic import
    console.log("\n=======================================================");
    console.log("TESTING C++ COMPILATION DIRECTLY INSIDE VERCEL PAGE CONTEXT");
    console.log("=======================================================\n");

    // In the page, let's see what is available on window or let's create a direct test
    const evalRes = await send('Runtime.evaluate', {
        expression: `
            (async () => {
                // Let's import createEmception or test fetching all CDN bundles
                console.log("[Test] Testing manifest.json fetch...");
                const mRes = await fetch('/cdn/manifest.json');
                const manifest = await mRes.json();
                console.log("[Test] Manifest bundles:", Object.keys(manifest.bundles || {}));
                
                // Test fetching each bundle
                const results = [];
                for (const bundleName of ['clang', 'include', 'lld', 'libcurl']) {
                    const bundle = manifest.bundles[bundleName];
                    if (!bundle) continue;
                    const url = '/cdn/' + bundle.archive;
                    const t0 = performance.now();
                    try {
                        const res = await fetch(url);
                        const dur = Math.round(performance.now() - t0);
                        results.push({ bundleName, url, status: res.status, durMs: dur, size: res.headers.get('content-length') });
                        console.log(\`[Test] Bundle \${bundleName} fetch: \${res.status} in \${dur}ms\`);
                    } catch (e) {
                        results.push({ bundleName, url, error: e.message });
                        console.error(\`[Test] Bundle \${bundleName} FAILED:\`, e);
                    }
                }
                return results;
            })()
        `,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("\nBundle fetch test results:", evalRes.result?.value);

    // Now let's test what happens when LazyFS decompresses or compiles
    // Let's see: How does Emception run in the worker?
    // Let's check how the worker compiles
    ws.close();
    edgeProc.kill();
}

main().catch(console.error);
