var fixedrect,movingrect


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 50);
  fixedrect.shapeColor = "green";
  fixedrect.velocityY = 5;
  fixedrect.debug = true;

  movingrect = createSprite(400,800,50,50);
  movingrect.shapeColor = "green";
  movingrect.velocityY = -5;
  movingrect.debug = true;
}

function draw() {
  background(0);  

  bounceOff(movingrect,fixedrect);

  drawSprites();
}

