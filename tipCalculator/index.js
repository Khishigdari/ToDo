const body = document.querySelector("body");
const divContainer = document.createElement("div");
const pBill = document.createElement("p");
let inputAmount = document.createElement("input");
const pSelect = document.createElement("p");
const divBtn = document.createElement("div");
const btn5 = document.createElement("button");
const btn10 = document.createElement("button");
const btn15 = document.createElement("button");
const btn25 = document.createElement("button");
const btn35 = document.createElement("button");
const btn50 = document.createElement("button");
const btn65 = document.createElement("button");
const btn80 = document.createElement("button");
const pTotal = document.createElement("p");
const reset = document.createElement("button");

inputAmount.style.width = "100%";
inputAmount.style.border = "0";
reset.style.width = "100%";
divBtn.style.display = "flex";
divBtn.style.flexWrap = "wrap";
divBtn.style.gap = "13px";
reset.style.borderRadius = "5px";
inputAmount.style.borderRadius = "2px";
divContainer.classList.add("container");
// divBtn.classList.add("btnContainer");
// button.classList.add("btn");

pBill.innerText = "Bill";
pSelect.innerText = "Select Tip %";
btn5.innerText = "5%";
btn10.innerText = "10%";
btn15.innerText = "15%";
btn25.innerText = "25%";
btn35.innerText = "35%";
btn50.innerText = "50%";
btn65.innerText = "65%";
btn80.innerText = "80%";
let total = (pTotal.innerText = "0.00");
reset.innerText = "Reset";

// let data = [];
// input.type = "text";
reset.addEventListener("click", () => {
  inputAmount.value = "";
  pTotal.innerText = "0.00";
});
btn5.addEventListener("click", () => {
  pTotal.innerText = "";
  let tip = parseInt(inputAmount.value * 1.05);
  pTotal.innerText += "Total: " + tip;
});

btn10.addEventListener("click", () => {
  pTotal.innerText = "";
  let tip = parseInt(inputAmount.value * 1.1);
  pTotal.innerText += "Total: " + tip;
});

btn15.addEventListener("click", () => {
  pTotal.innerText = "";
  let num = (inputAmount.value * 15) / 100;
  num += parseInt(inputAmount.value);
  //   let tip = parseInt(inputAmount.value * 1.15);
  pTotal.innerText += "Total: " + num;
});

btn25.addEventListener("click", () => {
  pTotal.innerText = "";
  let tip = parseInt(inputAmount.value * 1.25);
  pTotal.innerText += "Total: " + tip;
});

btn35.addEventListener("click", () => {
  pTotal.innerText = "";
  let tip = parseInt(inputAmount.value * 1.35);
  pTotal.innerText += "Total: " + tip;
});

btn50.addEventListener("click", () => {
  pTotal.innerText = "";
  let tip = parseInt(inputAmount.value * 1.5);
  pTotal.innerText += "Total: " + tip;
});

btn65.addEventListener("click", () => {
  pTotal.innerText = "";
  let tip = parseInt(inputAmount.value * 1.65);
  pTotal.innerText += "Total: " + tip;
});

btn80.addEventListener("click", () => {
  pTotal.innerText = "";
  let tip = parseInt(inputAmount.value * 1.8);
  pTotal.innerText += "Total: " + tip;
});
// reset.addEventListener("click", () => {
//   inputAmount = "";
// });

body.appendChild(divContainer);
divContainer.appendChild(pBill);
divContainer.appendChild(inputAmount);
divContainer.appendChild(pSelect);
divContainer.appendChild(divBtn);
divBtn.appendChild(btn5);
divBtn.appendChild(btn10);
divBtn.appendChild(btn15);
divBtn.appendChild(btn25);
divBtn.appendChild(btn35);
divBtn.appendChild(btn50);
divBtn.appendChild(btn65);
divBtn.appendChild(btn80);
divContainer.appendChild(pTotal);
divContainer.appendChild(reset);

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
// function increaseCarPrices(cars) {
//   let filtered = cars.map((car) => {
//     return {
//       ...car,
//       price: car.price + (car.price * 15) / 100,
//     };
//   });
//   return filtered;
// }
// const priceIncreasedByFifteenPercent = increaseCarPrices(cars);
// console.log(
//   "Price Increased By Fifteen Percent:",
//   priceIncreasedByFifteenPercent
// );
