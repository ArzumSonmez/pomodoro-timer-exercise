const svg = document.querySelector('.outer-start-border');
const rectSize = 13; 
const totalWidth = 750;
const totalHeight = 750;

const cols = Math.floor(totalWidth / rectSize); // Number of columns for width
const rows = Math.floor(totalHeight / rectSize); // Number of rows for height

const colors = [
  "#FAF3F0", "#D4E2D4", "#71aef0", "#FFCACC", "#E7BCDE", "#FAF3F0", "#D4E2D4", "#00CCDD", "#FFCACC", "#E7BCDE",
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
