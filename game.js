var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function draw () { 
requestAnimationFrame(draw);
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius = 10;
function drawBall(){
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.Pi*2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
}
function draw()
drawBall();
