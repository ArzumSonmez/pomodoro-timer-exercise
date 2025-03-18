console.log("Worker script loaded");

let timer;
let time;
let isWorkSession = true;
let workDuration = 1500000; // 25 min
let breakDuration = 300000; // 5 min

console.log("Worker script initialized and ready to receive messages");

self.onmessage = function (e) {
    console.log("Message received in worker:", e.data);

    const { command, workTime, breakTime } = e.data;

    if (command === "start") {
        console.log("Timer started in worker.");

        if (workTime !== undefined && breakTime !== undefined) {
            workDuration = workTime;
            breakDuration = breakTime;
        }

        time = isWorkSession ? workDuration : breakDuration;
        console.log("Initial time:", time);

        timer = setInterval(() => {
            time -= 1000;
            console.log("Time left:", time);
            self.postMessage({ type: "tick", time });

            if (time <= 0) {
                isWorkSession = !isWorkSession;
                time = isWorkSession ? workDuration : breakDuration;
                self.postMessage({ type: "sessionSwitch", isWorkSession });
            }
        }, 1000);
    }

    if (command === "pause") {
        console.log("Timer paused in worker.");
        clearInterval(timer);
    }

    if (command === "reset") {
        console.log("Timer reset in worker.");
        clearInterval(timer);
        isWorkSession = true;
        time = workDuration;
        self.postMessage({ type: "reset", time });
    }
};
