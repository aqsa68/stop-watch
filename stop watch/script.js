let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let running = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  display.textContent = `${h}:${m}:${s}.${ms}`;
}

function startTimer() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10); // 10ms = 0.01s
  }
}

function stopTimer() {
  clearInterval(interval);
  running = false;
}

function resetTimer() {
  clearInterval(interval);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  running = false;
  updateDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Initial display
updateDisplay();
