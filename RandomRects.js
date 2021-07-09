function setup() {
  
  createCanvas(800, 400);
  background(255);
}

function draw() {
  
  let x = random(10, width-50);
  let y = random(10, height-50);
  let sz = random(5, 50);
  
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let a = random(0, 255);
  
  fill(r, 255-g, 255, a);
  square(x, y, sz);
}
