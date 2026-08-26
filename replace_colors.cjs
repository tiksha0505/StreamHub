const fs = require('fs');
const path = require('path');

function replaceColors(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceColors(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // Background / Neutrals: zinc to stone (brown tint)
            content = content.replace(/zinc-/g, 'stone-');
            
            // Primary accent: emerald to lime (bottle green / olive)
            // Instead of just replacing prefix, let's map specific shades to match the palette exactly
            content = content.replace(/emerald-900/g, 'lime-900');
            content = content.replace(/emerald-500/g, 'lime-700');
            content = content.replace(/emerald-400/g, 'lime-600');
            content = content.replace(/emerald-300/g, 'lime-500');
            content = content.replace(/emerald-/g, 'lime-');
            
            // Secondary accent: cyan to slate (ice blue)
            content = content.replace(/cyan-900/g, 'slate-800');
            content = content.replace(/cyan-500/g, 'slate-400');
            content = content.replace(/cyan-400/g, 'slate-300');
            content = content.replace(/cyan-/g, 'slate-');

            // Text colors to off-white (stone-100)
            content = content.replace(/text-white/g, 'text-stone-100');
            content = content.replace(/bg-white/g, 'bg-stone-100');
            content = content.replace(/text-slate-100/g, 'text-stone-200');

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceColors(path.join(__dirname, 'src'));
let indexHtmlPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
indexHtml = indexHtml.replace(/zinc-/g, 'stone-');
fs.writeFileSync(indexHtmlPath, indexHtml);
console.log('Done mapping colors');
