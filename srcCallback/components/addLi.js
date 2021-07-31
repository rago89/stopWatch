export const addLiComponent = (obj) => {
  const liEl = document.createElement("li");
  obj.counter++;
  const { hours, milliseconds, minutes, seconds } = obj.time;
  const hr = hours < 10 ? "0" + hours : hours;
  const min = minutes < 10 ? "0" + minutes : minutes;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  const mill =
    milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  liEl.innerHTML = `${obj.counter}. ${hr}:${min}:${sec}.${mill}`;
  return liEl;
};
