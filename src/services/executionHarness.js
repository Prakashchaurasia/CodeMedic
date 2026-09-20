/**
 * Generic C++ Execution Harness Generator for CodeMedic
 * Wraps function-only student submissions (`class Solution`) into an executable C++ test runner.
 */

/**
 * Standard C++ headers and definitions included in every harness.
 */
const BASE_HARNESS_PREAMBLE = `
#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <unordered_map>
#include <unordered_set>
#include <map>
#include <set>
#include <queue>
#include <stack>
#include <algorithm>
#include <climits>
#include <cmath>
#include <chrono>
#include <cctype>

using namespace std;

// Standard DSA Definitions
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

// Serialization and Parsing Utilities
namespace CodeMedicUtils {
    inline string trim(const string& s) {
        size_t first = s.find_first_not_of(" \\t\\n\\r\\"");
        if (first == string::npos) return "";
        size_t last = s.find_last_not_of(" \\t\\n\\r\\"");
        return s.substr(first, (last - first + 1));
    }

    inline int parseInt(const string& s) {
        string t = trim(s);
        if (t.empty()) return 0;
        try {
            return stoi(t);
        } catch (...) {
            return 0;
        }
    }

    inline long long parseLong(const string& s) {
        string t = trim(s);
        if (t.empty()) return 0LL;
        try {
            return stoll(t);
        } catch (...) {
            return 0LL;
        }
    }

    inline double parseDouble(const string& s) {
        string t = trim(s);
        if (t.empty()) return 0.0;
        try {
            return stod(t);
        } catch (...) {
            return 0.0;
        }
    }

    inline bool parseBool(const string& s) {
        string t = trim(s);
        for (char &c : t) c = tolower(c);
        return (t == "true" || t == "1");
    }

    inline string parseString(const string& s) {
        return trim(s);
    }

    inline vector<int> parseVectorInt(const string& s) {
        vector<int> res;
        string cleaned;
        for (char c : s) {
            if (c == '[' || c == ']' || c == ',') cleaned += ' ';
            else cleaned += c;
        }
        stringstream ss(cleaned);
        int val;
        while (ss >> val) {
            res.push_back(val);
        }
        return res;
    }

    inline vector<long long> parseVectorLongLong(const string& s) {
        vector<long long> res;
        string cleaned;
        for (char c : s) {
            if (c == '[' || c == ']' || c == ',') cleaned += ' ';
            else cleaned += c;
        }
        stringstream ss(cleaned);
        long long val;
        while (ss >> val) {
            res.push_back(val);
        }
        return res;
    }

    inline vector<string> parseVectorString(const string& s) {
        vector<string> res;
        string cur;
        bool inQuotes = false;
        for (char c : s) {
            if (c == '"') {
                inQuotes = !inQuotes;
                if (!inQuotes && !cur.empty()) {
                    res.push_back(cur);
                    cur.clear();
                }
            } else if (inQuotes) {
                cur += c;
            } else if (c != '[' && c != ']' && c != ',' && !isspace(c)) {
                cur += c;
            } else if ((c == ',' || isspace(c)) && !cur.empty()) {
                res.push_back(cur);
                cur.clear();
            }
        }
        if (!cur.empty()) res.push_back(cur);
        return res;
    }

    inline vector<vector<int>> parseVectorVectorInt(const string& s) {
        vector<vector<int>> res;
        size_t start = 0;
        while ((start = s.find('[', start + 1)) != string::npos) {
            size_t end = s.find(']', start);
            if (end == string::npos) break;
            string inner = s.substr(start, end - start + 1);
            res.push_back(parseVectorInt(inner));
            start = end;
        }
        return res;
    }

    inline vector<vector<long long>> parseVectorVectorLongLong(const string& s) {
        vector<vector<long long>> res;
        size_t start = 0;
        while ((start = s.find('[', start + 1)) != string::npos) {
            size_t end = s.find(']', start);
            if (end == string::npos) break;
            string inner = s.substr(start, end - start + 1);
            res.push_back(parseVectorLongLong(inner));
            start = end;
        }
        return res;
    }

    inline ListNode* parseLinkedList(const vector<int>& vals) {
        if (vals.empty()) return nullptr;
        ListNode* head = new ListNode(vals[0]);
        ListNode* cur = head;
        for (size_t i = 1; i < vals.size(); ++i) {
            cur->next = new ListNode(vals[i]);
            cur = cur->next;
        }
        return head;
    }

    inline string serialize(int val) { return to_string(val); }
    inline string serialize(long long val) { return to_string(val); }
    inline string serialize(double val) { 
        string s = to_string(val);
        while (s.size() > 1 && s.back() == '0') s.pop_back();
        if (s.back() == '.') s.pop_back();
        return s;
    }
    inline string serialize(bool val) { return val ? "true" : "false"; }
    inline string serialize(const string& val) { return "\\"" + val + "\\""; }

    inline string serialize(const vector<int>& v) {
        string res = "[";
        for (size_t i = 0; i < v.size(); ++i) {
            if (i > 0) res += ", ";
            res += to_string(v[i]);
        }
        res += "]";
        return res;
    }

    inline string serialize(const vector<long long>& v) {
        string res = "[";
        for (size_t i = 0; i < v.size(); ++i) {
            if (i > 0) res += ", ";
            res += to_string(v[i]);
        }
        res += "]";
        return res;
    }

    inline string serialize(const vector<string>& v) {
        string res = "[";
        for (size_t i = 0; i < v.size(); ++i) {
            if (i > 0) res += ", ";
            res += "\\"" + v[i] + "\\"";
        }
        res += "]";
        return res;
    }

    inline string serialize(const vector<vector<int>>& v) {
        string res = "[";
        for (size_t i = 0; i < v.size(); ++i) {
            if (i > 0) res += ", ";
            res += serialize(v[i]);
        }
        res += "]";
        return res;
    }

    inline string serialize(const vector<vector<long long>>& v) {
        string res = "[";
        for (size_t i = 0; i < v.size(); ++i) {
            if (i > 0) res += ", ";
            res += serialize(v[i]);
        }
        res += "]";
        return res;
    }

    inline string serialize(ListNode* head) {
        string res = "[";
        ListNode* cur = head;
        bool first = true;
        int limit = 1000;
        while (cur && limit--) {
            if (!first) res += ", ";
            res += to_string(cur->val);
            first = false;
            cur = cur->next;
        }
        res += "]";
        return res;
    }

    inline string stripQuotes(string s) {
        string t = trim(s);
        if (t.size() >= 2 && t.front() == '"' && t.back() == '"') {
            return t.substr(1, t.size() - 2);
        }
        return t;
    }

    inline string normalize(string s) {
        string res;
        for (char c : s) {
            if (!isspace(c)) res += tolower(c);
        }
        return res;
    }

    inline string escapeJson(const string& s) {
        string res;
        for (char c : s) {
            if (c == '"') res += "\\\"";
            else if (c == '\\\\') res += "\\\\\\\\";
            else if (c == '\\n') res += "\\\\n";
            else if (c == '\\r') res += "\\\\r";
            else if (c == '\\t') res += "\\\\t";
            else res += c;
        }
        return res;
    }
}
`;

