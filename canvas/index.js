// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// // for(var i=0;i<=10;i++){
//     ctx.fillRect(i*10,i*10,10,100);
//     ctx.fillStyle = "red"
// // }
// ctx.strokeStyle='DeepPink'
// ctx.lineWidth =4
//  ctx.strokeRect(10,10,100,20)

// //Draw Line
// ctx.strokeStyle = "Turquoise"
// ctx.lineWidth = 4;
// ctx.beginPath(); // starts the line
// ctx.moveTo(10,10);// moves the drawing point to (10,10)
// ctx.lineTo(60,60); //draw line from (10,10) to (60,60)
// ctx.moveTo(60,10);
// ctx.lineTo(10,60)
// ctx.stroke() // displays the drawn stroke

// // Drawing Circles and arcs
// ctx.lineWidth = 2;
// ctx.strokeStyle = "Green";
// ctx.beginPath();
// ctx.arc(50,50,20,0,Math.PI/2,true);//for true the arc will be drawn from 0 to 2PI-PI/2 clockwise

// ctx.stroke()
// ctx.beginPath();

// ctx.arc(60,40,20,0,Math.PI/2,false);//for false the arc will be drawn from 0 to PI/2 clockwise
// ctx.stroke()

// //Drawing a circle using function
// let circle = (x,y,rad)=>{
//     ctx.beginPath();
//     ctx.arc(x,y,rad,0,2*Math.PI,false);
//     ctx.stroke();
// }
// ctx.strokeStyle="Orange"
// circle(100,100,50);

// // Animation of moving rectangle
// var positon = 0;
// setInterval(() => {
//   ctx.clearRect(0, 9, 200, 2);
//   ctx.fillRect(positon, 0, 20, 20);
//   positon++;
//   if (positon > 200) {
//     positon = 0;
//   }
// },30);

//animating the size of circle

// let circle = (x,y,rad,color)=>{
//         ctx.beginPath();
//         ctx.strokeStyle=color

//         ctx.arc(x,y,rad,0,2*Math.PI,false);
//         ctx.stroke();
//     }

//         for(var i=0;i<=100;i++){
//             setTimeout(() => { console.log("World!"); }, 200);
//             circle(50,50,i,"orange")
//         }

// // animating size of a rectangle
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var size = 0;
// setInterval(function () {
//  ctx.clearRect(0, 0, 200, 200);
//  ctx.fillRect(0, 0, size, size);
//  size++;
//  if (size > 200) {
//  size = 0;
//  }
// }, 30);

// var circle = function (x, y, radius, fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//   if (fillCircle) {
//     ctx.fill();
//   } else {
//     ctx.stroke();
//   }
// };

// var drawBee = function (x, y) {
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = "Black";
//   ctx.fillStyle = "Gold";

//   circle(x, y, 8, true);
//   circle(x, y, 8, false);
//   circle(x - 5, y - 11, 5, false);
//   circle(x + 5, y - 11, 5, false);
//   circle(x - 2, y - 1, 2, false);
//   circle(x + 2, y - 1, 2, false);
// };

// var update = function (coordinate) {
//   var offset = Math.random() * 4 - 2;
//   coordinate += offset;
//   if (coordinate > 200) {
//     coordinate = 200;
//   }
//   if (coordinate < 0) {
//     coordinate = 0;
//   }
//   return coordinate;
// };

// var x = 100;
// var y = 100;
// setInterval(function () {
//   ctx.clearRect(0, 0, 200, 200);
//   drawBee(x, y);
//   x = update(x);
//   y = update(y);
//   ctx.strokeRect(0, 0, 200, 200);
// }, 30);

let bodySelection = document.querySelector('body');


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
    ctx.fill();
    } else {
    ctx.stroke();
    }
   };

   var Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 0;
   };

   this.x += this.xSpeed;
   this.y += this.ySpeed;
   if (this.x < 0) {
   this.x = width;
   } else if (this.x > width) {
   this.x = 0;
   } else if (this.y < 0) {
   this.y = height;
   } else if (this.y > height) {
   this.y = 0;
   }
  
   Ball.prototype.draw = function () {
    circle(this.x, this.y, 10, true);
   };
   

   Ball.prototype.setDirection = function (direction) {
    if (direction === "up") {
    this.xSpeed = 0;
    this.ySpeed = -5;
    } else if (direction === "down") {
    this.xSpeed = 0;
    this.ySpeed = 5;
    } else if (direction === "left") {
    this.xSpeed = -5;
    this.ySpeed = 0;
    } else if (direction === "right") {
    this.xSpeed = 5;
    this.ySpeed = 0;
    } else if (direction === "stop") {
    this.xSpeed = 0;
    this.ySpeed = 0;
    }
   };
   

   var ball = new Ball()

   var keyNames = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
   };

bodySelection.addEventListener('keydown',(event)=>{
    console.log(keyNames[event.which])
})

setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
   }, 30);