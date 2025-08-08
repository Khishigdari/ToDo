const body = document.querySelector("body");
const box1 = document.createElement("div");
const box2 = document.createElement("div");

box1.classList.add("box1");
box2.classList.add("box2");

box1.style.width = "50%";
box2.style.width = "50%";

// box1.addEventListener("click", () => {
//   box1.style.width = parseInt(box1.style.width) + 1 + "%";
//   box2.style.width = parseInt(box2.style.width) - 1 + "%";
// });

// box2.addEventListener("click", () => {
//   box1.style.width = parseInt(box1.style.width) - 1 + "%";
//   box2.style.width = parseInt(box2.style.width) + 1 + "%";
// });

// ============

// box1.addEventListener("click", () => {
//   const currentWidth = parseInt(getComputedStyle(box1).width);
//   const newWidth = currentWidth + 10;
//   box1.style.width = newWidth + "px";

//   const currentWidthBox2 = parseInt(getComputedStyle(box2).width);
//   const newWidthBox2 = currentWidthBox2 - 10;
//   box2.style.width = newWidthBox2 + "px";
// });

// box2.addEventListener("click", () => {
//   const currentWidthBox2 = parseInt(getComputedStyle(box2).width);
//   const newWidthBox2 = currentWidthBox2 + 10;
//   box2.style.width = newWidthBox2 + "px";

//   const currentWidth = parseInt(getComputedStyle(box1).width);
//   const newWidth = currentWidth - 10;
//   box1.style.width = newWidth + "px";
// });

// ============

// document.addEventListener("keydown", () => {
//   if (box.key === "Enter") {
//     const currentWidth = parseInt(getComputedStyle(box1).width);
//     const newWidth = currentWidth + 10;
//     box1.style.width = newWidth + "px";

//     const currentWidthBox2 = parseInt(getComputedStyle(box2).width);
//     const newWidthBox2 = currentWidthBox2 - 10;
//     box2.style.width = newWidthBox2 + "px";
//   } else if (box.key === "Space") {
//     const currentWidthBox2 = parseInt(getComputedStyle(box2).width);
//     const newWidthBox2 = currentWidthBox2 + 10;
//     box2.style.width = newWidthBox2 + "px";

//     const currentWidth = parseInt(getComputedStyle(box1).width);
//     const newWidth = currentWidth - 10;
//     box1.style.width = newWidth + "px";
//   }
// });

document.addEventListener("keypress", (event) => {
  // const key = event.key;
  // const code = event.code;
  if (event.key === "Enter") {
    box1.style.width = parseInt(box1.style.width) + 1 + "%";
    box2.style.width = parseInt(box2.style.width) - 1 + "%";
  } else if (event.key === " ") {
    box1.style.width = parseInt(box1.style.width) - 1 + "%";
    box2.style.width = parseInt(box2.style.width) + 1 + "%";
  }
});

body.appendChild(box1);
body.appendChild(box2);
