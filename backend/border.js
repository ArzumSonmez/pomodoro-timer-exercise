export function drawBorder() {
  const svg = document.querySelector('.rectangle-svg');
  if (!svg) return; // Make sure the element exists

  const rectSize = 14;
  const totalWidth = 951;
  const totalHeight = 949;
  const cols = Math.floor(totalWidth / rectSize);
  const rows = Math.floor(totalHeight / rectSize);

  const lightColors = ["#fb6f92", "#ff8fab", "#ffb3c6", "#ffc2d1", "#ffe5ec"];
  const darkColors = ["#0A2647", "#144272", "#205295", "#2C74B3"];
  
  let currentColors = localStorage.getItem('theme') === 'dark' ? darkColors : lightColors;
  let colorIndex = 0;
  
  svg.innerHTML = ""; // Clear old border
  for (let x = 0; x < cols * rectSize; x += rectSize) {
      const color = currentColors[colorIndex % currentColors.length];
      svg.innerHTML += `<rect x="${x}" y="0" width="${rectSize}" height="${rectSize}" fill="${color}"></rect>`;
      svg.innerHTML += `<rect x="${x}" y="${(rows - 1) * rectSize}" width="${rectSize}" height="${rectSize}" fill="${color}"></rect>`;
      colorIndex++;
  }

  for (let y = 0; y < rows * rectSize; y += rectSize) {
      const color = currentColors[colorIndex % currentColors.length];
      svg.innerHTML += `<rect x="0" y="${y}" width="${rectSize}" height="${rectSize}" fill="${color}"></rect>`;
      svg.innerHTML += `<rect x="${(cols - 1) * rectSize}" y="${y}" width="${rectSize}" height="${rectSize}" fill="${color}"></rect>`;
      colorIndex++;
  }
}

document.addEventListener("themeChange", () => {
  loadTheme(); // Reload theme and reapply border colors
  drawBorder(); // Redraw the border when theme changes
});

drawBorder();