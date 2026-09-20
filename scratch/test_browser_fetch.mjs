import { spawn } from 'child_process';

async function test() {
    const port = 9233;
    const edgeProc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
        `--remote-debugging-port=${port}`,
        `--user-data-dir=C:\\Users\\HP\\AppData\\Local\\Temp\\edge_fetch_test_` + Date.now(),
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check'
    ]);
    await new Promise(r => setTimeout(r, 2000));
    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new?https://code-medic-xi.vercel.app`, { method: 'PUT' });
    const target = await newPageRes.json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    let id = 1;
    function send(method, params = {}) {
        return new Promise((resolve, reject) => {
            const msgId = id++;
            const handler = (event) => {
                const msg = JSON.parse(event.data);
                if (msg.id === msgId) {
                    ws.removeEventListener('message', handler);
                    resolve(msg.result);
                }
            };
            ws.addEventListener('message', handler);
            ws.send(JSON.stringify({ id: msgId, method, params }));
        });
    }
    await send('Runtime.enable');
    await new Promise(r => setTimeout(r, 2000));

    console.log('Testing browser fetch of clang.tar.br and clang.brdata...');
    const res = await send('Runtime.evaluate', {
        expression: `
            (async () => {
                const testBr = await fetch('/cdn/usr/lib/clang.tar.br');
                const bufBr = await testBr.arrayBuffer();
                
                const testData = await fetch('/cdn/usr/lib/clang.brdata');
                const bufData = await testData.arrayBuffer();

                return {
                    tarBr: {
                        status: testBr.status,
                        encoding: testBr.headers.get('content-encoding'),
                        byteLength: bufBr.byteLength
                    },
                    brdata: {
                        status: testData.status,
                        encoding: testData.headers.get('content-encoding'),
                        byteLength: bufData.byteLength
                    }
                };
            })()
        `,
        awaitPromise: true,
        returnByValue: true
    });
    console.log('Browser fetch results:', JSON.stringify(res.result?.value, null, 2));
    ws.close();
    edgeProc.kill();
}

test().catch(console.error);
