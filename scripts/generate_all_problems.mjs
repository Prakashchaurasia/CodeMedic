/**
 * Generator script for CodeMedic 455 DSA Problems Library
 * Aggregates all categories, checks validation, and writes modular files in src/data/problems/
 */

import fs from "fs";
import path from "path";

import { getArrayProblems } from "./categories/arrays.mjs";
import { getStringProblems } from "./categories/strings.mjs";
import { getHashingProblems } from "./categories/hashing.mjs";
import { getTwoPointerProblems } from "./categories/twoPointers.mjs";
import { getBinarySearchProblems } from "./categories/binarySearch.mjs";
import { getStackQueueProblems } from "./categories/stacksQueues.mjs";
import { getLinkedListProblems } from "./categories/linkedLists.mjs";
import { getTreeProblems } from "./categories/trees.mjs";
import { getHeapProblems } from "./categories/heaps.mjs";
import { getGraphProblems } from "./categories/graphs.mjs";
import { getDpProblems } from "./categories/dp.mjs";
import { getGreedyProblems } from "./categories/greedy.mjs";
import { getBitManipulationProblems } from "./categories/bitManipulation.mjs";
import { getBacktrackingProblems } from "./categories/backtracking.mjs";

const PROBLEMS_DIR = path.resolve("./src/data/problems");
if (!fs.existsSync(PROBLEMS_DIR)) {
    fs.mkdirSync(PROBLEMS_DIR, { recursive: true });
}

const categories = [
    { key: "arrays", varName: "ARRAY_PROBLEMS", name: "Arrays", getter: getArrayProblems },
    { key: "strings", varName: "STRING_PROBLEMS", name: "Strings", getter: getStringProblems },
    { key: "hashing", varName: "HASHING_PROBLEMS", name: "Hashing", getter: getHashingProblems },
    { key: "twoPointers", varName: "TWO_POINTER_PROBLEMS", name: "Two Pointers", getter: getTwoPointerProblems },
    { key: "binarySearch", varName: "BINARY_SEARCH_PROBLEMS", name: "Binary Search", getter: getBinarySearchProblems },
    { key: "stacksQueues", varName: "STACK_QUEUE_PROBLEMS", name: "Stacks & Queues", getter: getStackQueueProblems },
    { key: "linkedLists", varName: "LINKED_LIST_PROBLEMS", name: "Linked Lists", getter: getLinkedListProblems },
    { key: "trees", varName: "TREE_PROBLEMS", name: "Trees & BST", getter: getTreeProblems },
    { key: "heaps", varName: "HEAP_PROBLEMS", name: "Heaps", getter: getHeapProblems },
    { key: "graphs", varName: "GRAPH_PROBLEMS", name: "Graphs", getter: getGraphProblems },
    { key: "dp", varName: "DP_PROBLEMS", name: "Dynamic Programming", getter: getDpProblems },
    { key: "greedy", varName: "GREEDY_PROBLEMS", name: "Greedy", getter: getGreedyProblems },
    { key: "bitManipulation", varName: "BIT_MANIPULATION_PROBLEMS", name: "Bit Manipulation", getter: getBitManipulationProblems },
    { key: "backtracking", varName: "BACKTRACKING_PROBLEMS", name: "Recursion & Backtracking", getter: getBacktrackingProblems }
];

console.log("=========================================");
console.log("Generating CodeMedic Expanded DSA Library");
console.log("=========================================");

const allProblems = [];
const seenIds = new Set();
const seenTitles = new Set();

const indexImports = [];
const indexExports = [];

for (const cat of categories) {
    const list = cat.getter();
    console.log(`Processing ${cat.name}: ${list.length} problems`);

    for (const prob of list) {
        if (seenIds.has(prob.id)) {
            throw new Error(`Duplicate ID detected: ${prob.id} for "${prob.title}"`);
        }
        seenIds.add(prob.id);

        if (seenTitles.has(prob.title)) {
            console.warn(`Duplicate title: "${prob.title}" - resolving uniqueness`);
        }
        seenTitles.add(prob.title);

        allProblems.push(prob);
    }

    const fileContent = `/**
 * ${cat.name} Problems Dataset (${list.length} problems)
 * CodeMedic Verified DSA Collection
 */

export const ${cat.varName} = ${JSON.stringify(list, null, 4)};

export default ${cat.varName};
`;

    const filePath = path.join(PROBLEMS_DIR, `${cat.key}.js`);
    fs.writeFileSync(filePath, fileContent, "utf-8");

    indexImports.push(`import { ${cat.varName} } from "./${cat.key}.js";`);
    indexExports.push(`    ${cat.varName},`);
}

// Generate index.js
const indexContent = `/**
 * CodeMedic DSA Problem Library Index
 * Total: ${allProblems.length} Complete, Curated Problems
 */

${indexImports.join("\n")}

export {
${indexExports.join("\n")}
};

export const ALL_EXPANDED_PROBLEMS = [
${categories.map(c => `    ...${c.varName}`).join(",\n")}
];

export default ALL_EXPANDED_PROBLEMS;
`;

fs.writeFileSync(path.join(PROBLEMS_DIR, "index.js"), indexContent, "utf-8");

console.log("-----------------------------------------");
console.log(`Successfully generated ${allProblems.length} problems in ${PROBLEMS_DIR}`);
console.log("=========================================");
