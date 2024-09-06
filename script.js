const countDownElement = document.getElementById("countDown");

let startCount = 0;
let intervalId;

// Function to start the timer
function startTimer() {
  intervalId = setInterval(() => {
    startCount++;
    countDownElement.textContent = startCount;
  }, 1000);
}

// Function to stop the timer and show stop time
function stopTimer() {
  clearInterval(intervalId);
  countDownElement.textContent = startCount;
}

// Function to reset the timer
function resetTimer() {
  clearInterval(intervalId);
  startCount = 0;
  countDownElement.textContent = startCount;
}

// Event listeners
document.querySelector(".start_btn").addEventListener("click", startTimer);

document.querySelector(".reset_btn").addEventListener("click", resetTimer);

document.querySelector(".stop_btn").addEventListener("click", stopTimer);
