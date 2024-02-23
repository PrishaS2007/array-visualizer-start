// Array Visualizer Start

// Global Variables
let data = [1, 2, 3, 5, 8, 7, 4, 4, 1, 0, 8, 9, 10, 7];
let maxVal = 10; // max data value

// HTML Variables
let outputEl = document.getElementById("container");

// Tranverse to Display Data Arrray
function drawDataArray() {
  let outputStr = " ";
  for (let i = 0; i < data.length; i++) {
    outputStr += `<div>${data[i]}</div>`;
  }
  for (let val of data) {
    outputStr += `<div>${val[i]}</div>`;
  }
  outputEl.innerHTML = outputStr;
}

drawDataArray();
