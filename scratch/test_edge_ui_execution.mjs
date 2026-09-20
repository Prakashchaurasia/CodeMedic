import { spawn } from 'child_process';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://zrsnyumhwjsxnkugcukg.supabase.co', 'sb_publishable_ZLSOwBM0FCEHLtU74eOJmQ_2yvayR0Y');

async function getAuthSession() {
    const email = 'ui_tester_' + Date.now() + '@codemedic.dev';
    const password = 'Password123!';
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error || !data.session) {
        throw new Error('Failed to get session: ' + (error?.message || 'no session'));
    }
    return data.session;
}

async function testUrl(targetBaseUrl, session) {
    console.log(`\n===============================================================`);
    console.log(`TESTING TARGET: ${targetBaseUrl}`);
    console.log(`===============================================================`);

    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const port = 9229;
    const userDataDir = "C:\\Users\\HP\\AppData\\Local\\Temp\\edge_ui_prof_" + Date.now();

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
        throw new Error("Failed to connect to Edge CDP on port " + port);
    }

    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new?${targetBaseUrl}`, { method: "PUT" });
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

    const consoleLogs = [];
    const networkFailed = [];

    ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && pending.has(msg.id)) {
            const { resolve } = pending.get(msg.id);
            pending.delete(msg.id);
            resolve(msg.result);
        }

        if (msg.method === 'Runtime.consoleAPICalled') {
            const text = msg.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(' ');
            consoleLogs.push({ type: msg.params.type, text });
            console.log(`[Browser ${msg.params.type}]: ${text}`);
        }

        if (msg.method === 'Runtime.exceptionThrown') {
            console.error('🚨 [Browser Exception]:', msg.params.exceptionDetails?.text, msg.params.exceptionDetails?.exception?.description);
        }

        if (msg.method === 'Network.responseReceived') {
            const status = msg.params.response.status;
            const url = msg.params.response.url;
            const mimeType = msg.params.response.mimeType;
            if (url.includes('.tar.br') || url.includes('.wasm') || url.includes('.brdata')) {
                console.log(`[Network Resource]: ${url.split('/').slice(-2).join('/')} -> HTTP ${status} (${mimeType})`);
            }
            if (status >= 400) {
                console.warn(`[Network HTTP ${status}]: ${url} (${mimeType})`);
            }
        }

        if (msg.method === 'Network.loadingFailed') {
            networkFailed.push({ url: msg.params.requestId, error: msg.params.errorText });
            console.error(`🚨 [Network Failed]: ${msg.params.errorText}`);
        }
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Network.enable');

    console.log("Navigating to targetBaseUrl...");
    await send('Page.navigate', { url: targetBaseUrl });
    await new Promise(r => setTimeout(r, 2000));

    console.log("Injecting session into localStorage...");
    await send('Runtime.evaluate', {
        expression: `
            localStorage.setItem('sb-zrsnyumhwjsxnkugcukg-auth-token', JSON.stringify(${JSON.stringify(session)}));
        `
    });

    console.log("Reloading page to authenticate...");
    await send('Page.reload');

    // Wait for dashboard to load
    console.log("Waiting for authenticated navigation to appear...");
    for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 1000));
        const checkNav = await send('Runtime.evaluate', {
            expression: `Array.from(document.querySelectorAll('button, a')).some(el => el.innerText.includes('Practice Problems'))`
        });
        if (checkNav.result?.value) {
            console.log(`Authenticated navigation ready after ${i + 1}s!`);
            break;
        }
    }

    console.log("Clicking 'Practice Problems'...");
    await send('Runtime.evaluate', {
        expression: `
            const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.innerText.includes('Practice Problems'));
            btn?.click();
        `
    });

    await new Promise(r => setTimeout(r, 2500));

    console.log("Searching for 'Climbing Stairs' in problem search box...");
    await send('Runtime.evaluate', {
        expression: `
            const searchInput = document.querySelector('.problem-search');
            if (searchInput) {
                const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                setter.call(searchInput, 'Climbing Stairs');
                searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        `
    });

    await new Promise(r => setTimeout(r, 2000));

    console.log("Clicking Climbing Stairs problem card...");
    await send('Runtime.evaluate', {
        expression: `
            (() => {
                const card = Array.from(document.querySelectorAll('.problem-card')).find(c => c.innerText.includes('Climbing Stairs'));
                if (card) {
                    const content = card.querySelector('.problem-content') || card;
                    content.click();
                    return true;
                }
                return false;
            })()
        `
    });

    await new Promise(r => setTimeout(r, 2000));

    console.log("Clicking 'Start Coding →' button in ProblemDetails...");
    await send('Runtime.evaluate', {
        expression: `
            (() => {
                const btn = document.querySelector('.start-coding-btn') || Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Start Coding'));
                if (btn) {
                    btn.click();
                    return true;
                }
                return false;
            })()
        `
    });

    // Wait for AnalyzeCode page and .run-button
    console.log("Waiting for AnalyzeCode page and .run-button...");
    let runButtonFound = false;
    for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 1000));
        const checkBtn = await send('Runtime.evaluate', {
            expression: `!!document.querySelector('.run-button')`
        });
        if (checkBtn.result?.value) {
            runButtonFound = true;
            console.log(`Run button appeared after ${i + 1}s!`);
            break;
        }
    }

    if (!runButtonFound) {
        const bodyText = await send('Runtime.evaluate', { expression: `document.body.innerText.slice(0, 500)` });
        console.error("Run button not found! Current body text:\n", bodyText.result?.value);
        ws.close();
        edgeProc.kill();
        return;
    }

    // Check language dropdown
    const lang = await send('Runtime.evaluate', {
        expression: `
            const select = document.querySelector('.language-select');
            ({ val: select?.value, options: Array.from(select?.options || []).map(o => o.value) })
        `,
        returnByValue: true
    });
    console.log("Language select:", lang.result?.value);

    // Put correct C++ solution into Monaco editor
    const correctClimbingStairsCpp = `class Solution {
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
};`;

    await send('Runtime.evaluate', {
        expression: `
            if (window.__monacoEditor) {
                window.__monacoEditor.setValue(${JSON.stringify(correctClimbingStairsCpp)});
            } else if (window.monaco && window.monaco.editor) {
                const editors = window.monaco.editor.getEditors();
                if (editors && editors.length > 0) {
                    editors[0].setValue(${JSON.stringify(correctClimbingStairsCpp)});
                }
            }
        `
    });

    await new Promise(r => setTimeout(r, 1000));

    console.log("\n==============================================");
    console.log(">>> CLICKING RUN CODE BUTTON <<<");
    console.log("==============================================\n");
    await send('Runtime.evaluate', {
        expression: `document.querySelector('.run-button')?.click()`
    });

    // Poll for result
    console.log("Polling for execution result...");
    let finalResult = null;
    const startTime = Date.now();
    for (let i = 0; i < 140; i++) {
        await new Promise(r => setTimeout(r, 1000));
        const state = await send('Runtime.evaluate', {
            expression: `
                ({
                    btnText: document.querySelector('.run-button')?.innerText,
                    hasStatusBadge: document.querySelector('.status-badge')?.innerText,
                    outputConsole: document.querySelector('.output-console')?.innerText,
                    resultCard: document.querySelector('.test-results-container')?.innerText
                })
            `,
            returnByValue: true
        });

        const elapsed = Math.round((Date.now() - startTime) / 1000);
        const st = state.result?.value;
        if (i % 5 === 0) {
            console.log(`[${elapsed}s] Button: "${st?.btnText}" | Badge: "${st?.hasStatusBadge || 'none'}"`);
        }

        if (st?.hasStatusBadge) {
            finalResult = st;
            console.log(`\n🎉 EXECUTION FINISHED in ${elapsed}s!`);
            console.log(`Status Badge:`, st.hasStatusBadge);
            console.log(`Output Details:\n`, st.outputConsole || st.resultCard);
            break;
        }
    }

    if (!finalResult) {
        console.error("Execution timed out or did not produce a status badge!");
    }

    ws.close();
    edgeProc.kill();
}

async function main() {
    const session = await getAuthSession();
    console.log("Created shared authenticated session for:", session.user.email);

    // Test live Vercel deployment!
    await testUrl('https://code-medic-xi.vercel.app/', session);
}

main().catch(console.error);
