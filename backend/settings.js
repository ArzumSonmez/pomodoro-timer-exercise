const sound = document.getElementById('mute-button');
const muteButton = document.getElementById('mute-button');  
const muteIcon = document.getElementById('mute-button-img');
const muteText = muteButton.querySelector('.button-text');
let isMuted = false;


sound.addEventListener('click', () => {
  isMuted = !isMuted;
  if (isMuted) {  
    muteIcon.src = '../images/volume-mute.png';
    muteText.textContent = 'Unmute';
  } else {  
    muteIcon.src = '../images/volume.png';
    muteText.textContent = 'Mute';
  }  
});

