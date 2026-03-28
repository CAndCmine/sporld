function setup() {
  createCanvas(300, 300, WEBGL);
  noStroke();
  pixelDensity(5);
}

function draw() {
  ortho();
  background(10);
  orbitControl();
  ambientLight(0);
  directionalLight(255, 255, 255, 0.5, 0.7, -1);
  directionalLight(80, 80, 80, 0.5, 0, -5);
  
  const noiseOffset = 0.01;

  for (let x = 0; x <= 200; x++) {
    for (let z = 0; z <= 200; z++) {
      push();
      frameRate(0);

      rotateX(2.5);
      rotateY(0.8);
      translate(150, 90, -150);

      const noiseX = x * 0.001 + noiseOffset
      const noiseZ = z * 0.001 + noiseOffset
      
      const snoiseX = x * 0.1/12 + noiseOffset
      const snoiseZ = z * 0.1/12 + noiseOffset
      
      const ssnoiseX = x * 0.05/12 + noiseOffset
      const ssnoiseZ = z * 0.05/12 + noiseOffset
      
      const sssnoiseX = x * 0.04/13 + noiseOffset
      const sssnoiseZ = z * 0.04/13 + noiseOffset

      let h = noise(noiseX+snoiseX+ssnoiseX+sssnoiseX, noiseZ+snoiseZ+ssnoiseZ+sssnoiseZ, 1) * 130;

      if (h < 60) {
        fill(100, 100, 200);
        h = 60;
      } 
      else if (h < random(62, 63)) {
        fill(194, 178, 128);
      } 
      else if (h < random(80, 90)) {
        fill(19, 109, 21);
      } 
      else if (h < random(90, 100)) {
        fill(59, 59, 59);
        if (h < random(90, 95)) {
          fill(100, 100, 100);
        }
      }

      translate(x * 1 - 100, h, z * 1 - 100);
      box(1, 100, 1);

      pop();
    }
  }
  //saveCanvas('mySketch', 'png');
}