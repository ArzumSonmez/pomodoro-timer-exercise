import { loadTheme } from "./theme.js"; 

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();

  const muteButton = document.getElementById('mute-button');  
  const muteText = muteButton.querySelector('.button-mute-text');
  const darkModeButton = document.querySelector('.dark-mode-button');
  let isMuted = localStorage.getItem("mute") === "true";

  function muteController() {
    const muteSvg = muteButton.querySelector('svg'); // Select the SVG inside the button
    const muteText = muteButton.querySelector('.button-mute-text'); // Select the text inside the button

    if (isMuted) {
      muteSvg.innerHTML = `<path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/>`;
      muteText.textContent = 'Unmute';
    } else {
      muteSvg.innerHTML = `<path d="M280-360v-240h160l200-200v640L440-360H280Zm80-80h114l86 86v-252l-86 86H360v80Zm100-40Z"/>`;
      muteText.textContent = 'Mute';
    }
    document.dispatchEvent(new CustomEvent("muteToggle", {detail: isMuted}));
  }

  muteController();

  muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    localStorage.setItem("mute", isMuted.toString());
    muteController();
  });

  loadTheme();
  
  darkModeButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    loadTheme();

    // Dispatch theme change event to update all open pages
    document.dispatchEvent(new CustomEvent("themeChange", { detail: newTheme }));
  });
});
