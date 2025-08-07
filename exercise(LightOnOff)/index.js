// let lightOff = "https://www.w3schools.com/js/pic_bulboff.gif";

// let lightOn = "https://www.w3schools.com/js/pic_bulbon.gif";

// const body = document.querySelector("body");
// let off = document.createElement("img");
// let on = document.createElement("img");

// off.src = lightOff;
// off.addEventListener("click", () => {
//   on.src = lightOn;
//   off.src = "";
//   lightOff = lightOn;
// });

// body.appendChild(on);
// body.appendChild(off);

// ------> Light On / Off <------
const body = document.querySelector("body");
const image = document.createElement("img");
const button = document.createElement("button");

let isOn = false;

button.innerText = "On";
// button.innerText = isOn ? "Off" : "On";
image.src = "https://www.w3schools.com/js/pic_bulboff.gif";

button.addEventListener("click", () => {
  isOn = !isOn;
  button.innerText = isOn ? "Off" : "On";
  if (isOn) {
    image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  } else {
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  }
});

body.appendChild(image);
body.appendChild(button);