/**
 * Normalizes type names to standard C++ forms
 */
export function normalizeCppType(typeStr) {
    if (!typeStr) return "void";
    let cleaned = typeStr.trim().replace(/\s+/g, " ");
    cleaned = cleaned.replace(/^const\s+/, "");
    if (cleaned.includes("vector<vector<long long")) return cleaned.includes("&") ? "vector<vector<long long>>&" : "vector<vector<long long>>";
    if (cleaned.includes("vector<vector<int")) return cleaned.includes("&") ? "vector<vector<int>>&" : "vector<vector<int>>";
    if (cleaned.includes("vector<long long")) return cleaned.includes("&") ? "vector<long long>&" : "vector<long long>";
    if (cleaned.includes("vector<int")) return cleaned.includes("&") ? "vector<int>&" : "vector<int>";
    if (cleaned.includes("vector<string")) return cleaned.includes("&") ? "vector<string>&" : "vector<string>";
    if (cleaned.includes("vector<double")) return cleaned.includes("&") ? "vector<double>&" : "vector<double>";
    if (cleaned.includes("ListNode")) return "ListNode*";
    if (cleaned.includes("TreeNode")) return "TreeNode*";
    if (cleaned.includes("long long")) return "long long";
    if (cleaned.includes("long")) return "long long";
    if (cleaned.includes("int")) return "int";
    if (cleaned.includes("string")) return cleaned.includes("&") ? "string&" : "string";
    if (cleaned.includes("bool")) return "bool";
    if (cleaned.includes("double") || cleaned.includes("float")) return "double";
    return cleaned;
}

