export const addLiComponent = (obj) => {
  const liEl = document.createElement("li");
  const { hours, milliseconds, minutes, seconds } = obj.time;
  liEl.innerHTML = `${obj.counter}. ${hours}:${minutes}:${seconds}.${milliseconds}`;
  return liEl;
};
