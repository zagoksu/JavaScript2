'use strict'

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

function currentTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    // add a zero in front of numbers<10
    hours = checkTime(hours)
    minutes = checkTime(minutes) 
    seconds = checkTime(seconds)
    let time = hours + ":" + minutes + ":" + seconds;
    let clock = document.getElementById("clock-box");
    clock.style = "font-size: 2em; margin:auto; text-align: center;"
    clock.innerHTML = time;
    setInterval(currentTime, 1000); // set interval to 1 second
}
currentTime();


