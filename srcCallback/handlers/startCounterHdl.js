import { state } from "../../data/data.js";

export const startCounterHdl = () => {
  const startBtn = document.getElementById("btn-toggle");
  startBtn.innerHTML === "Start"
    ? (startBtn.innerHTML = "Stop")
    : (startBtn.innerHTML = "Start");
  startBtn.innerHTML === "Stop";
  if (startBtn.innerHTML === "Stop") {
    startCount((second) => {
      getSecond(second, (minutes) => {
        getMinutes(minutes, (hours) => {
          getHours(hours);
        });
      });
    });
  } else {
    clearInterval(state.interval);
  }
};

function startCount(callBack) {
  const millisecondDisplay = document.getElementById("milliseconds");
  state.interval = setInterval(() => {
    state.time.milliseconds += 10;
    if (state.time.milliseconds === 1000) {
      state.time.milliseconds = 0;
      state.time.seconds++;
      callBack(state.time.seconds);
    }
    let mil =
      state.time.milliseconds < 10
        ? "00" + state.time.milliseconds
        : state.time.milliseconds < 100
        ? "0" + state.time.milliseconds
        : state.time.milliseconds;
    millisecondDisplay.innerHTML = mil;
  }, 10);
}

function getSecond(second, callBack) {
  const secondDisplay = document.getElementById("seconds");
  if (second === 60) {
    state.time.seconds = 0;
    state.time.minutes++;
    callBack(state.time.minutes);
  }
  const { seconds } = state.time;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  secondDisplay.innerHTML = sec;
}

function getMinutes(minute, callBack) {
  const minuteDisplay = document.getElementById("minutes");
  if (minute === 60) {
    state.time.minutes = 0;
    state.time.hours++;
    callBack(state.time.hours);
  }
  const { minutes } = state.time;
  let min = minutes < 10 ? "0" + minutes : minutes;
  minuteDisplay.innerHTML = state.time.minutes;
}

function getHours(hour) {
  const minuteDisplay = document.getElementById("hours");
  if (hour === 24) {
    state.time.hours = 0;
  }
  minuteDisplay.innerHTML = state.time.hours;
}
