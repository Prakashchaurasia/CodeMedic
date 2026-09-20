/**
 * CodeMedic Global Problem Audit Script
 * Iterates through all problems across all categories and validates:
 * 1. Problem contract & specification (via problemValidator)
 * 2. C++ Starter code generation
 * 3. C++ Execution harness & invocation generation
 * 4. JavaScript Starter code generation
 * 5. Output mode (RETURN_VALUE vs MUTATED_PARAMETER) contract consistency
 */

import { ALL_EXPANDED_PROBLEMS } from "../src/data/problems/index.js";
import { validateProblemSpecification } from "../src/services/problemValidator.js";
import { generateStarterCode, generateCppHarness } from "../src/services/executionHarness.js";
import { generateJsStarterCode } from "../src/services/jsExecutor.js";

async function runGlobalAudit() {
    console.log("============================================================");
    console.log("       CODEMEDIC — GLOBAL PROBLEM SPECIFICATION AUDIT       ");
    console.log("============================================================\n");

    const totalProblems = ALL_EXPANDED_PROBLEMS.length;
    console.log(`Auditing total ${totalProblems} problems in library...\n`);

    let validCount = 0;
    let invalidCount = 0;
    const failures = [];
    const inPlaceProblems = [];
    const returnValueProblems = [];

    for (let i = 0; i < totalProblems; i++) {
        const problem = ALL_EXPANDED_PROBLEMS[i];
        const validation = validateProblemSpecification(problem);

        let starterCpp = "";
        let starterJs = "";
        let cppHarness = "";
        const codeGenErrors = [];

        try {
            starterCpp = generateStarterCode(problem);
            if (!starterCpp || !starterCpp.includes("class Solution")) {
                codeGenErrors.push("Failed to generate valid C++ starter code.");
            }
        } catch (e) {
            codeGenErrors.push(`C++ Starter Code Generation Exception: ${e.message}`);
        }

        try {
            starterJs = generateJsStarterCode(problem);
            if (!starterJs || !starterJs.includes("var ")) {
                codeGenErrors.push("Failed to generate valid JS starter code.");
            }
        } catch (e) {
            codeGenErrors.push(`JS Starter Code Generation Exception: ${e.message}`);
        }

        try {
            cppHarness = generateCppHarness("// student code placeholder", problem);
            if (!cppHarness || !cppHarness.includes("int main()")) {
                codeGenErrors.push("Failed to generate valid C++ execution harness.");
            }
        } catch (e) {
            codeGenErrors.push(`C++ Harness Generation Exception: ${e.message}`);
        }

        const allErrors = [...validation.errors, ...codeGenErrors];

        if (allErrors.length === 0) {
            validCount++;
            if (validation.normalizedConfig.outputMode === "MUTATED_PARAMETER") {
                inPlaceProblems.push({
                    title: problem.title,
                    topic: problem.topic,
                    func: validation.normalizedConfig.functionName,
                    returnType: validation.normalizedConfig.returnType,
                    mutates: validation.normalizedConfig.mutates
                });
            } else {
                returnValueProblems.push({
                    title: problem.title,
                    topic: problem.topic,
                    func: validation.normalizedConfig.functionName,
                    returnType: validation.normalizedConfig.returnType
                });
            }
        } else {
            invalidCount++;
            failures.push({
                id: problem.id,
                title: problem.title,
                topic: problem.topic,
                errors: allErrors
            });
        }
    }

    console.log("============================================================");
    console.log("                    AUDIT RESULTS                           ");
    console.log("============================================================");
    console.log(`Total Problems Audited:       ${totalProblems}`);
    console.log(`Valid Problems:               ${validCount} (${((validCount / totalProblems) * 100).toFixed(1)}%)`);
    console.log(`Invalid Problems:             ${invalidCount}`);
    console.log(`In-Place (MUTATED_PARAMETER): ${inPlaceProblems.length}`);
    console.log(`Return-Value (RETURN_VALUE):   ${returnValueProblems.length}`);
    console.log("============================================================\n");

    if (inPlaceProblems.length > 0) {
        console.log("Canonical In-Place Mutated Parameter Problems:");
        inPlaceProblems.forEach((p, idx) => {
            console.log(`  ${idx + 1}. [${p.topic}] ${p.title}`);
            console.log(`     Function: ${p.returnType} ${p.func}(...) | Mutates: [${p.mutates.join(", ")}]`);
        });
        console.log("");
    }

    if (failures.length > 0) {
        console.log("FAILED / INVALID PROBLEMS:");
        failures.forEach((f, idx) => {
            console.log(`\n  ${idx + 1}. [${f.topic}] ${f.title} (ID: ${f.id})`);
            f.errors.forEach(err => console.log(`     ❌ ${err}`));
        });
        console.log("\n============================================================");
        console.log("AUDIT FAILED: Please fix problem specifications.");
        process.exit(1);
    } else {
        console.log("✅ AUDIT PASSED: All 455 problems have valid canonical specifications,");
        console.log("   starter code generators, and execution harnesses.");
        console.log("============================================================\n");
    }
}

runGlobalAudit().catch(err => {
    console.error("Audit script failed:", err);
    process.exit(1);
});
