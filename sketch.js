
let buildingWidth = 30;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  background(210, 10, 95); 
  noLoop(); 
}

function draw() {
  noStroke();

 
  for (let x = 0; x < width; x += buildingWidth) {

    // Randomised height
    let h = random(50, height);

    // Colour determined by height
    let hue;
    let saturation;
    let brightness;

    if (h > height / 2) {
      // Tall buildings
      hue = random(200, 320);
      saturation = 90;
      brightness = 80;
    } else {
      // Short buildings
      hue = random(20, 80);
      saturation = 40;
      brightness = 95;
    }

    fill(hue, saturation, brightness);

    // canvas bottom
    rect(x, height - h, buildingWidth, h);
  }
}
