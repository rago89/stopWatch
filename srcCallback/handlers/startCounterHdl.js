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
  let millisecond = 0;
  state.interval = setInterval(() => {
    millisecond += 10;
    let mil =
      millisecond < 10
        ? "00" + millisecond
        : millisecond < 100
        ? "0" + millisecond
        : millisecond === 1000
        ? millisecond / 10
        : millisecond;
    millisecondDisplay.innerHTML = mil;
    state.time.milliseconds = millisecond;
    if (millisecond === 1000) {
      callBack(millisecond);
      millisecond = 0;
    }
  }, 10);
}

function getSecond(millisecond, callBack) {
  const secondDisplay = document.getElementById("seconds");
  state.time.seconds += millisecond / 1000;
  const { seconds } = state.time;
  if (seconds === 60) {
    callBack(seconds);
    state.time.seconds = 0;
  }
  let sec = seconds < 10 ? "0" + seconds : seconds;
  secondDisplay.innerHTML = sec;
}

function getMinutes(second, callBack) {
  const minuteDisplay = document.getElementById("minutes");
  state.time.minutes += second / 60;
  const { minutes } = state.time;
  if (minutes === 60) {
    callBack(minutes);
    state.time.minutes = 0;
  }
  let min = minutes < 10 ? "0" + minutes : minutes;
  minuteDisplay.innerHTML = min;
}

function getHours(minutes) {
  const hourDisplay = document.getElementById("hours");
  state.time.hours += minutes / 60;
  const { hours } = state.time;
  let hr = hours < 10 ? "0" + hours : hours;
  hourDisplay.innerHTML = hr;
  if (hours === 24) {
    state.time.hours = 0;
  }
}
