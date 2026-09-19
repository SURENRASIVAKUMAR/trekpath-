const fs = require('fs');
const path = 'c:/Users/SURENRA/OneDrive/Pictures/Desktop/own path/frontend/dashboard.js';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');

// Replace literal '\n' sequences in specific lines with actual newline characters
if (lines[388] && lines[388].includes('\\n')) {
  lines[388] = lines[388].split('\\n').join('\n');
}

if (lines[1399] && lines[1399].includes('\\n')) {
  lines[1399] = lines[1399].split('\\n').join('\n');
}

fs.writeFileSync(path, lines.join('\n'));
console.log('Fixed lines 389 and 1400');
