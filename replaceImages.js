const fs = require('fs');
const path = require('path');

const directories = ['./frontend', './backend'];
const extensions = ['.html', '.js'];

const regexUnsplash = /https:\/\/images\.unsplash\.com\/[^"'\s]+/g;
const regexRandomUser = /https:\/\/randomuser\.me\/api\/portraits\/[^"'\s]+/g;

// Helper to generate a random seed for consistent placeholder images
function getRandomId() {
    return Math.floor(Math.random() * 1000) + 1;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    if (regexUnsplash.test(content)) {
        content = content.replace(regexUnsplash, () => {
            return `https://picsum.photos/id/${getRandomId()}/800/600`;
        });
        modified = true;
    }
    
    if (regexRandomUser.test(content)) {
        content = content.replace(regexRandomUser, () => {
            return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`;
        });
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                walkDir(fullPath);
            }
        } else {
            const ext = path.extname(fullPath);
            if (extensions.includes(ext)) {
                processFile(fullPath);
            }
        }
    }
}

directories.forEach(walkDir);
console.log('Replacement complete.');
