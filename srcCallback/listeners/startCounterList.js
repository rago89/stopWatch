import { startCounterHdl } from "../handlers/startCounterHdl.js";

document
  .getElementById("btn-toggle")
  .addEventListener("click", startCounterHdl);
