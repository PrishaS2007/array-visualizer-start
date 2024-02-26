// Array Visualizer Start

// Global Variables
let data = [1, 2, 3, 5, 8, 7, 4, 4, 1, 0, 8, 9, 10, 7];
let maxVal = 10; // max data value

// HTML Variables
let outputEl = document.getElementById("container");

// Tranverse to Display Data Arrray
function drawDataArray() {
  let outputStr = "";
  for (let val of data) {
    outputStr += `<div>${val}</div>`;
  }
  outputEl.innerHTML = outputStr;
}

drawDataArray();
