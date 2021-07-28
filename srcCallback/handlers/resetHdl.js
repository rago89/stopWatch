import { state } from "../../data/data.js";

export const resetHdl = () => {
  const startBtn = document.getElementById("btn-toggle");
  const ulEl = document.getElementById("laps-list");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const milliseconds = document.getElementById("milliseconds");
  startBtn.innerHTML = "Start";
  // clean the DOM
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  milliseconds.innerHTML = "000";
  // stop the iteration
  clearInterval(state.interval);
  // clear the state
  state.lapList.length = 0;
  state.interval = 0;
  state.counter = 0;
  state.lapList.length = 0;
  for (const key in state.time) {
    state.time[key] = 0;
  }
  if (ulEl.children.length) {
    [...ulEl.children].forEach((element) => {
      element.remove();
    });
  }
  console.log(state);
};
