const svg = document.querySelector('.credits-border');
const rectSize = 14; 
const totalWidth = 951;
const totalHeight = 949;

const cols = Math.floor(totalWidth / rectSize); // Number of columns for width
const rows = Math.floor(totalHeight / rectSize); // Number of rows for height

const colors = [
  " #fb6f92", " #ff8fab", " #ffb3c6", " #ffc2d1", " #ffe5ec"
];

let colorIndex = 0;

// Create top and bottom border
for (let x = 0; x < cols * rectSize; x += rectSize) {
  const color = colors[colorIndex % colors.length];
  // Top border
  svg.innerHTML += `<rect x="${x}" y="0" width="${rectSize}" height="${rectSize}" fill="${color}"></rect>`;
  // Bottom border
  svg.innerHTML += `<rect x="${x}" y="${(rows - 1) * rectSize}" width="${rectSize}" height="${rectSize}" fill="${color}"></rect>`;
  colorIndex ++;
}

// Create left and right border
for (let y = 0; y < rows * rectSize; y += rectSize) {
  const color = colors[colorIndex % colors.length];
  // Left border
  svg.innerHTML += `<rect x="0" y="${y}" width="${rectSize}" height="${rectSize}" fill=${color}></rect>`;
  // Right border
  svg.innerHTML += `<rect x="${(cols - 1) * rectSize}" y="${y}" width="${rectSize}" height="${rectSize}" fill=${color}></rect>`;
  colorIndex++
}
