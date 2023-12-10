const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const displayTime = document.getElementById('display-time');

let countingTime = 0; 
let intervalId;

$(document).ready(function(){

    $("#start-button").click(function() {
        startButton.disabled=true;
        stopButton.disabled=false;
        resetButton.disabled=false;
        startCountTime();
    });

    $("#stop-button").click(function() {
        startButton.disabled=false;
        stopButton.disabled=true;
        resetButton.disabled=false;
        clearInterval(intervalId);
    });

    $("#reset-button").click(function() {
        startButton.disabled=false;
        stopButton.disabled=true;
        resetButton.disabled=true;
        clearInterval(intervalId);
        countingTime = 0;
        $("#display-time").text("0:0:0:0");
    });
  });

  function countUp(){

    countingTime +=1;

    let h = Math.floor(countingTime / 36000);
    let m = Math.floor(countingTime / 600) % 60;
    let s = Math.floor(countingTime / 10) % 60;
    let ms = String(countingTime).slice(-1)[0];

    displayTime.textContent = h + ':' + m + ':' + s + ":" + ms;

  }

function startCountTime(){
    intervalId = setInterval(function(){
        countUp();
    }, 100);
}