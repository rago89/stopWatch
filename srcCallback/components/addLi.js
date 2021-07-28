export const addLiComponent = (obj) => {
  const liEl = document.createElement("li");
  obj.counter++;
  const { hours, milliseconds, minutes, seconds } = obj.time;
  liEl.innerHTML = `${obj.counter}. ${hours}:${minutes}:${seconds}.${milliseconds}`;
  return liEl;
};
