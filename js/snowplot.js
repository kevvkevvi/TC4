var canvas = document.getElementsByClassName("drawing-board")[0];
console.log("drawing board")
// Set the width and height of the canvas.
canvas.width = 600;
canvas.height = 300;
// Grab the context of the canvas so that we can draw.
var ctx = canvas.getContext("2d");
// Change the background color of the canvas.
ctx.fillStyle = "lime";
ctx.fillRect(0, 0, canvas.width, canvas.height);
