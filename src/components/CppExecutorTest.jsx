import { useState } from "react";
import { runCppCode } from "../services/cppExecutor";

function CppExecutorTest() {
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const testCode = `
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    cout << a + b;

    return 0;
}
`;

    async function handleRun() {
        setLoading(true);
        setOutput("");

        const result = await runCppCode(
            testCode,
            "5 7"
        );

        console.log("C++ execution result:", result);

        if (result.success) {
            setOutput(
                `Exit Code: ${result.exitCode}\n` +
                `Output: ${result.stdout}\n` +
                `Time: ${result.durationMs} ms`
            );
        } else {
            setOutput(
                `Execution failed\n\n` +
                `Exit Code: ${result.exitCode}\n` +
                `STDOUT:\n${result.stdout}\n\n` +
                `STDERR:\n${result.stderr}`
            );
        }

        setLoading(false);
    }

    return (
        <div style={{ padding: "30px" }}>
            <h2>C++ Browser Execution Test</h2>

            <button
                onClick={handleRun}
                disabled={loading}
            >
                {loading ? "Compiling & Running..." : "Run C++ Test"}
            </button>

            <pre
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    background: "#111",
                    color: "#fff",
                    borderRadius: "8px",
                    whiteSpace: "pre-wrap",
                }}
            >
                {output || "Output will appear here..."}
            </pre>
        </div>
    );
}

export default CppExecutorTest;