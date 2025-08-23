const body = document.querySelector("body");
const printDate = () => {
  const date = new Date().toString();
  //   const realtimeDate = date.split(" ")[4];
  //   document.querySelector("#time").innerText = realtimeDate;
  document.querySelector("#time").innerText = date;
  console.log(date, "date");
};
setInterval(printDate, 1000);

// body.appendChild();
