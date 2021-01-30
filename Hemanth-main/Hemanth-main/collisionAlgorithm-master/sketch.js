var fixedRect, movingRect;
var rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(800,300,80,30);
  rect1.shapeColor = "purple";

  rect2 = createSprite(200,300,80,30);
  rect2.shapeColor = "yellow";

  rect3 = createSprite(600,600,80,30);
  rect3.shapeColor = "pink";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 //Master
  if(isTouching(movingRect,rect2))
{
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";
}

else{
  movingRect.shapeColor = "green";
  rect2.shapeColor = "yellow";

}


  drawSprites();
}
//servant
