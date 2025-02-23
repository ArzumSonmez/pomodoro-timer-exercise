let task;
let time;
let breakTime;
let isWorkSession = true;
let workDuration;
let breakDuration;

const timerDisplay = document.querySelector('.js-timer-display');
const switchSessionSound = new Audio('../audio/success-221935.mp3');
const clockSound = new Audio('../audio/tick-tock-104746.mp3');

workDuration = 1500000;
breakDuration = 300000;
time = workDuration;

export function startTimer() {
  const startButton = document.getElementById("js-start-button");
  startButton.disabled = true;
  const pauseButton = document.getElementById("js-pause-button");
  pauseButton.disabled = false;
  clockSound.play();

  task = setInterval(() => {
    time -= 1000;

    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;

    if (time <= 0) {
      switchSessionSound.play();

      if (isWorkSession) {
        isWorkSession = false;
        time = breakDuration;
      } else {
        isWorkSession = true;
        time = workDuration;
        clockSound.play();
      }

      let minutes = Math.floor(time / 60000);
      let seconds = Math.floor((time % 60000) / 1000);
      let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;
    }
  }, 1000);
}

export function pauseTimer() {
  clearInterval(task);
  const startButton = document.getElementById("js-start-button");
  startButton.disabled = false;
  const pauseButton = document.getElementById("js-pause-button");
  pauseButton.disabled = true;
  console.log("timer paused!");
}

export function resetTimer() {
  clearInterval(task);
  time = workDuration;
  isWorkSession = true;
  const startButton = document.getElementById("js-start-button");
  startButton.disabled = false;
  const pauseButton = document.getElementById("js-pause-button");
  pauseButton.disabled = false;

  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;
  console.log('timer reset!');
}

export function setTimerOption(workDurationSelected, breakDurationSelected) {
  workDuration = workDurationSelected;
  breakDuration = breakDurationSelected;

  time = workDuration;
  isWorkSession = true;

  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;

  const startButton = document.getElementById("js-start-button");
  startButton.disabled = false;

  const pauseButton = document.getElementById("js-pause-button");
  pauseButton.disabled = true;
}
