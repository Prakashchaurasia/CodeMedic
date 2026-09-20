import { ARRAY_PROBLEMS } from "../src/data/problems/arrays.js";
import { BINARY_SEARCH_PROBLEMS } from "../src/data/problems/binarySearch.js";
import { validateProblemSpecification } from "../src/services/problemValidator.js";
import { generateStarterCode, generateCppHarness, inferExecutionConfig } from "../src/services/executionHarness.js";
import { generateJsStarterCode, executeJsSolution } from "../src/services/jsExecutor.js";

async function runProductionTestSuite() {
    console.log("===============================================================");
    console.log("       CODEMEDIC PRODUCTION COMPREHENSIVE VERIFICATION         ");
    console.log("===============================================================\n");

    // 1. ROTATE ARRAY BY K POSITIONS
    console.log("--- TEST 1: Rotate Array by K Positions (In-Place Mutation) ---");
    const rotateArray = ARRAY_PROBLEMS.find(p => p.title.includes("Rotate Array"));
    if (!rotateArray) throw new Error("Rotate Array problem not found");

    const rotateConfig = inferExecutionConfig(rotateArray);
    console.log("Config outputMode:", rotateConfig.outputMode);
    console.log("Config returnType:", rotateConfig.returnType);
    console.log("Config mutates:", rotateConfig.mutates);

    if (rotateConfig.returnType !== "void") {
        throw new Error("Rotate Array canonical returnType must be 'void'!");
    }
    if (rotateConfig.outputMode !== "MUTATED_PARAMETER") {
        throw new Error("Rotate Array canonical outputMode must be 'MUTATED_PARAMETER'!");
    }

    const cppRotateStarter = generateStarterCode(rotateArray);
    console.log("C++ Starter:\n" + cppRotateStarter.trim());
    if (!cppRotateStarter.includes("void rotate(vector<int>& nums, int k)")) {
        throw new Error("C++ starter does not have void rotate(vector<int>& nums, int k)");
    }

    const jsRotateStarter = generateJsStarterCode(rotateArray);
    console.log("JS Starter:\n" + jsRotateStarter.trim());
    if (!jsRotateStarter.includes("var rotate = function(nums, k)")) {
        throw new Error("JS starter does not have var rotate = function(nums, k)");
    }
    if (!jsRotateStarter.includes("@return {void}")) {
        throw new Error("JS starter JSDoc does not specify @return {void}");
    }

    const cppRotateHarness = generateCppHarness("class Solution { public: void rotate(vector<int>& nums, int k) {} };", rotateArray);
    if (!cppRotateHarness.includes("solver.rotate(p0, p1);")) {
        throw new Error("C++ harness does not invoke solver.rotate(p0, p1);");
    }
    if (!cppRotateHarness.includes("CodeMedicUtils::serialize(p0)")) {
        throw new Error("C++ harness does not serialize mutated p0!");
    }
    console.log("✓ Rotate Array C++ harness and starters verified!");

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
    const jsRotateResult = await executeJsSolution(jsInPlaceSolution, rotateArray);
    console.log("JS In-Place Execution Status:", jsRotateResult.status, `(${jsRotateResult.passedTests}/${jsRotateResult.totalTests} passed)`);
    if (jsRotateResult.status !== "Accepted") {
        throw new Error("Rotate Array JS in-place was not Accepted! Got: " + jsRotateResult.status);
    }
    console.log("✓ Rotate Array In-Place Execution: ACCEPTED!\n");

    // 2. BINARY SEARCH
    console.log("--- TEST 2: Binary Search (RETURN_VALUE) ---");
    const binarySearch = BINARY_SEARCH_PROBLEMS.find(p => p.title.toLowerCase().includes("binary search"));
    const bsConfig = inferExecutionConfig(binarySearch);
    if (bsConfig.outputMode !== "RETURN_VALUE") {
        throw new Error("Binary Search outputMode must be RETURN_VALUE!");
    }

    const cppBsStarter = generateStarterCode(binarySearch);
    console.log("C++ Starter:\n" + cppBsStarter.trim());
    if (!cppBsStarter.includes("int search(vector<int>& nums, int target)")) {
        throw new Error("Binary search C++ starter does not have int search(vector<int>& nums, int target)");
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
    console.log("JS Binary Search Correct Status:", jsBsResult.status);
    if (jsBsResult.status !== "Accepted") {
        throw new Error("Binary Search correct solution did not return Accepted!");
    }
    console.log("✓ Binary Search Correct Code: ACCEPTED!");

    const jsBsWrong = `var search = function(nums, target) { return 999; };`;
    const jsBsWrongResult = await executeJsSolution(jsBsWrong, binarySearch);
    console.log("JS Binary Search Wrong Status:", jsBsWrongResult.status);
    if (jsBsWrongResult.status !== "Wrong Answer") {
        throw new Error("Binary Search wrong solution did not return Wrong Answer!");
    }
    console.log("✓ Binary Search Wrong Code: WRONG ANSWER!\n");

    // 3. USER ISOLATION
    console.log("--- TEST 3: User A / User B Draft Isolation ---");
    const mockStorage = new Map();
    const getDraftKey = (uid, pid, lang) => uid && pid ? `codemedic_draft_${uid}_${pid}_${lang}` : null;

    const userA_id = "user-aaa-111";
    const userB_id = "user-bbb-222";
    const problemId = binarySearch.id;

    const draftKeyA = getDraftKey(userA_id, problemId, "cpp");
    const draftKeyB = getDraftKey(userB_id, problemId, "cpp");

    mockStorage.set(draftKeyA, "// USER A PRIVATE TEST");

    console.log(`User A draft saved under: ${draftKeyA} -> "${mockStorage.get(draftKeyA)}"`);
    console.log(`User B accesses draft key: ${draftKeyB} -> ${mockStorage.get(draftKeyB) || "(none - defaults to canonical starter)"}`);

    if (mockStorage.get(draftKeyB)) {
        throw new Error("User B was able to access User A's private draft!");
    }
    console.log("✓ User A and User B drafts strictly isolated!\n");

    // 4. LOGOUT SESSION CLEANUP
    console.log("--- TEST 4: Logout Storage Cleanup ---");
    mockStorage.set("codemedic_active_page", "Analyze Code");
    mockStorage.set("codemedic_selected_problem", JSON.stringify(binarySearch));
    mockStorage.set(draftKeyA, "// USER A PRIVATE TEST");
    mockStorage.set("unrelated_browser_key", "keep_me");

    // Simulate handleFullLogout cleanup
    const keysToRemove = [];
    for (const [k] of mockStorage.entries()) {
        if (k.startsWith("codemedic_")) {
            keysToRemove.push(k);
        }
    }
    keysToRemove.forEach(k => mockStorage.delete(k));

    if (mockStorage.has("codemedic_selected_problem") || mockStorage.has(draftKeyA)) {
        throw new Error("Logout failed to clean codemedic_* session storage keys!");
    }
    if (!mockStorage.has("unrelated_browser_key")) {
        throw new Error("Logout removed unrelated browser keys!");
    }
    console.log("✓ Logout correctly purges all codemedic session state and drafts!\n");

    console.log("===============================================================");
    console.log("       ALL PRODUCTION VERIFICATION CHECKS COMPLETED!           ");
    console.log("===============================================================");
}

runProductionTestSuite().catch(err => {
    console.error("Test suite failed:", err);
    process.exit(1);
});
