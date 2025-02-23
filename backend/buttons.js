import { startTimer } from "./timer.js";
import { pauseTimer } from "./timer.js";
import { resetTimer } from "./timer.js";
import { setTimerOption } from "./timer.js";

const clickSound = new Audio('../audio/mouse-click-290204.mp3');
const clockSound = new Audio('../audio/tick-tock-104746.mp3');

const startButton = document.getElementById("js-start-button");
const pauseButton = document.getElementById("js-pause-button");
const resetButton  = document.getElementById("js-reset-button");

startButton.addEventListener("click", () => {
  clickSound.play();
  startTimer();
});
  
pauseButton.addEventListener("click", () => {
    clickSound.play();
    pauseTimer();
});
resetButton.addEventListener("click", () => {
  clickSound.play();
  resetTimer();
});

const twfButton = document.getElementById("tw-five-button");
const fiveTenButton = document.getElementById("fifty-ten-button");
const nineTwButton = document.getElementById("ninety-twenty-button");

twfButton.addEventListener("click", () => { setTimerOption(10000, 5000); // 25 min work, 5 min break
  clickSound.play();
});
fiveTenButton.addEventListener("click", () => { setTimerOption(3000000, 600000); // 50 min work, 10 min break
  clickSound.play();
});
nineTwButton.addEventListener("click", () => { setTimerOption(5400000, 1200000); // 90 min work, 20 min break 
  clickSound.play();
  });

// setTimerOption(1500000, 300000); // 25 min work, 5 min break