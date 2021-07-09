  let sqSz = 20;

  function setup() {

    createCanvas(400, 600);

    noFill();
    background(255);
    translate(width/5, height/8);

    for (let i = 0; i < 12; i++) {
      
      for (let j = 0; j < 22; j++) {

        let displace = max(j, 0.2);
        let randRot = random(-4, 4) * displace;
        let randShift = random() * displace;

        translate(i * sqSz, j * sqSz);
        rotate(radians(randRot));
        
        square(-sqSz / 2 + randShift, -sqSz / 2 + randShift, sqSz);
        
        rotate(radians(-randRot));
        translate(-i * sqSz, -j * sqSz);
      }
    }
  }




