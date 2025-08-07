const button = document.querySelector("button");
const box = document.querySelector(".box");

const namedColors = ["red", "green", "blue", "yellow", "purple", "orange"];

let count = 0;

button.addEventListener("click", () => {
  //   box.style.backgroundColor = namedColors[Math.floor(Math.random() * 10)];
  box.style.backgroundColor = namedColors[count];
  if (count > namedColors.length - 1) count = 0;
  count++;
});
