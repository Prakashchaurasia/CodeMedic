async function poll() {
    for (let i = 0; i < 40; i++) {
        try {
            const res = await fetch('https://code-medic-xi.vercel.app/?t=' + Date.now(), { cache: 'no-store' });
            const html = await res.text();
            const matches = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
            const indexScript = matches.find(s => s.includes('index-'));
            if (indexScript) {
                const js = await (await fetch('https://code-medic-xi.vercel.app' + indexScript, { cache: 'no-store' })).text();
                if (js.includes('__setCodeEditorValue')) {
                    console.log('✅ Vercel updated to 5cc5780! Script:', indexScript);
                    process.exit(0);
                }
            }
        } catch (e) {
            console.log('Error:', e.message);
        }
        console.log(`Waiting for Vercel deployment... (${i * 5}s elapsed)`);
        await new Promise(r => setTimeout(r, 5000));
    }
    console.error('Timed out waiting for Vercel deployment');
    process.exit(1);
}
poll();
