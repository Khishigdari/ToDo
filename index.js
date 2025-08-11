const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

button.innerText = "add";

body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);

let data = [];

const addTodo = (value) => {
  data.push(value);
};

const createElement = (value) => {
  const li = document.createElement("li");
  const x = document.createElement("button");
  li.innerText = value;
  x.innerText = "x";
  li.appendChild(x);
  ul.appendChild(li);
};

const render = () => {
  ul.innerHTML = "";
  data.map((value) => {
    createElement(value);
  });
};

button.addEventListener("click", () => {
  addTodo(input.value);
  render();
});
