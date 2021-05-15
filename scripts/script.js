let dots = [];
let dotAmount = 150
let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  for (let i = 0; i < dotAmount ; i++) {
    let dot = {
        'x': random(0, windowWidth),
        'y' : random(0, windowHeight),
        'size' : random(5, 15),
        'xSpeed': random(-2, 2),
        'ySpeed' : random(-2, 2)
    }

    dots.push(dot);
  }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}

function draw() {
  background("#243626");
  for (let i = 0; i < dots.length; i++) {
    noStroke();
    fill("#27b334");
    ellipse(dots[i].x, dots[i].y, dots[i].size);


    if (dots[i].x <= 0 || dots[i].x >= windowWidth) dots[i].xSpeed *= -1;
    if (dots[i].y <= 0 || dots[i].y >= windowHeight) dots[i].ySpeed *= -1;
    dots[i].x += dots[i].xSpeed;
    dots[i].y += dots[i].ySpeed;

    dots.forEach((element) => {
        let dis = dist(dots[i].x, dots[i].y, element.x, element.y);
        if (dis < 100) {
          stroke("#3d5c40");
          line(dots[i].x, dots[i].y, element.x, element.y);
        }
  });
  }
}
