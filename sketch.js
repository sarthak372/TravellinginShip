var ship, sea, shipImg, seaImg;

function preload(){
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(600,300);
  
  ship=createSprite(70,180,20,20);
  ship.addAnimtion("ship",shipImg)
ship.scale=0.2
ship=createSprite(10,200,600,10);
sea.X=sea.width/2;
sea.visible=false
}

function draw() {
  
  background(seaImage);
  if (keyDown("space")) {
    ship.velocityY = -10;
  }
    ship.velocityY = ship.velocityY = + 0.8

  if (sea.X < 0) {
    sea.x = sea.width / 2;
  }

  ship.collide(sea);
  drawSprites()
}