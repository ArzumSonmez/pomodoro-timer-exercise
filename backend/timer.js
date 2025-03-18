let workDuration = 1500000; // 25 min
let breakDuration = 300000; // 5 min
let time = workDuration;
let isWorkSession = true;

const timerDisplay = document.querySelector('.js-timer-display');

export const switchSessionSound = new Audio('../audio/success-221935.mp3');
export const clockSound = new Audio('../audio/tick-tock-104746.mp3');

function applyMuteState(isMuted) {
    switchSessionSound.volume = isMuted ? 0 : 1;
    clockSound.volume = isMuted ? 0 : 1;
}

applyMuteState(localStorage.getItem("mute") === "true");

// Listen for mute toggle event
document.addEventListener("muteToggle", (event) => {
    applyMuteState(event.detail);
});

const timerWorker = new Worker("../backend/timerWorker.js");

timerWorker.onmessage = function (e) {
  console.log("Message received from worker:", e.data);

  if (e.data.type === "tick") {
      let minutes = Math.floor(e.data.time / 60000);
      let seconds = Math.floor((e.data.time % 60000) / 1000);
      let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      
      console.log("Updating UI with time:", displayTime);
      
      timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;
  }

  if (e.data.type === "sessionSwitch") {
      switchSessionSound.play();
      console.log("Session switched. Work session:", e.data.isWorkSession);
  }

  if (e.data.type === "reset") {
      let minutes = Math.floor(e.data.time / 60000);
      let seconds = Math.floor((e.data.time % 60000) / 1000);
      let displayTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

      console.log("Resetting UI with time:", displayTime);

      timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;
  }
};

export function startTimer() {
    const startButton = document.getElementById("js-start-button");
    startButton.disabled = true;
    const pauseButton = document.getElementById("js-pause-button");
    pauseButton.disabled = false;
    clockSound.play();

    console.log("Starting timer. Sending message to worker.");
    
    // Send the correct work and break durations
    timerWorker.postMessage({ 
        command: "start", 
        workTime: workDuration, 
        breakTime: breakDuration 
    });
}

export function pauseTimer() {
    console.log("Pausing timer. Sending message to worker.");
    timerWorker.postMessage({ command: "pause" });
    const startButton = document.getElementById("js-start-button");
    startButton.disabled = false;
    const pauseButton = document.getElementById("js-pause-button");
    pauseButton.disabled = true;
    console.log("Timer paused!");
}

export function resetTimer() {
    timerWorker.postMessage({ command: "reset" });
    const startButton = document.getElementById("js-start-button");
    startButton.disabled = false;
    const pauseButton = document.getElementById("js-pause-button");
    pauseButton.disabled = true;
    console.log("Timer reset!");
}

export function setTimerOption(workDurationSelected, breakDurationSelected) {
    workDuration = workDurationSelected;
    breakDuration = breakDurationSelected;
    time = workDuration;
    isWorkSession = true;

    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let displayTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timerDisplay.innerHTML = `<div class="div-timer-display">${displayTime}</div>`;

    const startButton = document.getElementById("js-start-button");
    startButton.disabled = false;

    const pauseButton = document.getElementById("js-pause-button");
    pauseButton.disabled = true;
}
