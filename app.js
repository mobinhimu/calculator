let input = document.querySelector(".input");
let btn = document.querySelectorAll(".calc__value");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

let sign = "";
btn.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.textContent);
    if (e.textContent === "c") {
      input.textContent = "";
    } else if (e.textContent === "ac") {
      input.textContent = 0;
    } else if (parseInt(e.textContent) === 0) {
      input.innerHTML += e.textContent;
    } else {
      input.innerHTML += e.textContent;
    }
  });
});

equal.addEventListener("click", () => {
  let allText = input.textContent;
  let arr = [];
  if (allText.includes("+")) {
    sign = "+";
    arr = allText.split("+");
    input.textContent = parseFloat(arr[0]) + parseFloat(arr[1]);
  } else if (allText.includes("-")) {
    sign = "-";
    arr = allText.split("-");
    input.textContent = parseFloat(arr[0]) - parseFloat(arr[1]);
  } else if (allText.includes("x")) {
    sign = "x";
    arr = allText.split("x");
    input.textContent = parseFloat(arr[0]) * parseFloat(arr[1]);
  } else if (allText.includes("/")) {
    sign = "/";
    arr = allText.split("/");
    input.textContent = parseFloat(arr[0]) / parseFloat(arr[1]);
  }
});
