const paintBoard = document.querySelector(".paint-board");
const clearBtn = document.querySelector("#clear-btn");
const colorPicker = document.querySelector("#color-picker");
const brushSize = document.querySelector("#brush-size");

let isMouseDown = false;

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.background = "transparent";
  canvas.style.zIndex = "10";
  paintBoard.appendChild(canvas);
  return canvas.getContext("2d");
}

let ctx = createCanvas(paintBoard.offsetWidth, paintBoard.offsetHeight);
let currentColor = colorPicker.value;
let currentBrushSize = brushSize.value;

colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
});

brushSize.addEventListener("change", (e) => {
  currentBrushSize = e.target.value;
});

paintBoard.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  ctx.beginPath();
});

paintBoard.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    const x = e.pageX - paintBoard.offsetLeft;
    const y = e.pageY - paintBoard.offsetTop;
    ctx.lineWidth = currentBrushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

paintBoard.addEventListener("mouseup", (e) => {
  isMouseDown = false;
});

clearBtn.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, paintBoard.offsetWidth, paintBoard.offsetHeight);
});
