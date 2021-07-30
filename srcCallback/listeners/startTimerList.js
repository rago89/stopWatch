import { startTimerHandler } from "../handlers/startTimerHdl.js";

document
  .getElementById("btn-toggle")
  .addEventListener("click", startTimerHandler);
