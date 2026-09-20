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
        "--user-data-dir=C:\\Users\\HP\\AppData\\Local\\Temp\\edge_harness_test",
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
            if (args.includes("[CodeMedic Executor]") || args.includes("TEST_RESULT") || args.includes("Phase")) {
                console.log(`[browser-log] ${args}`);
            }
        }
    };

    await sendCommand("Runtime.enable");
    await sendCommand("Page.enable");
    await sendCommand("Console.enable");

    console.log("Navigating to " + targetUrl);
    await sendCommand("Page.navigate", { url: targetUrl });
    await new Promise(r => setTimeout(r, 3000));

    const testScript = `
        (async () => {
            const { preloadCppExecutor, executeStudentSolution, getRuntimeStatus } = await import('/src/services/cppExecutor.js');
            await preloadCppExecutor();

            const climbingStairsProblem = {
                title: "Climbing Stairs",
                execution_config: {
                    functionName: "climbStairs",
                    parameters: [{ name: "n", type: "int" }],
                    returnType: "int",
                    outputMode: "RETURN_VALUE"
                },
                examples: [
                    { input: "2", output: "2" },
                    { input: "3", output: "3" }
                ]
            };

            const climbingStairsCorrectCode = \`
class Solution {
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
};
\`;

            const climbingStairsWrongCode = \`
class Solution {
public:
    int climbStairs(int n) {
        return 1;
    }
};
\`;

            const rotateArrayProblem = {
                title: "Rotate Array by K Positions",
                execution_config: {
                    functionName: "rotate",
                    parameters: [
                        { name: "nums", type: "vector<int>&" },
                        { name: "k", type: "int" }
                    ],
                    returnType: "void",
                    outputMode: "MUTATED_PARAMETER",
                    mutates: ["nums"]
                },
                examples: [
                    { input: "[1,2,3,4,5,6,7], 3", output: "[5,6,7,1,2,3,4]" }
                ]
            };

            const rotateArrayCorrectCode = \`
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
};
\`;

            console.log(">>> RUNNING TEST 1: Climbing Stairs Correct Code");
            const t1 = await executeStudentSolution(climbingStairsCorrectCode, climbingStairsProblem);
            console.log("TEST_RESULT 1:", JSON.stringify({ status: t1.status, passed: t1.passedTests, total: t1.totalTests }));

            console.log(">>> RUNNING TEST 2: Climbing Stairs Wrong Code");
            const t2 = await executeStudentSolution(climbingStairsWrongCode, climbingStairsProblem);
            console.log("TEST_RESULT 2:", JSON.stringify({ status: t2.status, passed: t2.passedTests, total: t2.totalTests }));

            console.log(">>> RUNNING TEST 3: Rotate Array Correct Code");
            const t3 = await executeStudentSolution(rotateArrayCorrectCode, rotateArrayProblem);
            console.log("TEST_RESULT 3:", JSON.stringify({ status: t3.status, passed: t3.passedTests, total: t3.totalTests }));

            return { t1, t2, t3 };
        })()
    `;

    console.log("Evaluating test script in browser...");
    const evalRes = await sendCommand("Runtime.evaluate", {
        expression: testScript,
        awaitPromise: true,
        returnByValue: true
    });

    console.log("Result summary:", JSON.stringify(evalRes, null, 2));

    edge.kill();
    process.exit(0);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
