import { state } from "../../data/data.js";

export const setHandler = () => {
  // set the timer
  const input_hh = document.getElementById("input_hh");
  const input_mm = document.getElementById("input_mm");
  const input_ss = document.getElementById("input_ss");
  // Set the count
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  const hr = input_hh.value < 10 ? "0" + input_hh.value : input_hh.value;
  input_hh.value !== "0" ? (hours.innerHTML = hr) : (hours.innerHTML = `00`);
  state.setTimer.hours = Number(input_hh.value);

  const min = input_mm.value < 10 ? "0" + input_mm.value : input_mm.value;
  input_mm.value !== "0"
    ? (minutes.innerHTML = min)
    : (minutes.innerHTML = "00");
  state.setTimer.minutes = Number(input_mm.value);

  const sec = input_ss.value < 10 ? "0" + input_ss.value : input_ss.value;
  input_ss.value !== "0"
    ? (seconds.innerHTML = sec)
    : (seconds.innerHTML = "00");
  state.setTimer.seconds = Number(input_ss.value);
};
