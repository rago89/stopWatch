import { state } from "../../data/data.js";

export const startTimerHandler = () => {
  const startBtn = document.getElementById("btn-toggle");
  const { hours, minutes, seconds } = state.setTimer;
  if (hours === 0 && minutes === 0 && seconds === 0) return;
  startBtn.innerHTML === "Start"
    ? (startBtn.innerHTML = "Stop")
    : (startBtn.innerHTML = "Start");
  startBtn.innerHTML === "Stop";

  if (startBtn.innerHTML === "Stop") {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      startSecondTimer((minute) => {
        getMinute(minute, (hour) => {
          getHour(hour);
        });
      });
    }
  } else {
    clearInterval(state.timerInterval);
  }
};

function startSecondTimer(callBack) {
  const secondDisplay = document.getElementById("seconds");
  let minCounter = 0;
  if (state.setTimer.minutes !== 0 && state.setTimer.seconds === 0) {
    const minuteDisplay = document.getElementById("minutes");
    state.setTimer.minutes = state.setTimer.minutes - 1;

    minuteDisplay.innerHTML = state.setTimer.minutes;
  }
  state.timerInterval = setInterval(() => {
    const { hours, minutes, seconds } = state.setTimer;

    let secCalc = seconds === 0 && minutes !== 0 ? 60 : seconds;
    secCalc--;

    state.setTimer.seconds = secCalc;
    if (secCalc === 0) {
      if (hours === 0 && minutes === 0 && secCalc === 0) {
        clearInterval(state.timerInterval);
        secondDisplay.innerHTML = secCalc;
        return;
      }
      secCalc = 60;
      state.setTimer.seconds = secCalc;
      minCounter++;
      callBack(minCounter);
    }
    secondDisplay.innerHTML = secCalc;
  }, 1000);
}

function getMinute(minute, callBack) {
  const minuteDisplay = document.getElementById("minutes");
  let hourCounter = 0;
  let minuteCalc = 0;
  const { minutes, hours } = state.setTimer;
  if (minute > 1) minute = 1;
  if (minutes !== 0) {
    minuteCalc = minutes - minute;
    state.setTimer.minutes = minuteCalc;
    minuteDisplay.innerHTML = minuteCalc;
    // if there are not minutes but still
    if (state.setTimer.minutes === 0 && hours !== 0) {
      state.setTimer.minutes = 60;
      minuteDisplay.innerHTML = state.setTimer.minutes;
      hourCounter++;
      callBack(hourCounter);
    }
  }
}

function getHour(hour) {
  const hourDisplay = document.getElementById("hours");
  if (hour > 1) hour = 1;
  let hourCalc = 0;
  const { hours } = state.setTimer;
  if (hours !== 0) {
    hourCalc = hours - hour;
    state.setTimer.hours = hourCalc;
    hourDisplay.innerHTML = hourCalc;
  }
}
