let x = 200, y = 200, lx, ly;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  
  lx = x;
  ly = y;

  x = constrain(x + random(-3, 3), 0, width);
  y = constrain(y + random(-3, 3), 0, height);

  noFill();
  stroke(0);
  line(x, y, lx, ly);
}

