import { state } from "../../data/data.js";
import { addLiComponent } from "../components/addLi.js";

export const addLapHdl = () => {
  const lapsDiv = document.querySelector(".laps");
  const ulEl = document.getElementById("laps-list");
  const labelEl = document.getElementById("lap-info");
  if (labelEl) lapsDiv.removeChild(labelEl);
  state.lapList.push(state.time);
  ulEl.appendChild(addLiComponent(state));
};
