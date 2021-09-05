var SeaSprite;
var ShipSprite;
var sImg;
var seaImg;
var sImg1, sImg2, sImg3, sImg4;
var shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  sImg1 = loadImage("ship-1.png");
  sImg2 = loadImage("ship-2.png");
  sImg3 = loadImage("ship-3.png");
  sImg4 = loadImage("ship-4.png");
  
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  preload();
  createCanvas(800, 500);
  
  SeaSprite = createSprite(200,200);
  SeaSprite.addImage(seaImg);
  SeaSprite.scale = 1;
  SeaSprite.velocityX = 5;
 
  ShipSprite = createSprite(600,200);
 // ShipSprite.addImage(sImg1);
  ShipSprite.addAnimation("running", shipImg);
  ShipSprite.scale = 0.5;
}

function draw() {
  // background("blue");
 
  drawSprites();
  if(SeaSprite.x < 0){
    SeaSprite.x = SeaSprite.width/2; 
  }
}
