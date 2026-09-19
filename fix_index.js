const fs = require('fs');
const path = 'frontend/index.html';
let content = fs.readFileSync(path, 'utf8');

// Fix nav link
content = content.replace('<a href="#"><i class="fas fa-home"></i> Home</a>', '<a href="index.html"><i class="fas fa-home"></i> Home</a>');

// Fix broken images
content = content.replace('https://picsum.photos/id/285/800/600', 'https://picsum.photos/seed/northernlights/800/600');
content = content.replace('https://picsum.photos/id/895/800/600', 'https://picsum.photos/seed/shoppingfestival/800/600');
content = content.replace('https://picsum.photos/id/332/800/600', 'https://picsum.photos/seed/carnival/800/600');

// Fix mismatched images (Singapore, Bali)
content = content.replace('https://picsum.photos/id/535/800/600', 'https://picsum.photos/seed/singapore/800/600');
content = content.replace('https://picsum.photos/id/42/800/600', 'https://picsum.photos/seed/bali/800/600');

fs.writeFileSync(path, content);
console.log('Fixed index.html successfully!');
