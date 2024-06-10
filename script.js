"use strict";
const clearButton = document.querySelector(".clear-btn");
const units = document.querySelector(".select-btn");
const inputedValue = document.querySelector(".number");
const result = document.querySelector(".result-field");
const convertButton = document.querySelector(".convert-btn");

// convertButton.addEventListener("click", () => {
//   if (units.value === "kg to g") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput * 1000}g`;
//   }
//   if (units.value === "g to kg") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput / 1000}kg`;
//   }
//   if (units.value === "k to c") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput - 273}\u00B0`;
//   }
//   if (units.value === "c to k") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput + 273}k`;
//   }
//   if (units.value === "ft to yard") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput / 3}yd`;
//   }
//   if (units.value === "yard to ft") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput * 3}ft`;
//   }
//   if (units.value === "celsius to fahrenheit") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${(convertedInput * 9) / 5 + 32}F`;
//   }
//   if (units.value === "fahrenheit to celsius") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${((convertedInput - 32) * 5) / 9}\u00B0`;
//   }
//   if (units.value === "mm to cm") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput / 10}cm`;
//   }
//   if (units.value === "cm to mm") {
//     const convertedInput = inputedValue.value;
//     result.textContent = `${convertedInput * 10}mm`;
//   }
// });
let convertedInput;
function converter() {
  switch (units.value) {
    case "kg to g":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput * 1000}g`;
      break;
    case "g to kg":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput / 1000}kg  `;
      break;
    case "k to c":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput - 273}\u00B0C`;
      break;
    case "c to k":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput - 273}K`;
      break;
    case "ft to yard":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput / 3}yd`;
      break;
    case "yard to ft":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput * 3}ft`;
      break;
    case "celsius to fahrenheit":
      convertedInput = inputedValue.value;
      result.textContent = `${(convertedInput * 9) / 5 + 32}F`;
      break;
    case "fahrenheit to celsius":
      convertedInput = inputedValue.value;
      result.textContent = `${((convertedInput - 32) * 5) / 9}\u00B0C`;
      break;
    case "mm to cm":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput / 10}cm`;
      break;
    case "cm to mm":
      convertedInput = inputedValue.value;
      result.textContent = `${convertedInput * 10}mm`;
      break;
  }
}

convertButton.addEventListener("click", converter);
inputedValue.addEventListener("input", converter);

clearButton.addEventListener("click", () => {
  inputedValue.value = " ";
  result.textContent = " ";
  units.value = "select";
});
