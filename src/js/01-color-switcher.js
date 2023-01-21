const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId = null;

stopButton.disabled = true;

startButton.addEventListener('click', onClick);
stopButton.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClick(e) {
  stopButton.disabled = false;
  startButton.disabled = true;
  timeId = setInterval(e => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop(e) {
  clearInterval(timeId);
  startButton.disabled = false;
  stopButton.disabled = true;
}