/**
 * Extracts named parameter assignments from example inputs (e.g. `s = "aaabbc", k = 2`).
 */
export function parseNamedParamsFromExample(inputStr) {
    if (!inputStr || typeof inputStr !== "string") return [];
    const parts = [];
    let cur = "";
    let bracketDepth = 0;
    let inQuotes = false;
    for (let i = 0; i < inputStr.length; i++) {
        const c = inputStr[i];
        if (c === '"') inQuotes = !inQuotes;
        else if (!inQuotes) {
            if (c === '[' || c === '(' || c === '{') bracketDepth++;
            else if (c === ']' || c === ')' || c === '}') bracketDepth--;
            else if ((c === ',' || c === '\n') && bracketDepth === 0) {
                if (cur.trim()) parts.push(cur.trim());
                cur = "";
                continue;
            }
        }
        cur += c;
    }
    if (cur.trim()) parts.push(cur.trim());

    const params = [];
    for (const part of parts) {
        const eqIdx = part.indexOf('=');
        if (eqIdx !== -1) {
            const name = part.slice(0, eqIdx).trim();
            const val = part.slice(eqIdx + 1).trim();
            if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
                let type = "int";
                if (val.startsWith('"')) type = "string";
                else if (val.startsWith("[")) {
                    if (val.includes('"')) type = "vector<string>&";
                    else if (val.slice(1).includes("[")) type = "vector<vector<int>>&";
                    else type = "vector<int>&";
                } else if (val === "true" || val === "false") type = "bool";
                else if (val.includes(".")) type = "double";
                else if (/^-?\d+$/.test(val)) {
                    type = Math.abs(Number(val)) > 2147483647 ? "long long" : "int";
                }
                params.push({ name, type });
            }
        }
    }
    return params;
}

/**
 * Safely infers return type from example output or problem metadata.
 */
export function inferReturnTypeFromExample(problem) {
    const exOut = (problem?.examples?.[0]?.output || "").trim();
    if (exOut.startsWith('"')) return "string";
    if (exOut.startsWith("[")) return "vector<int>";
    if (exOut === "true" || exOut === "false") return "bool";
    if (exOut.includes(".")) return "double";
    if (/^-?\d+$/.test(exOut)) {
        return Math.abs(Number(exOut)) > 2147483647 ? "long long" : "int";
    }

    const outFmt = (problem?.output_format || problem?.outputFormat || "").toLowerCase();
    if (outFmt.includes("bool") || outFmt.includes("true") || outFmt.includes("false")) return "bool";
    if (outFmt.includes("string")) return "string";
    if (outFmt.includes("vector") || outFmt.includes("array")) return "vector<int>";
    if (outFmt.includes("long")) return "long long";
    return "int";
}

/**
 * Dynamically parses the student's C++ `class Solution` implementation to extract
 * the method name, return type, and parameter list.
 */
