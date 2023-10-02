const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

import * as math from "mathjs";

let currentValue = "0";
let memory = 0;
let mrcClicked = false;

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const x = this.getAttribute('value')

    if (x === '=') {

      currentValue = math.evaluate(currentValue);
      currentValue = math.round(currentValue, 10)

    } else if (x === 'DEL') {

      if (currentValue.length > 1) {

        currentValue = currentValue.slice(0, -1);

      } else {

        currentValue = "0";

      }

    } else if (x === '.' && currentValue === "0") {

      currentValue = 0 + x

    } else if (x === '√') {

      if (currentValue !== "0") {
        currentValue = math.sqrt(currentValue)
        currentValue = math.round(currentValue, 10)
      }

    } else if (x === "M+") {
      if (currentValue !== "0") {

        memory += parseFloat(currentValue);
        currentValue = "0"

      }
    } else if (x === "M-") {
      if (currentValue !== "0") {

        memory -= parseFloat(currentValue);
        currentValue = "0"
      }
    } else if (x === "MRC") {
      if (!mrcClicked) {

        currentValue = (memory.toString());

      } else {
        memory = 0
      }

      mrcClicked = !mrcClicked

    } else {
      //check if the current value is 0 and change it accordingly
      currentValue = currentValue === "0" ? x : currentValue + x
    }

    display.innerText = currentValue
  })
})