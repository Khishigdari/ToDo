const counterDiv = document.getElementById("counter");
const minCounter = document.getElementById("minCounter");
const hourCounter = document.getElementById("hourCounter");
let second = 0;
let minut = 0;
let hour = 0;
let interval;
counterDiv.innerText = second + "sec";
minCounter.innerText = minut + "min : ";
hourCounter.innerText = hour + "hr : ";

function addSecond() {
  second++;
  //   if (second < 10) {
  //     counterDiv.innerText = "0" + second + "sec";
  //   } else {
  //     counterDiv.innerText = second + "sec";
  //   }
  //   if (minut < 10) {
  //     minCounter.innerText = "0" + minut + "min :";
  //   } else {
  //     minCounter.innerText = minut + "min :";
  //   }
  if (second === 60) {
    minut++;
    second = 0;
  }
  if (minut === 60) {
    hour++;
    minut = 0;
  }
  counterDiv.innerText = second + "sec";
  minCounter.innerText = minut + "min : ";
  hourCounter.innerText = hour + "hr : ";
}

function startTimer() {
  clearInterval(interval);

  interval = setInterval(addSecond, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  second = 0;
  minut = 0;
  hour = 0;
  //   counterDiv.innerText = "0" + second + "sec";
  //   minCounter.innerText = "0" + minut + "min : ";
  //   hourCounter.innerText = "0" + hour + "hr : ";
  counterDiv.innerText = second + "sec";
  minCounter.innerText = minut + "min : ";
  hourCounter.innerText = hour + "hr : ";
}
