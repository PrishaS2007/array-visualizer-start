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
    let divHeight = (val / maxVal) * 600;
    outputStr += `<div style="height:${divHeight}px">${val}</div>`;
  }
  outputEl.innerHTML = outputStr;
}

// Draw Data Array every 200ms
setInterval(drawDataArray, 200);
drawDataArray();
