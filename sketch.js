var pathImg;
var path;
var runner;
var runnerAnimation;
var leftBoundary;
var rightBoundary

function preload() {
  //pre-load imag
  pathImg = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200, 360);
  runner.addAnimation("runner", runnerAnimation);
  runner.scale = 0.05;

  leftBoundary = createSprite(5, 200, 10, 400);
  leftBoundary.visible = false;

  rightBoundary = createSprite(395, 200, 10, 400);
  rightBoundary.visible = false;
}


function draw() {
  background(0);

  runner.x = World.mouseX;
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  if (path.y > 400) {
    path.y = height / 2;


  }
  drawSprites();
}
