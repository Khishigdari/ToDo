const body = document.querySelector("body");
const counterDiv = document.createElement("div");
const startBtn = (document.createElement("button").onclick = "startTimer");
const stopBtn = (document.createElement("button").onclick = "stopTimer");
const resetBtn = document.createElement("button");

let second = 0;
// let minut = 0;
// let hour = 0;

counterDiv.innerText = second; //======
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
resetBtn.innerText = "Reset";

function addSecond() {
  second++;
  //   if (second === 60) {
  //     minut++;
  //     second = 0;
  //   }
  //   if (minut === 60) {
  //     hour++;
  //     minut = 0;
  //   }
  counterDiv.innerText = second;
}

let interval = setInterval(addSecond, 1000);

function stopTimer() {
  interval = setInterval(addSecond, 1000);
}

function startTimer() {
  interval = setInterval(addSecond, 1000);
}

body.appendChild(counterDiv);
body.appendChild(startBtn);
body.appendChild(stopBtn);
body.appendChild(resetBtn);
