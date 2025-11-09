const imgIds = ["all", "red", "yellow", "green"];
let flow = 0;
let intervalId = null;

function show(index) {
  imgIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.style.display = i === index ? "block" : "none";
  });
  flow = index;
}

function changeColor() {
  const next = (flow + 1) % imgIds.length;
  show(next);
}

function play_pause() {
  const button = document.getElementById("playPauseButton");
  if (!intervalId) {
    intervalId = setInterval(changeColor, 500);
    if (button) button.textContent = "Pause";
    button.style.backgroundColor = "red";
  } else {
    clearInterval(intervalId);
    intervalId = null;
    if (button) button.textContent = "Play";
    button.style.backgroundColor = "rgb(0, 255, 0)";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  show(0);
});