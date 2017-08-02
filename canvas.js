var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var radius = 30;
var x = Math.random() * innerWidth + radius;
var dx = (Math.random() - 0.5) * 8;
var y = Math.random() * innerHeight + radius;
var dy = (Math.random() - 0.5) * 8;

console.log(x, y, dx, dy, innerWidth, innerHeight, radius);

function animateCircles() {
  requestAnimationFrame(animateCircles);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0 , Math.PI * 2);
  c.strokeStyle = "#fa34a3";
  c.stroke();

  if (x + radius > window.innerWidth || x - radius < 0) {
    dx = -dx;  
  }

  if (y + radius > window.innerHeight || y - radius < 0) {
    dy = -dy;  
  }

  x += dx;
  y += dy;
  
}

animateCircles();



// Rectangles
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(300, 300, 100, 100);

// Line
// c.beginPath();
// c.lineTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// Arc & Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue'
// c.stroke();

// for (var i = 0; i < 30; ++i) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0 , Math.PI * 2);
//   c.stroke();
// }