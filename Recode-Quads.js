  let sz = 50, k = 8;
  let num = [1,2,3,6,10,18,9,2,1];

  function setup() {

    createCanvas(690, 520);
    background(222, 133, 103);
    noFill();

    for (let i = 0; i++ < 6; ) {
      for (let j = 0; j++ < 9; ) {
        for (let h = 0; h < num[j-1]; h++) {

          let x1 = 50 + j * 60 - sz / 2 + random(-k, k);
          let y1 = 50 + i * 60 - sz / 2 + random(-k, k);

          let x2 = x1 + sz + random(-k, k);
          let y2 = y1 + random(-k, k);

          let x3 = x1 + sz + random(-k, k);
          let y3 = y1 + sz + random(-k, k);

          let x4 = x1 + random(-k, k);
          let y4 = y1 + sz + random(-k, k);

          stroke(random(240-num[j-1]*2, 255), 100+num[j-1]*12);
          quad(x1, y1, x2, y2, x3, y3, x4, y4);
        }
      }
    }
  }


