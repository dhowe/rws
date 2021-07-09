let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  x += random(-3, 3);
  y += random(-3, 3);

  background(255, 4);
  noStroke();
  fill(50);
  circle(x, y, 20);
}
