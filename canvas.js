var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

window.addEventListener('click', function() {
  init();
});

var maxRadius = 40;
var minRadius = 3;
var colorArray = [
  '#91C1DE',
  '#F5AFA3',
  '#9FE0B7',
  '#C4C095',
  '#FFDFB5'
];

// Circle Object
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = Math.random() * radius + 30;
  this.maxRadius = 40 + (Math.random() - 0.5) * 10;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * 5)];
  
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;  
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;  
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius + 5 < this.maxRadius) {
        this.radius += 8;   
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}


var myName = ['罗', '比'];
function singleChar(char, color, x, y) {
  this.text = char;
  this.color = color;
  this.x = x;
  this.y = y;

  this.draw = function() {
    c.font = '80pt sans-serif';
    this.fillStyle = this.color;
    c.fillText(this.text, x, y);
  }
}

// Initialize
var circleArray = [];
var nameArray = [];

function init() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  circleArray = [];
  for (var i = 0; i < 600; ++i) {
    var radius = Math.random() * 3 + 2;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 7;
    var y = Math.random() * (innerHeight - radius * 2) + radius; ;
    var dy = (Math.random() - 0.5) * 7;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

  for (var i = 0; i < myName.length; ++i) {
    var x = innerWidth * 0.4 + 100 * i;
    var y = innerHeight * 0.5;
    var color = colorArray[i];
    nameArray.push(new singleChar(myName[i], color, x, y));
  }

  console.log(nameArray);

}




// Animate
function animateCircles() {
  requestAnimationFrame(animateCircles);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; ++i) {
    circleArray[i].update();
  }

  for (var i = 0; i < nameArray.length; ++i) {
    nameArray[i].draw();
  }
  
}

init();
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