export function parseSolutionSignature(studentCode) {
    if (!studentCode || typeof studentCode !== "string") return null;

    // Strip comments to avoid false positive pattern matches
    const noComments = studentCode
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*/g, "");

    // Extract class Solution body
    const classMatch = noComments.match(/class\s+Solution\s*\{([\s\S]*?)\};?/);
    const body = classMatch ? classMatch[1] : noComments;

    // Match method declarations or definitions inside class Solution:
    // e.g.: vector<int> twoSum(vector<int>& nums, int target) {
    // e.g.: int maxProfit(vector<int>& prices) {
    // e.g.: bool isValid(string s) {
    // e.g.: ListNode* reverseList(ListNode* head) {
    const methodRegex = /([a-zA-Z0-9_<>,:*&\s]+?)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*\{/;
    const match = body.match(methodRegex);
    if (!match) return null;

    let returnType = match[1].trim();
    // Clean up keywords like public:, virtual, static, inline, explicit
    returnType = returnType
        .replace(/^(public|private|protected)\s*:\s*/, "")
        .replace(/\b(virtual|static|inline|explicit)\b\s*/g, "")
        .trim();

    const functionName = match[2].trim();
    // Guard against constructors or control structures
    if (["solution", "if", "for", "while", "switch", "catch"].includes(functionName.toLowerCase())) {
        return null;
    }

    const rawParams = match[3].trim();
    const parameters = [];

    if (rawParams.length > 0) {
        // Split parameters by comma outside template brackets <...>
        const paramTokens = [];
        let depth = 0;
        let cur = "";
        for (let i = 0; i < rawParams.length; i++) {
            const ch = rawParams[i];
            if (ch === '<') depth++;
            else if (ch === '>') depth--;
            else if (ch === ',' && depth === 0) {
                if (cur.trim()) paramTokens.push(cur.trim());
                cur = "";
                continue;
            }
            cur += ch;
        }
        if (cur.trim()) paramTokens.push(cur.trim());

        for (let i = 0; i < paramTokens.length; i++) {
            const token = paramTokens[i].trim();
            // Split type from parameter name
            const lastSpace = token.lastIndexOf(" ");
            const lastStar = token.lastIndexOf("*");
            const lastAmp = token.lastIndexOf("&");
            const splitIdx = Math.max(lastSpace, lastStar, lastAmp);

            if (splitIdx !== -1 && splitIdx < token.length - 1) {
                const type = token.slice(0, splitIdx + 1).trim();
                const name = token.slice(splitIdx + 1).trim();
                parameters.push({ name: name || `p${i}`, type });
            } else {
                parameters.push({ name: `p${i}`, type: token });
            }
        }
    }

    return {
        functionName,
        returnType,
        parameters,
        comparisonType: "return_value"
    };
}

/**
 * Infers an execution configuration from problem metadata if none is provided.
 */
