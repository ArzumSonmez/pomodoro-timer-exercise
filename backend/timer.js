let task;
let time = 1500000;
let isWorkSession = true;

const timerDisplay = document.querySelector('.js-timer-display');

export function startTimer(){

  const startButton = document.getElementById("js-start-button");
  startButton.disabled = true;
  const pauseButton = document.getElementById("js-pause-button");
  pauseButton.disabled = false;

  task = setInterval(() => {
    time -= 1000;

    let minutes = Math.floor(time / 60000); // Convert milliseconds to minutes
    let seconds = Math.floor((time % 60000) / 1000); // Convert milliseconds to seconds

    let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // Update the display
    timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;

    console.log(displayTime);
    if(time === 0)
    {
      if (isWorkSession) {
        isWorkSession = false;
        time = 300000;
      } else {
        isWorkSession = true;
        time = 1500000;
      }
    }
  }, 1000);
}

let isPaused = false;
let currentTime;

export function pauseTimer() {
  clearInterval(task);
  isPaused = true;
  currentTime = time;
  const startButton = document.getElementById("js-start-button");
  startButton.disabled = false;
  const pauseButton = document.getElementById("js-pause-button");
  pauseButton.disabled = true;
  console.log("timer paused!");
}

export function resetTimer() {
  clearInterval(task);
  time = 1500000;
  isWorkSession = true;
  const startButton = document.getElementById("js-start-button");
  startButton.disabled = false;
  const pauseButton = document.getElementById("js-pause-button");
  pauseButton.disabled = false;
  let minutes = Math.floor(time / 60000); // Convert milliseconds to minutes
  let seconds = Math.floor((time % 60000) / 1000); // Convert milliseconds to seconds

  let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;
  console.log('timer reset!')
}
