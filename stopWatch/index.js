const counterDiv = document.getElementById("counter");
const minCounter = document.getElementById("minCounter");
const hourCounter = document.getElementById("hourCounter");
const mlsCounter = document.getElementById("mlsCounter"); // ==========
let second = 0;
let minut = 0;
let hour = 0;
let mls = 0; // ==========
let interval;
mlsCounter.innerText = mls + "ms"; // ==========
counterDiv.innerText = second + "sec : ";
minCounter.innerText = minut + "min : ";
hourCounter.innerText = hour + "hr : ";

function addMls() {
  // ==========
  mls++;
}

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
  if (mls === 99) {
    // ==========
    second++;
    mls = 0;
  }
  if (second === 60) {
    minut++;
    second = 0;
  }
  if (minut === 60) {
    hour++;
    minut = 0;
  }
  mlsCounter.innerText = mls + "ms"; // ==========
  counterDiv.innerText = second + "sec : ";
  minCounter.innerText = minut + "min : ";
  hourCounter.innerText = hour + "hr : ";
}

function startTimer() {
  clearInterval(interval);

  interval = setInterval(addSecond, 1000);
  interval = setInterval(addMls, 100); // ==========
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  mls = 0; // ==========
  second = 0;
  minut = 0;
  hour = 0;
  //   counterDiv.innerText = "0" + second + "sec";
  //   minCounter.innerText = "0" + minut + "min : ";
  //   hourCounter.innerText = "0" + hour + "hr : ";
  mlsCounter.innerText = mls + "ms"; // ==========
  counterDiv.innerText = second + "sec : ";
  minCounter.innerText = minut + "min : ";
  hourCounter.innerText = hour + "hr : ";
}

const printDate = () => {
  const date = new Date().toString();
  //   const realtimeDate = date.split(" ")[4];
  //   document.querySelector("#time").innerText = realtimeDate;
  document.querySelector("#time").innerText = date;
  //   console.log(date, "date");
};
setInterval(printDate, 1000);
