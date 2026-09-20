import React, { useRef, useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

// Configure @monaco-editor/react to use the local bundled monaco-editor
// (zero external CDN dependencies, fully offline, compatible with COOP/COEP)
loader.config({ monaco });

// Configure Monaco Environment for in-browser Vite usage
if (typeof window !== "undefined" && !window.MonacoEnvironment) {
    window.MonacoEnvironment = {
        getWorker() {
            // Return an empty worker blob to run Monaco in-thread cleanly
            // without needing separate worker bundles
            const blob = new Blob(
                [
                    `self.onmessage = function () {
                        // In-thread fallback
                    };`
                ],
                { type: "text/javascript" }
            );
            return new Worker(URL.createObjectURL(blob));
        }
    };
}

export default function CodeEditor({
    value = "",
    onChange,
    disabled = false,
    height = "440px",
    compilationError = null,
}) {
    const editorRef = useRef(null);
    const monacoRef = useRef(null);

    // Setup CodeMedic theme and custom settings on editor mount
    const handleEditorDidMount = (editor, monacoInstance) => {
        editorRef.current = editor;
        monacoRef.current = monacoInstance;

        // Define a sleek CodeMedic dark theme matching the platform's visual identity
        monacoInstance.editor.defineTheme("codemedic-dark", {
            base: "vs-dark",
            inherit: true,
            rules: [
                { token: "keyword", foreground: "c084fc", fontStyle: "bold" },
                { token: "keyword.directive", foreground: "f59e0b" },
                { token: "type", foreground: "38bdf8" },
                { token: "string", foreground: "4ade80" },
                { token: "number", foreground: "fb923c" },
                { token: "comment", foreground: "64748b", fontStyle: "italic" },
                { token: "delimiter", foreground: "94a3b8" },
                { token: "operator", foreground: "67e8f9" },
            ],
            colors: {
                "editor.background": "#080d19",
                "editor.lineHighlightBackground": "#101a2b",
                "editorLineNumber.foreground": "#475569",
                "editorLineNumber.activeForeground": "#38bdf8",
                "editorGutter.background": "#0b1322",
                "editorIndentGuide.background1": "#1e293b",
                "editorIndentGuide.activeBackground1": "#334155",
                "editor.selectionBackground": "#1e3a8a80",
                "editorCursor.foreground": "#38bdf8",
                "editorBracketMatch.background": "#1e293b",
                "editorBracketMatch.border": "#38bdf8",
            }
        });

        monacoInstance.editor.setTheme("codemedic-dark");
    };

    // Update compiler error markers when a real compilation error occurs
    useEffect(() => {
        if (!editorRef.current || !monacoRef.current) return;
        const editor = editorRef.current;
        const monacoInstance = monacoRef.current;
        const model = editor.getModel();
        if (!model) return;

        if (!compilationError) {
            monacoInstance.editor.setModelMarkers(model, "codemedic-compiler", []);
            return;
        }

        const markers = [];
        // Match standard format: Line 5:17: [error] expected expression
        const lines = compilationError.split("\n");
        for (const line of lines) {
            const match = line.match(/Line\s+(\d+):(\d+):\s*\[(error|fatal error)\]\s*(.*)/i);
            if (match) {
                const lineNum = parseInt(match[1], 10);
                const colNum = parseInt(match[2], 10);
                const msg = match[4];
                markers.push({
                    startLineNumber: lineNum,
                    startColumn: colNum,
                    endLineNumber: lineNum,
                    endColumn: colNum + 5,
                    message: msg,
                    severity: monacoInstance.MarkerSeverity.Error,
                });
            }
        }

        monacoInstance.editor.setModelMarkers(model, "codemedic-compiler", markers);
    }, [compilationError]);

    return (
        <div
            className="codemedic-monaco-wrapper"
            style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid #1d2a40",
                background: "#080d19",
                height,
                minHeight: height,
            }}
        >
            <Editor
                height={height}
                language="cpp"
                theme="codemedic-dark"
                value={value}
                onChange={(newVal) => onChange?.(newVal || "")}
                onMount={handleEditorDidMount}
                options={{
                    fontSize: 14,
                    fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, Monaco, monospace",
                    fontLigatures: true,
                    lineNumbers: "on",
                    lineNumbersMinChars: 3,
                    minimap: { enabled: false }, // Keep interface clean and modern
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 4,
                    insertSpaces: true,
                    autoClosingBrackets: "always",
                    autoClosingQuotes: "always",
                    autoIndent: "full",
                    bracketPairColorization: { enabled: true },
                    renderLineHighlight: "all",
                    folding: true,
                    foldingHighlight: true,
                    renderWhitespace: "none",
                    readOnly: disabled,
                    cursorBlinking: "smooth",
                    cursorSmoothCaretAnimation: "on",
                    scrollbar: {
                        verticalScrollbarSize: 8,
                        horizontalScrollbarSize: 8,
                        alwaysConsumeMouseWheel: false,
                    },
                    padding: {
                        top: 14,
                        bottom: 14,
                    },
                    find: {
                        addExtraSpaceOnTop: false,
                        autoFindInSelection: "never",
                        seedSearchStringFromSelection: "always",
                    },
                }}
            />
        </div>
    );
}
