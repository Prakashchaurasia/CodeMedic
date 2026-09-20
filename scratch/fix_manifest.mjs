import fs from 'node:fs';

let content = fs.readFileSync('public/cdn/manifest.json', 'utf8');
// Strip BOM if present
if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
}
content = content.replaceAll('.tar.br"', '.brdata"');
fs.writeFileSync('public/cdn/manifest.json', content, 'utf8');
console.log('Successfully set bundle URLs to .brdata in manifest.json');
