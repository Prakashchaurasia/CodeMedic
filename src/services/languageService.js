/**
 * Language Service for CodeMedic
 * Manages language configuration, starter code generation, Monaco editor modes,
 * and execution dispatch for supported programming languages.
 */

import { executeStudentSolution } from "./cppExecutor.js";
import { generateStarterCode as generateCppStarterCode } from "./executionHarness.js";
import { executeJsSolution, generateJsStarterCode } from "./jsExecutor.js";

export const SUPPORTED_LANGUAGES = [
    {
        id: "cpp",
        name: "C++ (Clang C++17)",
        shortName: "C++17",
        monacoLang: "cpp",
        badge: "⚡ BROWSER WASM",
        isSupported: true,
        version: "Clang C++17",
        generateStarterCode: (problem) => generateCppStarterCode(problem),
        execute: (code, problem, testCases) => executeStudentSolution(code, problem, testCases),
    },
    {
        id: "javascript",
        name: "JavaScript (Node/ES6)",
        shortName: "JavaScript",
        monacoLang: "javascript",
        badge: "⚡ BROWSER JS",
        isSupported: true,
        version: "ES2022",
        generateStarterCode: (problem) => generateJsStarterCode(problem),
        execute: (code, problem, testCases) => executeJsSolution(code, problem, testCases),
    },
];

/**
 * Returns the active language configuration by ID or shortName, falling back to C++17.
 */
export function getLanguageConfig(langId) {
    if (!langId) return SUPPORTED_LANGUAGES[0];
    const match = SUPPORTED_LANGUAGES.find(
        (l) => l.id === langId || l.name === langId || l.shortName === langId
    );
    return match || SUPPORTED_LANGUAGES[0];
}

/**
 * Returns list of all genuinely executable languages.
 * Only languages with active backends are returned.
 */
export function getAvailableLanguages() {
    return SUPPORTED_LANGUAGES.filter((l) => l.isSupported);
}
