import { spawn } from 'child_process';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://zrsnyumhwjsxnkugcukg.supabase.co', 'sb_publishable_ZLSOwBM0FCEHLtU74eOJmQ_2yvayR0Y');

async function getAuthSession() {
    const email = 'matrix_tester_' + Date.now() + '@codemedic.dev';
    const password = 'Password123!';
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error || !data.session) {
        throw new Error('Failed to get session: ' + (error?.message || 'no session'));
    }
    return { session: data.session, email, password };
}

async function runMatrix() {
    console.log(`\n===============================================================`);
    console.log(`CODEMEDIC VERCEL GLOBAL PRODUCTION EXECUTION MATRIX`);
    console.log(`Target: https://code-medic-xi.vercel.app/`);
    console.log(`===============================================================`);

    const { session, email, password } = await getAuthSession();
    console.log("Authenticated as:", session.user.email);

    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const port = 9250;
    const userDataDir = "C:\\Users\\HP\\AppData\\Local\\Temp\\edge_matrix_prof_" + Date.now();

    const edgeProc = spawn(edgePath, [
        `--remote-debugging-port=${port}`,
        `--user-data-dir=${userDataDir}`,
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check'
    ]);

    for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 500));
        try {
            const res = await fetch(`http://127.0.0.1:${port}/json/version`);
            if (res.ok) break;
        } catch (_) {}
    }

    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new?https://code-medic-xi.vercel.app/`, { method: "PUT" });
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

    ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && pending.has(msg.id)) {
            const { resolve } = pending.get(msg.id);
            pending.delete(msg.id);
            resolve(msg.result);
        }
        if (msg.method === 'Runtime.consoleAPICalled') {
            const text = msg.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(' ');
            if (text.includes('[CodeMedic Execution Phase:') || text.includes('WASI RUN:') || text.includes('WASI COMPLETE:') || text.includes('RUN COMPLETE: wasm-ld') || text.includes('COMPILE COMPLETE: clang')) {
                console.log(`  ${text}`);
            }
            if (text.includes('[CodeMedic Executor] final status:')) {
                console.log(`  🎯 ${text}`);
            }
        }
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Network.enable');

    console.log("Navigating to https://code-medic-xi.vercel.app/ ...");
    await send('Page.navigate', { url: "https://code-medic-xi.vercel.app/" });
    await new Promise(r => setTimeout(r, 2500));

    console.log("Setting up authentication in browser...");
    await send('Runtime.evaluate', {
        expression: `localStorage.setItem('sb-zrsnyumhwjsxnkugcukg-auth-token', JSON.stringify(${JSON.stringify(session)}));`
    });
    await send('Page.reload');

    console.log("Waiting for authenticated navigation to appear...");
    let navReady = false;
    for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 1000));
        const checkNav = await send('Runtime.evaluate', {
            expression: `Array.from(document.querySelectorAll('button, a')).some(el => el.innerText.includes('Practice Problems'))`
        });
        if (checkNav.result?.value) {
            navReady = true;
            console.log(`Authenticated navigation ready after ${i + 1}s!`);
            break;
        }
    }

    if (!navReady) {
        console.log("Attempting direct login UI form submission...");
        await send('Runtime.evaluate', {
            expression: `
                (() => {
                    const emailInput = document.querySelector('input[type="email"]');
                    const passInput = document.querySelector('input[type="password"]');
                    const submitBtn = document.querySelector('button[type="submit"]');
                    if (emailInput && passInput && submitBtn) {
                        const emailSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                        emailSetter.call(emailInput, ${JSON.stringify(email)});
                        emailInput.dispatchEvent(new Event('input', { bubbles: true }));
                        emailSetter.call(passInput, ${JSON.stringify(password)});
                        passInput.dispatchEvent(new Event('input', { bubbles: true }));
                        submitBtn.click();
                        return true;
                    }
                    return false;
                })()
            `
        });

        for (let i = 0; i < 20; i++) {
            await new Promise(r => setTimeout(r, 1000));
            const checkNav = await send('Runtime.evaluate', {
                expression: `Array.from(document.querySelectorAll('button, a')).some(el => el.innerText.includes('Practice Problems'))`
            });
            if (checkNav.result?.value) {
                navReady = true;
                console.log(`Authenticated navigation ready after form login (${i + 1}s)!`);
                break;
            }
        }
    }

    if (!navReady) {
        const bodyText = await send('Runtime.evaluate', { expression: `document.body.innerText.slice(0, 500)` });
        console.error("Current page body:\n", bodyText.result?.value);
        throw new Error("Authenticated navigation failed to appear!");
    }

    async function navigateToProblem(title) {
        console.log(`\nNavigating to problem: "${title}"...`);
        
        // 1. Click Practice Problems in sidebar
        const clickedNav = await send('Runtime.evaluate', {
            expression: `
                (() => {
                    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.innerText.includes('Practice Problems'));
                    if (btn) { btn.click(); return true; }
                    return false;
                })()
            `
        });
        console.log("Clicked Practice Problems:", clickedNav.result?.value);

        // 2. Wait for .problem-search input
        let searchFound = false;
        for (let i = 0; i < 15; i++) {
            await new Promise(r => setTimeout(r, 500));
            const hasInput = await send('Runtime.evaluate', {
                expression: `!!document.querySelector('.problem-search')`
            });
            if (hasInput.result?.value) {
                searchFound = true;
                break;
            }
        }
        console.log("Found problem search input:", searchFound);

        // 3. Search for the problem
        await send('Runtime.evaluate', {
            expression: `
                const searchInput = document.querySelector('.problem-search');
                if (searchInput) {
                    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                    setter.call(searchInput, ${JSON.stringify(title)});
                    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                }
            `
        });

        // 4. Wait for and click problem card
        let cardFound = false;
        for (let i = 0; i < 15; i++) {
            await new Promise(r => setTimeout(r, 500));
            const clickCard = await send('Runtime.evaluate', {
                expression: `
                    (() => {
                        const card = Array.from(document.querySelectorAll('.problem-card')).find(c => c.innerText.includes(${JSON.stringify(title)}));
                        if (card) {
                            const content = card.querySelector('.problem-content') || card;
                            content.click();
                            return true;
                        }
                        return false;
                    })()
                `
            });
            if (clickCard.result?.value) {
                cardFound = true;
                break;
            }
        }
        console.log("Found and clicked problem card:", cardFound);

        // 5. Wait for and click 'Start Coding'
        let startCodingClicked = false;
        for (let i = 0; i < 15; i++) {
            await new Promise(r => setTimeout(r, 500));
            const clickBtn = await send('Runtime.evaluate', {
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
            if (clickBtn.result?.value) {
                startCodingClicked = true;
                break;
            }
        }
        console.log("Clicked Start Coding button:", startCodingClicked);

        // 6. Wait for editor and run button
        let editorReady = false;
        for (let i = 0; i < 25; i++) {
            await new Promise(r => setTimeout(r, 1000));
            const ready = await send('Runtime.evaluate', {
                expression: `!!document.querySelector('.run-button') && (!!window.__monacoEditor || !!window.__setCodeEditorValue)`
            });
            if (ready.result?.value) {
                editorReady = true;
                console.log(`Editor & Run button ready after ${i + 1}s!`);
                break;
            }
        }
        if (!editorReady) {
            throw new Error(`Failed to initialize editor and run button for problem "${title}"!`);
        }
    }

    async function executeCode(code, label, maxWaitSec = 85) {
        console.log(`\n--- Running test: ${label} ---`);
        
        await send('Runtime.evaluate', {
            expression: `window.__lastExecutionResult = null;`
        });

        const setOk = await send('Runtime.evaluate', {
            expression: `
                (() => {
                    let set = false;
                    if (window.__setCodeEditorValue) {
                        window.__setCodeEditorValue(${JSON.stringify(code)});
                        set = true;
                    } else if (window.__monacoEditor) {
                        window.__monacoEditor.setValue(${JSON.stringify(code)});
                        set = true;
                    }
                    if (window.__setAnalyzeCode) {
                        window.__setAnalyzeCode(${JSON.stringify(code)});
                        set = true;
                    }
                    return set;
                })()
            `
        });
        console.log(`Code set into editor:`, setOk.result?.value);
        await new Promise(r => setTimeout(r, 1000));

        // Ensure run button is enabled before clicking
        for (let i = 0; i < 30; i++) {
            const checkEnabled = await send('Runtime.evaluate', {
                expression: `(() => { const btn = document.querySelector('.run-button'); return btn && !btn.disabled; })()`
            });
            if (checkEnabled.result?.value) break;
            await new Promise(r => setTimeout(r, 500));
        }

        const clicked = await send('Runtime.evaluate', {
            expression: `
                (() => {
                    const btn = document.querySelector('.run-button');
                    if (btn && !btn.disabled) {
                        btn.click();
                        return true;
                    }
                    return false;
                })()
            `
        });
        console.log(`Clicked run button:`, clicked.result?.value);

        const start = Date.now();
        let finalStatus = null;
        let lastResultObj = null;
        while (Date.now() - start < maxWaitSec * 1000) {
            await new Promise(r => setTimeout(r, 1000));
            const check = await send('Runtime.evaluate', {
                expression: `window.__lastExecutionResult`,
                returnByValue: true
            });
            if (check.result?.value?.status) {
                finalStatus = check.result.value.status;
                lastResultObj = check.result.value;
                break;
            }
        }

        const elapsed = ((Date.now() - start) / 1000).toFixed(1);
        console.log(`Result for [${label}] in ${elapsed}s -> ${finalStatus}`);
        return { status: finalStatus, elapsed: Number(elapsed), details: lastResultObj };
    }

    const testResults = [];

    // Test 1: Climbing Stairs (Correct -> Accepted)
    // Note: Allow up to 140s for initial cold start to download WASM & headers into IndexedDB
    await navigateToProblem('Climbing Stairs');
    const csCorrect = `class Solution {
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
    const r1 = await executeCode(csCorrect, 'Climbing Stairs (Correct)', 140);
    testResults.push({ test: 'Climbing Stairs (Correct)', expected: 'Accepted', actual: r1.status, pass: r1.status === 'Accepted', elapsed: r1.elapsed });

    // Test 2: Climbing Stairs (Wrong -> Wrong Answer)
    const csWrong = `class Solution {
public:
    int climbStairs(int n) {
        return 999;
    }
};`;
    const r2 = await executeCode(csWrong, 'Climbing Stairs (Wrong)');
    testResults.push({ test: 'Climbing Stairs (Wrong)', expected: 'Wrong Answer', actual: r2.status, pass: r2.status === 'Wrong Answer', elapsed: r2.elapsed });

    // Test 3: Climbing Stairs (Syntax error -> Compilation Error)
    const csError = `class Solution {
public:
    int climbStairs(int n) {
        syntax_error_undefined_identifier;
    }
};`;
    const r3 = await executeCode(csError, 'Climbing Stairs (Compilation Error)');
    testResults.push({ test: 'Climbing Stairs (Compilation Error)', expected: 'Compilation Error', actual: r3.status, pass: r3.status === 'Compilation Error', elapsed: r3.elapsed });

    // Test 4: Climbing Stairs (Runtime Error -> __builtin_trap())
    const csRuntime = `class Solution {
public:
    int climbStairs(int n) {
        __builtin_trap();
        return 0;
    }
};`;
    const r4 = await executeCode(csRuntime, 'Climbing Stairs (Runtime Error)');
    testResults.push({ test: 'Climbing Stairs (Runtime Error)', expected: 'Runtime Error', actual: r4.status, pass: r4.status === 'Runtime Error', elapsed: r4.elapsed });

    // Test 5: Climbing Stairs (Infinite Loop -> Time Limit Exceeded within 5s watchdog)
    const csTle = `class Solution {
public:
    int climbStairs(int n) {
        volatile int x = 0;
        while (true) { x++; }
        return x;
    }
};`;
    const r5 = await executeCode(csTle, 'Climbing Stairs (Infinite Loop TLE)', 85);
    testResults.push({ test: 'Climbing Stairs (Infinite Loop)', expected: 'Time Limit Exceeded', actual: r5.status, pass: r5.status === 'Time Limit Exceeded', elapsed: r5.elapsed });

    // Test 6: Immediate recovery without refresh after TLE
    const r6 = await executeCode(csCorrect, 'Recovery after TLE (Correct code)');
    testResults.push({ test: 'Recovery after TLE', expected: 'Accepted', actual: r6.status, pass: r6.status === 'Accepted', elapsed: r6.elapsed });

    // Test 7: Best Time to Buy and Sell Stock (Correct -> Accepted)
    await navigateToProblem('Best Time to Buy and Sell Stock');
    const stockCorrect = `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = 1e9, maxProfit = 0;
        for (int p : prices) {
            minPrice = min(minPrice, p);
            maxProfit = max(maxProfit, p - minPrice);
        }
        return maxProfit;
    }
};`;
    const r7 = await executeCode(stockCorrect, 'Best Time to Buy and Sell Stock (Correct)');
    testResults.push({ test: 'Best Time to Buy and Sell Stock', expected: 'Accepted', actual: r7.status, pass: r7.status === 'Accepted', elapsed: r7.elapsed });

    // Test 8: Binary Search (Correct -> Accepted)
    await navigateToProblem('Binary Search');
    const bsCorrect = `class Solution {
public:
    int search(vector<int>& nums, int target) {
        int l = 0, r = nums.size() - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }
};`;
    const r8 = await executeCode(bsCorrect, 'Binary Search (Correct)');
    testResults.push({ test: 'Binary Search', expected: 'Accepted', actual: r8.status, pass: r8.status === 'Accepted', elapsed: r8.elapsed });

    // Test 9: Rotate Array by K Positions (Correct -> Accepted)
    await navigateToProblem('Rotate Array by K Positions');
    const rotateCorrect = `class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        if (n <= 1) return;
        k = k % n;
        std::reverse(nums.begin(), nums.end());
        std::reverse(nums.begin(), nums.begin() + k);
        std::reverse(nums.begin() + k, nums.end());
    }
};`;
    const r9 = await executeCode(rotateCorrect, 'Rotate Array by K Positions (Correct)');
    testResults.push({ test: 'Rotate Array by K Positions', expected: 'Accepted', actual: r9.status, pass: r9.status === 'Accepted', elapsed: r9.elapsed });

    console.log(`\n===============================================================`);
    console.log(`FINAL GLOBAL TEST MATRIX RESULTS ON LIVE VERCEL PRODUCTION:`);
    console.log(`===============================================================`);
    console.table(testResults);

    const allPassed = testResults.every(t => t.pass);
    console.log(allPassed ? "🎉 ALL TESTS PASSED ON LIVE VERCEL PRODUCTION!" : "⚠️ SOME TESTS FAILED!");

    ws.close();
    edgeProc.kill();

    if (!allPassed) {
        process.exit(1);
    }
}

runMatrix().catch((err) => {
    console.error("Matrix execution error:", err);
    process.exit(1);
});