export function inferExecutionConfig(problem) {
    if (!problem) {
        return {
            functionName: "solve",
            returnType: "int",
            parameters: [],
            comparisonType: "return_value"
        };
    }

    // 1. Check if canonical execution_config is already attached
    if (problem.execution_config && typeof problem.execution_config === "object") {
        const cfg = problem.execution_config;
        if (Array.isArray(cfg.parameters) && cfg.parameters.length > 0) {
            // Check if this was a legacy generated problem with the hardcoded dummy single 'nums' parameter
            if (problem.is_generated && cfg.parameters.length === 1 && cfg.parameters[0].name === "nums") {
                const exIn = problem.examples?.[0]?.input || "";
                const candidate = parseNamedParamsFromExample(exIn);
                if (candidate.length > 0 && (candidate.length > 1 || candidate[0].name !== "nums")) {
                    return {
                        functionName: cfg.functionName || "solve",
                        returnType: inferReturnTypeFromExample(problem),
                        parameters: candidate,
                        comparisonType: "return_value"
                    };
                }
            }
            return cfg;
        }
    }

    // 2. If problem has examples, safely reconstruct from example inputs & outputs
    if (Array.isArray(problem.examples) && problem.examples.length > 0) {
        const exIn = problem.examples[0]?.input || "";
        const candidate = parseNamedParamsFromExample(exIn);
        if (candidate.length > 0) {
            return {
                functionName: "solve",
                returnType: inferReturnTypeFromExample(problem),
                parameters: candidate,
                comparisonType: "return_value"
            };
        }
    }

    // 3. Fallback matching for curated permanent library problems
    const title = (problem.title || "").toLowerCase();
    const topic = (problem.topic || "").toLowerCase();

    if (title.includes("two sum") || title.includes("target sum") || title.includes("pair with") || title.includes("find pair")) {
        return {
            functionName: "twoSum",
            returnType: "vector<int>",
            parameters: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("buy and sell stock") || title.includes("max profit")) {
        return {
            functionName: "maxProfit",
            returnType: "int",
            parameters: [
                { name: "prices", type: "vector<int>&" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("reverse linked list")) {
        return {
            functionName: "reverseList",
            returnType: "ListNode*",
            parameters: [
                { name: "head", type: "ListNode*" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("valid parentheses") || title.includes("valid parenthesis")) {
        return {
            functionName: "isValid",
            returnType: "bool",
            parameters: [
                { name: "s", type: "string" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("fibonacci") || title.includes("climbing stairs")) {
        return {
            functionName: title.includes("fibonacci") ? "fib" : "climbStairs",
            returnType: "int",
            parameters: [
                { name: "n", type: "int" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("valid anagram") || title.includes("is anagram")) {
        return {
            functionName: "isAnagram",
            returnType: "bool",
            parameters: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("valid palindrome") || title.includes("is palindrome")) {
        return {
            functionName: "isPalindrome",
            returnType: "bool",
            parameters: [
                { name: "s", type: "string" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("binary search") || title.includes("search in sorted")) {
        return {
            functionName: "search",
            returnType: "int",
            parameters: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            comparisonType: "return_value"
        };
    }

    if (title.includes("maximum subarray")) {
        return {
            functionName: "maxSubArray",
            returnType: "int",
            parameters: [
                { name: "nums", type: "vector<int>&" }
            ],
            comparisonType: "return_value"
        };
    }

    // 4. If generated problem cannot be safely parsed, mark as requiring regeneration
    if (problem.is_generated) {
        return {
            functionName: "solve",
            returnType: "int",
            parameters: [],
            comparisonType: "return_value",
            requiresRegeneration: true
        };
    }

    // Curated generic fallback
    if (topic.includes("string")) {
        return {
            functionName: "solve",
            returnType: "string",
            parameters: [
                { name: "s", type: "string" }
            ],
            comparisonType: "return_value"
        };
    }

    return {
        functionName: "solve",
        returnType: "int",
        parameters: [
            { name: "nums", type: "vector<int>&" }
        ],
        comparisonType: "return_value"
    };
}

/**
 * Generates initial boilerplate starter code for the problem.
 */
export function generateStarterCode(problem) {
    const config = inferExecutionConfig(problem);
    if (config.requiresRegeneration) {
        return `// This legacy generated problem does not contain a canonical function specification.
// Please regenerate this problem using the Practice Generator.
class Solution {
public:
    // Function specification unavailable for this legacy problem
};
`;
    }

    const paramsStr = (config.parameters || [])
        .map(p => `${p.type} ${p.name}`)
        .join(", ");

    return `class Solution {
public:
    ${config.returnType} ${config.functionName}(${paramsStr}) {
        // Write your solution here
        
    }
};
`;
}

/**
 * Escapes strings for embedding inside C++ string literals.
 */
function escapeCppString(str) {
    if (typeof str !== "string") {
        str = JSON.stringify(str) || "";
    }
    return str
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");
}

/**
 * Prepares test cases for execution harness from problem examples or test case rows.
 */
export function extractTestCases(problem, rawTestCases = []) {
    const cases = [];

    // First use explicit test cases passed in
    if (Array.isArray(rawTestCases) && rawTestCases.length > 0) {
        for (let i = 0; i < rawTestCases.length; i++) {
            const tc = rawTestCases[i];
            let inputStr = typeof tc.input === "string" ? tc.input : JSON.stringify(tc.input);
            let expectedStr = typeof tc.expected_output !== "undefined" 
                ? tc.expected_output 
                : (typeof tc.expectedOutput !== "undefined" ? tc.expectedOutput : "");
            if (typeof expectedStr !== "string") expectedStr = JSON.stringify(expectedStr);

            // Strip surrounding JSON quotes if it was double-encoded
            if (inputStr.startsWith('"') && inputStr.endsWith('"')) {
                try { inputStr = JSON.parse(inputStr); } catch (_) {}
            }
            if (expectedStr.startsWith('"') && expectedStr.endsWith('"')) {
                try { expectedStr = JSON.parse(expectedStr); } catch (_) {}
            }

            cases.push({
                id: i + 1,
                input: inputStr,
                expectedOutput: expectedStr
            });
        }
    }

    // If no explicit test cases, use problem.examples
    if (cases.length === 0 && Array.isArray(problem?.examples)) {
        problem.examples.forEach((ex, idx) => {
            cases.push({
                id: idx + 1,
                input: ex.input || "",
                expectedOutput: ex.output || ""
            });
        });
    }

    // Fallback if still empty
    if (cases.length === 0) {
        cases.push({
            id: 1,
            input: "",
            expectedOutput: ""
        });
    }

    return cases;
}

/**
 * Generates the full C++ harness string including student code and a test runner in main().
 */
export function generateCppHarness(studentCode, problem, testCases = []) {
    // 1. Canonical problem configuration is the single source of truth
    const config = inferExecutionConfig(problem);
    const resolvedCases = extractTestCases(problem, testCases);
    const params = config.parameters || [];

    // Helper to generate parsing code for each parameter
    function generateParamParser(type, rawVarName, targetVarName) {
        const norm = normalizeCppType(type);
        if (norm.startsWith("vector<vector<long long>>")) {
            return `vector<vector<long long>> ${targetVarName} = CodeMedicUtils::parseVectorVectorLongLong(${rawVarName});`;
        }
        if (norm.startsWith("vector<vector<int>>")) {
            return `vector<vector<int>> ${targetVarName} = CodeMedicUtils::parseVectorVectorInt(${rawVarName});`;
        }
        if (norm.startsWith("vector<long long>")) {
            return `vector<long long> ${targetVarName} = CodeMedicUtils::parseVectorLongLong(${rawVarName});`;
        }
        if (norm.startsWith("vector<int>")) {
            return `vector<int> ${targetVarName} = CodeMedicUtils::parseVectorInt(${rawVarName});`;
        }
        if (norm.startsWith("vector<string>")) {
            return `vector<string> ${targetVarName} = CodeMedicUtils::parseVectorString(${rawVarName});`;
        }
        if (norm === "ListNode*") {
            return `ListNode* ${targetVarName} = CodeMedicUtils::parseLinkedList(CodeMedicUtils::parseVectorInt(${rawVarName}));`;
        }
        if (norm === "int") {
            return `int ${targetVarName} = CodeMedicUtils::parseInt(${rawVarName});`;
        }
        if (norm === "long long") {
            return `long long ${targetVarName} = CodeMedicUtils::parseLong(${rawVarName});`;
        }
        if (norm === "double") {
            return `double ${targetVarName} = CodeMedicUtils::parseDouble(${rawVarName});`;
        }
        if (norm === "bool") {
            return `bool ${targetVarName} = CodeMedicUtils::parseBool(${rawVarName});`;
        }
        return `string ${targetVarName} = CodeMedicUtils::parseString(${rawVarName});`;
    }

    // Build the test cases array in C++
    let testCasesCpp = `struct TestCase {\n    int id;\n    string rawInput;\n    string expectedOutput;\n};\n\n`;
    testCasesCpp += `vector<TestCase> testCases = {\n`;

    resolvedCases.forEach((tc, idx) => {
        testCasesCpp += `    { ${tc.id}, "${escapeCppString(tc.input)}", "${escapeCppString(tc.expectedOutput)}" }${idx < resolvedCases.length - 1 ? "," : ""}\n`;
    });
    testCasesCpp += `};\n\n`;

    // Universal multi-parameter runner invocation
    let runnerInvocation = "";
    if (params.length === 0) {
        runnerInvocation = `
            string rawIn = tc.rawInput;
            auto start = chrono::high_resolution_clock::now();
            auto actualResult = solver.${config.functionName}();
            auto end = chrono::high_resolution_clock::now();
            double durationMs = chrono::duration<double, milli>(end - start).count();
            string actualStr = CodeMedicUtils::serialize(actualResult);
        `;
    } else {
        const paramExtractors = params.map((p, idx) => `
            string arg${idx} = (paramParts.size() > ${idx}) ? paramParts[${idx}] : "";
            {
                size_t eqPos = string::npos;
                bool inQ = false;
                int bDepth = 0;
                for (size_t k = 0; k < arg${idx}.size(); ++k) {
                    char ch = arg${idx}[k];
                    if (ch == '"') inQ = !inQ;
                    else if (!inQ) {
                        if (ch == '[' || ch == '(' || ch == '{') bDepth++;
                        else if (ch == ']' || ch == ')' || ch == '}') bDepth--;
                        else if (ch == '=' && bDepth == 0) {
                            eqPos = k;
                            break;
                        }
                    }
                }
                if (eqPos != string::npos) {
                    arg${idx} = CodeMedicUtils::trim(arg${idx}.substr(eqPos + 1));
                }
            }
            ${generateParamParser(p.type, `arg${idx}`, `p${idx}`)}
        `).join("\n");

        const argsList = params.map((_, idx) => `p${idx}`).join(", ");
        const invokeBlock = (config.returnType === "void")
            ? `
            auto start = chrono::high_resolution_clock::now();
            solver.${config.functionName}(${argsList});
            auto end = chrono::high_resolution_clock::now();
            double durationMs = chrono::duration<double, milli>(end - start).count();
            string actualStr = ${params.length > 0 ? `CodeMedicUtils::serialize(p0)` : `"Finished"`};
            `
            : `
            auto start = chrono::high_resolution_clock::now();
            auto actualResult = solver.${config.functionName}(${argsList});
            auto end = chrono::high_resolution_clock::now();
            double durationMs = chrono::duration<double, milli>(end - start).count();
            string actualStr = CodeMedicUtils::serialize(actualResult);
            `;

        runnerInvocation = `
            string rawIn = tc.rawInput;
            vector<string> paramParts;
            int bracketDepth = 0;
            bool inQuotes = false;
            bool escaped = false;
            string curPart = "";

            for (size_t k = 0; k < rawIn.size(); ++k) {
                char c = rawIn[k];
                if (escaped) {
                    curPart += c;
                    escaped = false;
                    continue;
                }
                if (c == '\\\\') {
                    curPart += c;
                    escaped = true;
                    continue;
                }
                if (c == '"') {
                    inQuotes = !inQuotes;
                    curPart += c;
                    continue;
                }
                if (!inQuotes) {
                    if (c == '[' || c == '(' || c == '{') {
                        bracketDepth++;
                    } else if (c == ']' || c == ')' || c == '}') {
                        bracketDepth--;
                    } else if ((c == ',' || c == '\\n') && bracketDepth == 0) {
                        paramParts.push_back(CodeMedicUtils::trim(curPart));
                        curPart = "";
                        continue;
                    }
                }
                curPart += c;
            }
            if (!curPart.empty() || paramParts.empty()) {
                paramParts.push_back(CodeMedicUtils::trim(curPart));
            }

            ${paramExtractors}
            ${invokeBlock}
        `;
    }

    const fullHarness = `
${BASE_HARNESS_PREAMBLE}

// ==========================================
// STUDENT CODE STARTS HERE
// ==========================================
${studentCode}
// ==========================================
// STUDENT CODE ENDS HERE
// ==========================================

${testCasesCpp}

int main() {
    Solution solver;
    cout << "__CODEMEDIC_OUTPUT_START__\\n";
    cout << "[\\n";
    cout << flush;
    fflush(stdout);

    for (size_t i = 0; i < testCases.size(); ++i) {
        const auto& tc = testCases[i];
        try {
            ${runnerInvocation}

            bool passed = false;
            // Support unordered index pair matching for problems like Two Sum
            if (actualStr.size() >= 2 && actualStr.front() == '[' && actualStr.back() == ']') {
                if (CodeMedicUtils::normalize(actualStr) == CodeMedicUtils::normalize(tc.expectedOutput)) {
                    passed = true;
                } else {
                    auto parsedAct = CodeMedicUtils::parseVectorInt(actualStr);
                    auto parsedExp = CodeMedicUtils::parseVectorInt(tc.expectedOutput);
                    if (parsedAct.size() == 2 && parsedExp.size() == 2) {
                        sort(parsedAct.begin(), parsedAct.end());
                        sort(parsedExp.begin(), parsedExp.end());
                        if (parsedAct == parsedExp) passed = true;
                    }
                }
            } else if (tc.expectedOutput.empty()) {
                passed = true;
            } else {
                passed = (CodeMedicUtils::normalize(actualStr) == CodeMedicUtils::normalize(tc.expectedOutput) ||
                          CodeMedicUtils::normalize(CodeMedicUtils::stripQuotes(actualStr)) == CodeMedicUtils::normalize(CodeMedicUtils::stripQuotes(tc.expectedOutput)));
            }

            cout << "  {\\n";
            cout << "    \\"testIndex\\": " << i << ",\\n";
            cout << "    \\"testId\\": " << tc.id << ",\\n";
            cout << "    \\"passed\\": " << (passed ? "true" : "false") << ",\\n";
            cout << "    \\"input\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.rawInput)) << "\\",\\n";
            cout << "    \\"expected\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.expectedOutput)) << "\\",\\n";
            cout << "    \\"actual\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(actualStr)) << "\\",\\n";
            cout << "    \\"durationMs\\": " << durationMs << "\\n";
            cout << "  }" << (i < testCases.size() - 1 ? "," : "") << "\\n";
            cout << flush;
            fflush(stdout);

        } catch (const bad_alloc& e) {
            cout << "  {\\n";
            cout << "    \\"testIndex\\": " << i << ",\\n";
            cout << "    \\"testId\\": " << tc.id << ",\\n";
            cout << "    \\"passed\\": false,\\n";
            cout << "    \\"input\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.rawInput)) << "\\",\\n";
            cout << "    \\"expected\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.expectedOutput)) << "\\",\\n";
            cout << "    \\"actual\\": \\"Memory Limit Exceeded: Out of memory (bad_alloc)\\",\\n";
            cout << "    \\"errorType\\": \\"Memory Limit Exceeded\\",\\n";
            cout << "    \\"durationMs\\": 0.0\\n";
            cout << "  }" << (i < testCases.size() - 1 ? "," : "") << "\\n";
            cout << flush;
            fflush(stdout);

        } catch (const exception& e) {
            cout << "  {\\n";
            cout << "    \\"testIndex\\": " << i << ",\\n";
            cout << "    \\"testId\\": " << tc.id << ",\\n";
            cout << "    \\"passed\\": false,\\n";
            cout << "    \\"input\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.rawInput)) << "\\",\\n";
            cout << "    \\"expected\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.expectedOutput)) << "\\",\\n";
            cout << "    \\"actual\\": \\"Runtime Exception: " << CodeMedicUtils::escapeJson(e.what()) << "\\",\\n";
            cout << "    \\"errorType\\": \\"Runtime Error\\",\\n";
            cout << "    \\"durationMs\\": 0.0\\n";
            cout << "  }" << (i < testCases.size() - 1 ? "," : "") << "\\n";
            cout << flush;
            fflush(stdout);

        } catch (...) {
            cout << "  {\\n";
            cout << "    \\"testIndex\\": " << i << ",\\n";
            cout << "    \\"testId\\": " << tc.id << ",\\n";
            cout << "    \\"passed\\": false,\\n";
            cout << "    \\"input\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.rawInput)) << "\\",\\n";
            cout << "    \\"expected\\": \\"" << CodeMedicUtils::escapeJson(CodeMedicUtils::trim(tc.expectedOutput)) << "\\",\\n";
            cout << "    \\"actual\\": \\"Runtime Error: Program crashed unexpectedly during execution\\",\\n";
            cout << "    \\"errorType\\": \\"Runtime Error\\",\\n";
            cout << "    \\"durationMs\\": 0.0\\n";
            cout << "  }" << (i < testCases.size() - 1 ? "," : "") << "\\n";
            cout << flush;
            fflush(stdout);
        }
    }

    cout << "]\\n";
    cout << "__CODEMEDIC_OUTPUT_END__\\n";
    cout << flush;
    cerr << flush;
    fflush(stdout);
    fflush(stderr);
    return 0;
}
`;

    return fullHarness;
}

/**
 * Parses the structured output produced by the C++ harness.
 */
export function parseHarnessOutput(stdout) {
    if (!stdout) return [];
    const startTag = "__CODEMEDIC_OUTPUT_START__";
    const endTag = "__CODEMEDIC_OUTPUT_END__";

    const sIdx = stdout.indexOf(startTag);
    const eIdx = stdout.indexOf(endTag);

    if (sIdx === -1 || eIdx === -1) {
        return [];
    }

    let jsonStr = stdout.substring(sIdx + startTag.length, eIdx).trim();
    try {
        return JSON.parse(jsonStr);
    } catch (err) {
        try {
            // Replace literal newlines and tabs within JSON strings if any leaked through
            const sanitized = jsonStr.replace(/"((?:[^"\\]|\\.)*)"/g, (m, inner) => {
                return '"' + inner.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + '"';
            });
            return JSON.parse(sanitized);
        } catch (e2) {
            console.error("Failed to parse harness JSON output:", err, jsonStr);
            return [];
        }
    }
}


