import { ARRAY_PROBLEMS } from "../src/data/problems/arrays.js";
import { TWO_POINTER_PROBLEMS } from "../src/data/problems/twoPointers.js";
import { BINARY_SEARCH_PROBLEMS } from "../src/data/problems/binarySearch.js";
import { CURATED_PERMANENT_PROBLEMS } from "../src/services/problemService.js";
import { validateProblemSpecification } from "../src/services/problemValidator.js";
import { generateStarterCode, generateCppHarness } from "../src/services/executionHarness.js";
import { generateJsStarterCode, executeJsSolution } from "../src/services/jsExecutor.js";

async function runTests() {
    console.log("===============================================================");
    console.log("  CODEMEDIC TEST: AUTH & PROBLEM EXECUTION SYNCHRONIZATION     ");
    console.log("===============================================================\n");

    // 1. ROTATE ARRAY BY K POSITIONS
    console.log("--- TEST 1: Rotate Array by K Positions (In-Place Mutation) ---");
    const rotateArray = ARRAY_PROBLEMS.find(p => p.title.includes("Rotate Array"));
    if (!rotateArray) throw new Error("Rotate Array problem not found in ARRAY_PROBLEMS");

    const valRotate = validateProblemSpecification(rotateArray);
    console.log("Validation isValid:", valRotate.isValid, valRotate.errors);
    if (!valRotate.isValid) throw new Error("Rotate Array specification is invalid: " + valRotate.errors.join(", "));

    const cppRotateStarter = generateStarterCode(rotateArray);
    console.log("C++ Starter:\n" + cppRotateStarter);
    if (!cppRotateStarter.includes("void rotate(vector<int>& nums, int k)")) {
        throw new Error("C++ starter does not have canonical void rotate(vector<int>& nums, int k) signature!");
    }

    const jsRotateStarter = generateJsStarterCode(rotateArray);
    console.log("JS Starter:\n" + jsRotateStarter);
    if (!jsRotateStarter.includes("var rotate = function(nums, k)")) {
        throw new Error("JS starter does not have var rotate = function(nums, k) signature!");
    }
    if (!jsRotateStarter.includes("@return {void}")) {
        throw new Error("JS starter does not have @return {void} in JSDoc!");
    }

    const cppRotateHarness = generateCppHarness(
        `class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        std::reverse(nums.begin(), nums.end());
        std::reverse(nums.begin(), nums.begin() + k);
        std::reverse(nums.begin() + k, nums.end());
    }
};`,
        rotateArray
    );
    if (!cppRotateHarness.includes("solver.rotate(p0, p1);")) {
        throw new Error("C++ harness does not invoke solver.rotate(p0, p1);");
    }
    if (!cppRotateHarness.includes("CodeMedicUtils::serialize(p0)")) {
        throw new Error("C++ harness does not serialize mutated parameter p0!");
    }
    console.log("✓ C++ Harness correctly calls void rotate and serializes mutated p0!");

    // Execute JS in-place solution for Rotate Array
    const jsInPlaceSolution = `
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    if (k === 0) return;
    const rotated = [...nums.slice(n - k), ...nums.slice(0, n - k)];
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};
`;
    console.log("Executing JS In-Place Solution...");
    const jsRotateResult = await executeJsSolution(jsInPlaceSolution, rotateArray);
    console.log("JS Execution Status:", jsRotateResult.status);
    console.log("JS PassedTests:", jsRotateResult.passedTests, "/", jsRotateResult.totalTests);
    if (jsRotateResult.status !== "Accepted") {
        console.error("Test cases:", jsRotateResult.testCases);
        throw new Error("Rotate Array JS in-place solution was NOT Accepted! Status: " + jsRotateResult.status);
    }
    console.log("✓ Rotate Array JS in-place execution: ACCEPTED!\n");

    // 2. BINARY SEARCH
    console.log("--- TEST 2: Binary Search (Return Value) ---");
    const binarySearch = BINARY_SEARCH_PROBLEMS.find(p => p.title.toLowerCase().includes("binary search"));
    if (!binarySearch) throw new Error("Binary Search problem not found");

    const valBs = validateProblemSpecification(binarySearch);
    console.log("Validation isValid:", valBs.isValid);
    if (!valBs.isValid) throw new Error("Binary Search specification invalid: " + valBs.errors.join(", "));

    const cppBsStarter = generateStarterCode(binarySearch);
    console.log("C++ Starter:\n" + cppBsStarter);
    if (!cppBsStarter.includes("int search(vector<int>& nums, int target)")) {
        throw new Error("C++ starter does not have int search(vector<int>& nums, int target)");
    }

    const jsBsCorrect = `
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
};
`;
    const jsBsResult = await executeJsSolution(jsBsCorrect, binarySearch);
    console.log("JS Binary Search Status:", jsBsResult.status);
    if (jsBsResult.status !== "Accepted") {
        throw new Error("Binary Search correct code did not return Accepted!");
    }
    console.log("✓ Binary Search correct code: ACCEPTED!");

    const jsBsWrong = `
var search = function(nums, target) {
    return 999;
};
`;
    const jsBsWrongResult = await executeJsSolution(jsBsWrong, binarySearch);
    console.log("JS Binary Search Wrong Code Status:", jsBsWrongResult.status);
    if (jsBsWrongResult.status !== "Wrong Answer") {
        throw new Error("Binary Search wrong code did not return Wrong Answer!");
    }
    console.log("✓ Binary Search wrong code: WRONG ANSWER!\n");

    // 3. BEST TIME TO BUY AND SELL STOCK
    console.log("--- TEST 3: Best Time to Buy and Sell Stock ---");
    const stockProblem = CURATED_PERMANENT_PROBLEMS.find(p => p.title.includes("Best Time to Buy and Sell Stock"));
    if (!stockProblem) throw new Error("Stock problem not found");

    const jsStockCode = `
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let p of prices) {
        if (p < minPrice) minPrice = p;
        else if (p - minPrice > maxProfit) maxProfit = p - minPrice;
    }
    return maxProfit;
};
`;
    const jsStockResult = await executeJsSolution(jsStockCode, stockProblem);
    console.log("Stock Execution Status:", jsStockResult.status);
    if (jsStockResult.status !== "Accepted") {
        throw new Error("Stock problem did not return Accepted!");
    }
    console.log("✓ Best Time to Buy and Sell Stock: ACCEPTED!\n");

    // 4. SYNTAX / COMPILATION ERROR
    console.log("--- TEST 4: Compilation / Syntax Error ---");
    const syntaxErrCode = `var search = function(nums, target) { return }}};;;`;
    const syntaxResult = await executeJsSolution(syntaxErrCode, binarySearch);
    console.log("Syntax Error Status:", syntaxResult.status);
    if (syntaxResult.status !== "Compilation Error") {
        throw new Error("Syntax error did not produce Compilation Error! Got: " + syntaxResult.status);
    }
    console.log("✓ Compilation Error correctly caught!\n");

    // 5. RUNTIME ERROR
    console.log("--- TEST 5: Runtime Error ---");
    const runtimeErrCode = `var search = function(nums, target) { null.foo(); };`;
    const runtimeResult = await executeJsSolution(runtimeErrCode, binarySearch);
    console.log("Runtime Error Status:", runtimeResult.status);
    if (runtimeResult.status !== "Runtime Error") {
        throw new Error("Runtime error did not produce Runtime Error! Got: " + runtimeResult.status);
    }
    console.log("✓ Runtime Error correctly caught!\n");

    console.log("===============================================================");
    console.log("           ALL EXECUTION & SYNCHRONIZATION TESTS PASSED!       ");
    console.log("===============================================================");
}

runTests().catch(err => {
    console.error("Test suite failed:", err);
    process.exit(1);
});
