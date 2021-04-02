var player,playerImage;
var backGroundImage;
var backGround;


function preload(){
  playerImage=loadImage("tom.png")
  backGroundImage= loadImage("background.jpg")
}





function setup() {
  createCanvas(400,800);
  
  backGround=createSprite(200,400);
  backGround.addImage(backGroundImage);
  backGround.velocityY=-2;
  backGround.y=backGround.height/2;
  

  player=createSprite(200, 80, 50, 50);
  player.addImage(playerImage)
  player.scale=0.4;
  player.velocityY=2;

 

}

function draw() {
  background(backGroundImage);
  
  if(backGround.y<0){
    backGround.y=backGround.height/2;
  }
  if(keyDown("right")){
    player.velocityX=2;
    player.velocityY=0;
  }
  if(keyDown("left")){
    player.velocityX=-2;
    player.velocityY=0;
  } 
  drawSprites();
}