'use strict';
// defining variables
const btnDown = document.querySelector('#button-down');
const startValue = document.querySelector('#start-value')
const btnUp = document.querySelector('#button-up');
const counter = document.querySelector('#counter')
const pomodoroTimer = document.querySelector('#pomodoro-timer');
const startBtn = document.querySelector('#pomodoro-start');
const pauseBtn = document.querySelector('#pomodoro-pause');

let countdown = 0; // variable to set/clear intervals
let seconds = 1500; // seconds left on the clock
let workTime = 25; // minutes left on the clock
let running = false; // to check if timer is running

// buttons to decrease or increase the session length
btnDown.addEventListener('click', function(){
  if (startValue.innerHTML > 1 && running === false){
    startValue.innerHTML--;
      seconds = seconds - 60; 
 }
 })

btnUp.addEventListener('click',function(){
  if(running === false){
    startValue.innerHTML++;
    seconds = seconds + 60; 
  }
})

// to hide pause button initially
pauseBtn.style.display= "none"

 // Event Listeners For Start and Pause Buttons 
startBtn.addEventListener('click', () => {
 countdown = setInterval(timer, 1000);
 startBtn.style.display = "none";
 pauseBtn.style.display= "flex"
 running = true;
}
)

pauseBtn.addEventListener('click', () =>{
   clearInterval(countdown);
   startBtn.style.display = "flex";
   pauseBtn.style.display= "none";
   running = false;
})

// Timer function which handles countdown and display message when timer is 0.
function timer() {
  seconds--;
  if (seconds <= 0) {
    clearInterval(countdown);
    seconds = workTime * 60;
    counter.innerHTML = "Time's Up!";
    counter.style.fontSize = "2rem"
  }
}

// To Update coundown display and HTML Content 
function countdownDisplay() {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  pomodoroTimer.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

// interval is set to 100ms for good measure 
window.setInterval(countdownDisplay, 100);