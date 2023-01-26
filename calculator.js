let btn = document.querySelectorAll(".btn");
let calculatorOutput = document.querySelector(".calculator__output");
let equal = document.querySelector(".equal");
let square = document.querySelector(".square");
let cube = document.querySelector(".cube");
let times = document.querySelector("p");

// For Designing All Button  ==============================================================================
let deleteText = document.querySelector(".delete");
btn.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("btn__style");
    setTimeout(() => {
      e.classList.remove("btn__style");
    }, 0.3);
  });
});
// For Selecting All Button  ==============================================================================
btn.forEach((events) => {
  events.addEventListener("click", () => {
    console.log(events.textContent);
    calculatorOutput.textContent += events.textContent;
  });
});
// For Calculating ==============================================================================
equal.addEventListener("click", () => {
  let allData = calculatorOutput.textContent;
  let arr = [];
  if (allData.includes("+")) {
    arr = allData.split("+");
    calculatorOutput.textContent = parseFloat(arr[0]) + parseFloat(arr[1]);
  } else if (allData.includes("-")) {
    arr = allData.split("-");
    calculatorOutput.textContent = parseFloat(arr[0]) - parseFloat(arr[1]);
  } else if (allData.includes("X")) {
    arr = allData.split("X");
    calculatorOutput.textContent = parseFloat(arr[0]) * parseFloat(arr[1]);
  } else if (allData.includes("/")) {
    arr = allData.split("/");
    calculatorOutput.textContent = parseFloat(arr[0]) / parseFloat(arr[1]);
  } else {
    calculatorOutput.textContent = "";
  }
});
square.addEventListener("click" , () => {
    let allData = calculatorOutput.textContent;
    let arr = [];
    if (allData.includes("X2")) {
       arr = allData.split("X2");
       calculatorOutput.textContent = parseFloat(arr[0]) * parseFloat(arr[0]);
    }
})
cube.addEventListener("click" , () => {
    let allData = calculatorOutput.textContent;
    let arr = [];
    if (allData.includes("X3")) {
       arr = allData.split("X3");
       calculatorOutput.textContent = parseFloat(arr[0]) * parseFloat(arr[0]) * parseFloat(arr[0]);
    }
})
// Adding time here
const timeNow = () => {
    let time = new Date();

    let hour = time.getHours();
    hour = hour % 12; 
    hour = hour >= 12 ? hour + " am" : hour + " pm";
    // if (hour >= 12) {
    //   hour = hour + "am"
    // } else {
    //   hour = hour + "pm"
    // }
    let min = time.getMinutes();
    let sec = time.getSeconds();
    min = formatTime(min)
    sec = formatTime(sec)
    times.textContent = `${hour} : ${min} : ${sec}`;
    setInterval(timeNow, 1000)
}
timeNow();
function formatTime (value) {
    if (value < 10) {
        value = `0${value}`
    }
    return value;
}
// Cleat Calculator
deleteText.addEventListener("click", () => {
  calculatorOutput.textContent = "";
});
