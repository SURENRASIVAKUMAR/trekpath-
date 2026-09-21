const fs = require('fs');

const dataStr = fs.readFileSync('generated_data.json', 'utf8');
let dashboardStr = fs.readFileSync('frontend/dashboard.js', 'utf8');

// The regex will find `const globalData = { ... };` ending right before `// Fallback logic`
const regex = /const globalData = \{[\s\S]*?\};\n*(?=\/\/ Fallback logic)/;

const newBlock = `const globalData = ${dataStr};\n\n`;

if(regex.test(dashboardStr)) {
  dashboardStr = dashboardStr.replace(regex, newBlock);
  fs.writeFileSync('frontend/dashboard.js', dashboardStr);
  console.log("Injected successfully!");
} else {
  console.error("Regex did not match!");
}
