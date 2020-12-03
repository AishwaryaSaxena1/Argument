var moveRect;
var fixedRect;
var shinchan;
var doraemon;

function setup() {
  createCanvas(800,400);
  
  fixedRect=createSprite(400, 200, 50, 50);
  moveRect=createSprite(400,100,70,90);
  shinchan=createSprite(200,200,50,50);
  doraemon=createSprite(100,200,50,50);
}

function draw() {
  background(0);  
  moveRect.x = mouseX;
  moveRect.y = mouseY;
  collision(shinchan,moveRect);
  collision(moveRect,fixedRect);
  collision(doraemon,moveRect);
  drawSprites();
}

function collision (fixedRect,moveRect){
  if(fixedRect.x-moveRect.x <= fixedRect.width/2+moveRect.width/2
    && moveRect.x-fixedRect.x<=fixedRect.width/2+moveRect.width/2
    && moveRect.y-fixedRect.y<=fixedRect.height/2+moveRect.height/2
    && fixedRect.y-moveRect.y <= fixedRect.height/2+moveRect.height/2){
     moveRect.shapeColor="red";
     fixedRect.shapeColor="red";
    }
    else {
      moveRect.shapeColor="green";
      fixedRect.shapeColor="green";
     }
}