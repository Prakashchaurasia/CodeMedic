import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Import all expanded problems
const indexPath = path.join(ROOT_DIR, 'src', 'data', 'problems', 'index.js');
const { ALL_EXPANDED_PROBLEMS } = await import(pathToFileURL(indexPath).href);

console.log(`Loaded ${ALL_EXPANDED_PROBLEMS.length} problems for Supabase seeding.`);

function escapeSql(str) {
    if (str === null || str === undefined) return 'NULL';
    return "'" + String(str).replace(/'/g, "''") + "'";
}

function escapeJson(obj) {
    if (obj === null || obj === undefined) return 'NULL';
    const jsonStr = JSON.stringify(obj);
    return "'" + jsonStr.replace(/'/g, "''") + "'::jsonb";
}

// Split into batches of 50 to avoid request size limits on the Management API
const BATCH_SIZE = 50;
const totalBatches = Math.ceil(ALL_EXPANDED_PROBLEMS.length / BATCH_SIZE);

console.log(`Will seed in ${totalBatches} batches of up to ${BATCH_SIZE} problems each.`);

const scratchDir = path.join(__dirname, 'scratch_sql');
if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
}

for (let b = 0; b < totalBatches; b++) {
    const batch = ALL_EXPANDED_PROBLEMS.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE);
    const sqlStatements = [];

    for (const p of batch) {
        const id = escapeSql(p.id);
        const title = escapeSql(p.title);
        const description = escapeSql(p.description);
        const difficulty = escapeSql(p.difficulty);
        const topic = escapeSql(p.topic);
        const patterns = escapeJson(p.patterns || []);
        const dataStructures = escapeJson(p.data_structures || []);
        const expectedTime = escapeSql(p.expected_time || 'O(N)');
        const expectedSpace = escapeSql(p.expected_space || 'O(1)');
        const constraints = escapeSql(p.constraints || '');
        const examples = escapeJson(p.examples || []);
        const learningObjective = escapeSql(p.learning_objective || '');
        const source = escapeSql(p.source || 'CodeMedic Curated');
        const inputFormat = escapeSql(p.input_format || '');
        const outputFormat = escapeSql(p.output_format || '');
        const executionConfig = escapeJson(p.execution_config || {});
        const hints = escapeJson(p.hints || []);
        const isGenerated = false;

        sqlStatements.push(`
INSERT INTO problems (
    id, title, description, difficulty, topic, patterns, data_structures,
    expected_time, expected_space, constraints, examples, learning_objective,
    source, input_format, output_format, execution_config, hints, is_generated
) VALUES (
    ${id}, ${title}, ${description}, ${difficulty}, ${topic}, ${patterns}, ${dataStructures},
    ${expectedTime}, ${expectedSpace}, ${constraints}, ${examples}, ${learningObjective},
    ${source}, ${inputFormat}, ${outputFormat}, ${executionConfig}, ${hints}, ${isGenerated}
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    difficulty = EXCLUDED.difficulty,
    topic = EXCLUDED.topic,
    patterns = EXCLUDED.patterns,
    data_structures = EXCLUDED.data_structures,
    expected_time = EXCLUDED.expected_time,
    expected_space = EXCLUDED.expected_space,
    constraints = EXCLUDED.constraints,
    examples = EXCLUDED.examples,
    learning_objective = EXCLUDED.learning_objective,
    source = EXCLUDED.source,
    input_format = EXCLUDED.input_format,
    output_format = EXCLUDED.output_format,
    execution_config = EXCLUDED.execution_config,
    hints = EXCLUDED.hints,
    is_generated = EXCLUDED.is_generated;
`);
    }

    const batchSqlFile = path.join(scratchDir, `batch_${b + 1}.sql`);
    fs.writeFileSync(batchSqlFile, sqlStatements.join('\n'), 'utf8');

    console.log(`Executing batch ${b + 1}/${totalBatches} (${batch.length} problems)...`);
    try {
        const res = execSync(`supabase db query --linked -f "${batchSqlFile}"`, {
            cwd: ROOT_DIR,
            encoding: 'utf8',
            stdio: 'pipe'
        });
        console.log(`Batch ${b + 1} succeeded.`);
    } catch (err) {
        console.error(`Batch ${b + 1} failed:`, err.stdout || err.message);
        process.exit(1);
    }
}

// Cleanup scratch SQL
fs.rmSync(scratchDir, { recursive: true, force: true });

console.log('All problems seeded to remote Supabase successfully!');
