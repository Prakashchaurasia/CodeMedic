import { spawn } from 'child_process';

async function main() {
    console.log("Tracing compilation on http://localhost:5173/...");
    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    const port = 9232;
    const userDataDir = "C:\\Users\\HP\\AppData\\Local\\Temp\\edge_trace_prof_" + Date.now();

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

    const newPageRes = await fetch(`http://127.0.0.1:${port}/json/new?http://localhost:5173/`, { method: "PUT" });
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
            console.log(`[LOCAL] ${text}`);
        }
    };

    await send('Page.enable');
    await send('Runtime.enable');

    await new Promise(r => setTimeout(r, 2000));

    console.log("Running executeStudentSolution on Climbing Stairs locally...");
    const evalRes = await send('Runtime.evaluate', {
        expression: `
            (async () => {
                const { executeStudentSolution } = await import('/src/services/cppExecutor.js');
                const problem = {
                    id: "9515edc3-d348-4e2e-a5a0-1e8b1c75092a",
                    title: "Climbing Stairs",
                    execution_config: {
                        functionName: "climbStairs",
                        returnType: "int",
                        parameters: [{ name: "n", type: "int" }],
                        comparisonType: "return_value"
                    },
                    examples: [
                        { input: "n = 2", output: "2" },
                        { input: "n = 3", output: "3" }
                    ]
                };
                const code = \`class Solution {
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
};\`;
                console.log("[STARTING LOCAL EXECUTION]");
                const res = await executeStudentSolution(code, problem, []);
                console.log("[LOCAL EXECUTION FINISHED]", JSON.stringify(res));
                return res;
            })()
        `,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("Execution Result:", evalRes.result?.value);
    ws.close();
    edgeProc.kill();
}

main().catch(console.error);
