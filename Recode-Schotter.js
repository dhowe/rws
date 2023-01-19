  let sqSz = 20;

  function setup() {

    createCanvas(400, 600);

    noFill();
    background(255);
    translate(width/5, height/8);

    for (let i = 0; i < 12; i++) {
      
      for (let j = 0; j < 22; j++) {

        let displacement = max(j, 0.2);
        let randRotation = random(-4, 4) * displacement;
        let randShift = random(0, 1) * displacement;

        translate(i * sqSz, j * sqSz);
        rotate(radians(randRotation));
        
        square(-sqSz / 2 + randShift, -sqSz / 2 + randShift, sqSz);
        
        rotate(radians(-randRotation));
        translate(-i * sqSz, -j * sqSz);
      }
    }
  }




