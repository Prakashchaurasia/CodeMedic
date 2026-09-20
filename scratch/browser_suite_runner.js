(async () => {
    const results = [];
    const { executeStudentSolution, preloadCppExecutor, getRuntimeStatus } = await import('/src/services/cppExecutor.js');

    console.log("[REGRESSION] Initial runtime status:", getRuntimeStatus());
    console.log("[REGRESSION] Booting C++ environment with preloadCppExecutor()...");
    const bootT0 = Date.now();
    await preloadCppExecutor();
    const bootTime = Date.now() - bootT0;
    console.log("[REGRESSION] Boot completed in", bootTime, "ms. Status now:", getRuntimeStatus());

    // ----------------------------------------------------
    // PROBLEM DEFINITIONS
    // ----------------------------------------------------
    const climbingStairsProb = {
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

    const stockProb = {
        id: "97163b67-703b-4e97-980a-7a559674667b",
        title: "Best Time to Buy and Sell Stock",
        execution_config: {
            functionName: "maxProfit",
            returnType: "int",
            parameters: [{ name: "prices", type: "vector<int>&" }],
            comparisonType: "return_value"
        },
        examples: [
            { input: "prices = [7,1,5,3,6,4]", output: "5" },
            { input: "prices = [7,6,4,3,1]", output: "0" }
        ]
    };

    const rotateProb = {
        id: "70cc1dcc-d26d-4f9f-a8bb-9ae53a27eb2a",
        title: "Rotate Array by K Positions",
        execution_config: {
            functionName: "rotate",
            returnType: "void",
            parameters: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            outputMode: "MUTATED_PARAMETER",
            mutates: ["nums"],
            comparisonType: "mutated_parameter"
        },
        examples: [
            { input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]" },
            { input: "nums = [-1,-100,3,99], k = 2", output: "[3,99,-1,-100]" }
        ]
    };

    // ----------------------------------------------------
    // TEST 1: Climbing Stairs Correct Code -> Accepted
    // ----------------------------------------------------
    console.log("\n>>> [TEST 1] Climbing Stairs Correct Code");
    const t1Start = Date.now();
    const t1Code = `class Solution {
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
    const t1Res = await executeStudentSolution(t1Code, climbingStairsProb, []);
    results.push({
        test: "TEST 1: Climbing Stairs Correct Code",
        expectedStatus: "Accepted",
        actualStatus: t1Res.status,
        pass: t1Res.status === "Accepted" && t1Res.passedTests === 2,
        durationMs: Date.now() - t1Start,
        details: t1Res.message
    });

    // ----------------------------------------------------
    // TEST 2: Climbing Stairs Wrong Code -> Wrong Answer
    // ----------------------------------------------------
    console.log("\n>>> [TEST 2] Climbing Stairs Wrong Code");
    const t2Start = Date.now();
    const t2Code = `class Solution {
public:
    int climbStairs(int n) {
        return 1; // Wrong answer for n = 2 and n = 3
    }
};`;
    const t2Res = await executeStudentSolution(t2Code, climbingStairsProb, []);
    results.push({
        test: "TEST 2: Climbing Stairs Wrong Code",
        expectedStatus: "Wrong Answer",
        actualStatus: t2Res.status,
        pass: t2Res.status === "Wrong Answer" && t2Res.passedTests === 0,
        durationMs: Date.now() - t2Start,
        details: t2Res.message
    });

    // ----------------------------------------------------
    // TEST 3: Best Time to Buy and Sell Stock Correct Code -> Accepted
    // ----------------------------------------------------
    console.log("\n>>> [TEST 3] Best Time to Buy and Sell Stock Correct Code");
    const t3Start = Date.now();
    const t3Code = `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = prices[0];
        int maxProfit = 0;
        for (int i = 1; i < prices.size(); i++) {
            maxProfit = max(maxProfit, prices[i] - minPrice);
            minPrice = min(minPrice, prices[i]);
        }
        return maxProfit;
    }
};`;
    const t3Res = await executeStudentSolution(t3Code, stockProb, []);
    results.push({
        test: "TEST 3: Best Time to Buy and Sell Stock Correct Code",
        expectedStatus: "Accepted",
        actualStatus: t3Res.status,
        pass: t3Res.status === "Accepted" && t3Res.passedTests === 2,
        durationMs: Date.now() - t3Start,
        details: t3Res.message
    });

    // ----------------------------------------------------
    // TEST 4: Best Time to Buy and Sell Stock Wrong Code -> Wrong Answer
    // ----------------------------------------------------
    console.log("\n>>> [TEST 4] Best Time to Buy and Sell Stock Wrong Code");
    const t4Start = Date.now();
    const t4Code = `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        return 0; // Wrong for [7,1,5,3,6,4] where expected is 5
    }
};`;
    const t4Res = await executeStudentSolution(t4Code, stockProb, []);
    results.push({
        test: "TEST 4: Best Time to Buy and Sell Stock Wrong Code",
        expectedStatus: "Wrong Answer",
        actualStatus: t4Res.status,
        pass: t4Res.status === "Wrong Answer",
        durationMs: Date.now() - t4Start,
        details: t4Res.message
    });

    // ----------------------------------------------------
    // TEST 5: Rotate Array by K Positions Correct Code (MUTATED_PARAMETER) -> Accepted
    // ----------------------------------------------------
    console.log("\n>>> [TEST 5] Rotate Array by K Positions Correct Code");
    const t5Start = Date.now();
    const t5Code = `class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
};`;
    const t5Res = await executeStudentSolution(t5Code, rotateProb, []);
    results.push({
        test: "TEST 5: Rotate Array by K Positions Correct Code",
        expectedStatus: "Accepted",
        actualStatus: t5Res.status,
        pass: t5Res.status === "Accepted" && t5Res.passedTests === 2,
        durationMs: Date.now() - t5Start,
        details: t5Res.message
    });

    // ----------------------------------------------------
    // TEST 6: Rotate Array by K Positions Wrong Code -> Wrong Answer
    // ----------------------------------------------------
    console.log("\n>>> [TEST 6] Rotate Array by K Positions Wrong Code");
    const t6Start = Date.now();
    const t6Code = `class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        // Does nothing -> array is not rotated
    }
};`;
    const t6Res = await executeStudentSolution(t6Code, rotateProb, []);
    results.push({
        test: "TEST 6: Rotate Array by K Positions Wrong Code",
        expectedStatus: "Wrong Answer",
        actualStatus: t6Res.status,
        pass: t6Res.status === "Wrong Answer",
        durationMs: Date.now() - t6Start,
        details: t6Res.message
    });

    // ----------------------------------------------------
    // TEST 7: Syntax Error -> Compilation Error
    // ----------------------------------------------------
    console.log("\n>>> [TEST 7] Syntax Error");
    const t7Start = Date.now();
    const t7Code = `class Solution {
public:
    int climbStairs(int n) {
        return n   // missing semicolon
    }
};`;
    const t7Res = await executeStudentSolution(t7Code, climbingStairsProb, []);
    results.push({
        test: "TEST 7: Syntax Error",
        expectedStatus: "Compilation Error",
        actualStatus: t7Res.status,
        pass: t7Res.status === "Compilation Error" && (t7Res.compilationError || "").length > 0,
        durationMs: Date.now() - t7Start,
        details: t7Res.message
    });

    // ----------------------------------------------------
    // TEST 8: Runtime Crash -> Runtime Error
    // ----------------------------------------------------
    console.log("\n>>> [TEST 8] Runtime Crash");
    const t8Start = Date.now();
    const t8Code = `class Solution {
public:
    int climbStairs(int n) {
        vector<int> v;
        return v.at(100); // Invalid memory access -> throws std::out_of_range
    }
};`;
    const t8Res = await executeStudentSolution(t8Code, climbingStairsProb, []);
    results.push({
        test: "TEST 8: Runtime Crash",
        expectedStatus: "Runtime Error",
        actualStatus: t8Res.status,
        pass: t8Res.status === "Runtime Error",
        durationMs: Date.now() - t8Start,
        details: t8Res.message
    });

    // ----------------------------------------------------
    // TEST 9: Infinite Loop -> Time Limit Exceeded (5 seconds)
    // ----------------------------------------------------
    console.log("\n>>> [TEST 9] Infinite Loop (TLE)");
    const t9Start = Date.now();
    const t9Code = `class Solution {
public:
    int climbStairs(int n) {
        while (true) {} // Infinite loop
        return n;
    }
};`;
    const t9Res = await executeStudentSolution(t9Code, climbingStairsProb, []);
    const t9Duration = Date.now() - t9Start;
    results.push({
        test: "TEST 9: Infinite Loop (TLE)",
        expectedStatus: "Time Limit Exceeded",
        actualStatus: t9Res.status,
        pass: t9Res.status === "Time Limit Exceeded",
        durationMs: t9Duration,
        details: t9Res.message
    });

    // ----------------------------------------------------
    // TEST 10: After TLE, immediately run correct solution -> Accepted
    // ----------------------------------------------------
    console.log("\n>>> [TEST 10] Recovery after TLE -> Accepted");
    const t10Start = Date.now();
    const t10Res = await executeStudentSolution(t1Code, climbingStairsProb, []);
    results.push({
        test: "TEST 10: Recovery after TLE -> Accepted",
        expectedStatus: "Accepted",
        actualStatus: t10Res.status,
        pass: t10Res.status === "Accepted" && t10Res.passedTests === 2,
        durationMs: Date.now() - t10Start,
        details: t10Res.message
    });

    // ----------------------------------------------------
    // TEST 11: After Wrong Answer, run correct solution -> Accepted
    // ----------------------------------------------------
    console.log("\n>>> [TEST 11] Recovery after Wrong Answer -> Accepted");
    const t11Start = Date.now();
    const t11Res = await executeStudentSolution(t3Code, stockProb, []);
    results.push({
        test: "TEST 11: Recovery after Wrong Answer -> Accepted",
        expectedStatus: "Accepted",
        actualStatus: t11Res.status,
        pass: t11Res.status === "Accepted" && t11Res.passedTests === 2,
        durationMs: Date.now() - t11Start,
        details: t11Res.message
    });

    // ----------------------------------------------------
    // TEST 12: After Compilation Error, run correct solution -> Accepted
    // ----------------------------------------------------
    console.log("\n>>> [TEST 12] Recovery after Compilation Error -> Accepted");
    const t12Start = Date.now();
    const t12Res = await executeStudentSolution(t5Code, rotateProb, []);
    results.push({
        test: "TEST 12: Recovery after Compilation Error -> Accepted",
        expectedStatus: "Accepted",
        actualStatus: t12Res.status,
        pass: t12Res.status === "Accepted" && t12Res.passedTests === 2,
        durationMs: Date.now() - t12Start,
        details: t12Res.message
    });

    return results;
})()
