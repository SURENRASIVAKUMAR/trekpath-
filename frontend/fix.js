const fs = require('fs');
const path = 'c:/Users/SURENRA/OneDrive/Pictures/Desktop/own path/frontend/dashboard.js';
let content = fs.readFileSync(path, 'utf8');

const correctCode = `function downloadPDF() {
  const loaderHtml = '<div id="pdf-loader-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:999999; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; font-family:\\'Inter\\', sans-serif; opacity:0; transition:opacity 0.3s ease;">' +
    '<i class="fas fa-circle-notch fa-spin" style="font-size:3rem; color:#f1c40f; margin-bottom:20px;"></i>' +
    '<h2 style="margin:0; font-weight:700; font-size:24px; letter-spacing:1px; animation: pulse 1.5s infinite;">Crafting Your Itinerary...</h2>' +
    '<p style="color:#aaa; font-size:14px; margin-top:10px;">Please wait while we prepare your premium document.</p>' +
    '</div>' +
    '<style>@keyframes pulse { 0% { opacity:1; } 50% { opacity:0.6; } 100% { opacity:1; } }</style>';
  
  let loader = document.getElementById('pdf-loader-overlay');
  if (!loader) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = loaderHtml;
    document.body.appendChild(wrapper.firstElementChild);
    document.body.appendChild(wrapper.lastElementChild);
    loader = document.getElementById('pdf-loader-overlay');
  }
  
  loader.style.display = 'flex';
  setTimeout(() => loader.style.opacity = '1', 10);
`;

const lines = content.split('\n');
lines[1032] = correctCode;
fs.writeFileSync(path, lines.join('\n'));
console.log('Fixed line 1033');
