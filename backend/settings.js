document.addEventListener('DOMContentLoaded', () => {
  const muteButton = document.getElementById('mute-button');  
  const muteIcon = document.getElementById('mute-button-img');
  const muteText = muteButton.querySelector('.button-mute-text');
  let isMuted = localStorage.getItem("mute") === "true";

  function muteController() {
    if (isMuted) {  
      muteIcon.src = '../images/volume-mute.png';
      muteText.textContent = 'Unmute';
    } else {  
      muteIcon.src = '../images/volume.png';
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
});
