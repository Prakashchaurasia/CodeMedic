import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function patchFile(filePath, transforms) {
    if (!fs.existsSync(filePath)) {
        console.log(`[patch-emception] File not found (skipping): ${filePath}`);
        return false;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const { name, from, to } of transforms) {
        if (content.includes(to)) {
            console.log(`[patch-emception] Already patched: ${name} in ${path.basename(filePath)}`);
            continue;
        }
        if (typeof from === 'string' ? content.includes(from) : from.test(content)) {
            content = content.replace(from, to);
            modified = true;
            console.log(`[patch-emception] Successfully applied: ${name} in ${path.basename(filePath)}`);
        } else {
            console.warn(`[patch-emception] Pattern not matched: ${name} in ${path.basename(filePath)}`);
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`[patch-emception] Saved ${filePath}`);
        return true;
    }
    return false;
}

console.log('[patch-emception] Patching @gameguild/emception-browser...');

const lazyJsPath = path.join(rootDir, 'node_modules', '@gameguild', 'emception-browser', 'dist', 'vfs', 'lazy.js');
patchFile(lazyJsPath, [
    {
        name: 'Support .brdata bundle URLs in LazyFS',
        from: `if (bundle.url.endsWith('.tar.br') || bundle.url.endsWith('.br')) {`,
        to: `if (bundle.url.endsWith('.tar.br') || bundle.url.endsWith('.br') || bundle.url.endsWith('.brdata')) {`
    }
]);

const workerEntryJsPath = path.join(rootDir, 'node_modules', '@gameguild', 'emception-browser', 'dist', 'worker-entry.js');
patchFile(workerEntryJsPath, [
    {
        name: 'Error handling in handleRun to prevent worker hanging',
        from: `    const result = await runner.run(tool, argv, {
        env: options.env,
        cwd: options.cwd,
        onStdout: (text) => post({ type: 'stdout', id, text }),
        onStderr: (text) => post({ type: 'stderr', id, text }),
        stdin: stdinFn,
        hints: options.hints,
    });
    sharedStdin?.close();
    post({ type: 'runResult', id, exitCode: result.exitCode, stdout: result.stdout, stderr: result.stderr });`,
        to: `    try {
        const result = await runner.run(tool, argv, {
            env: options.env,
            cwd: options.cwd,
            onStdout: (text) => post({ type: 'stdout', id, text }),
            onStderr: (text) => post({ type: 'stderr', id, text }),
            stdin: stdinFn,
            hints: options.hints,
        });
        sharedStdin?.close();
        post({ type: 'runResult', id, exitCode: result.exitCode, stdout: result.stdout, stderr: result.stderr });
    } catch (runErr) {
        sharedStdin?.close();
        console.error('[Worker] runner.run failed:', runErr);
        post({ type: 'runResult', id, exitCode: 1, stdout: '', stderr: runErr?.message || String(runErr) });
    }`
    }
]);

console.log('[patch-emception] Patch complete.');
