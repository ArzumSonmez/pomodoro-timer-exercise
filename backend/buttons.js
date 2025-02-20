import { startTimer } from "./timer.js";
import { pauseTimer } from "./timer.js";
import { resetTimer } from "./timer.js";

const startButton = document.getElementById("js-start-button");
const pauseButton = document.getElementById("js-pause-button");
const resetButton  = document.getElementById("js-reset-button");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
