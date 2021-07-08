var path,paths;
var boy,boyani;
var edges;

function preload(){
  paths=loadImage("path.png");
  boy=loadAnimation("Runner-1.png","Runner-2.png");
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  edges= createEdgeSprites();
  path=createSprite(200,200);
  path.addImage("path.png",paths);
  path.velocityY=4;
  path.scale=1.2;
boy=createSprite(200,200,50,50);
boy.addAnimation("Runner-1.png","Runner-2.png");
boy.scale=0.05;

}

function draw() {
  background(0);
drawSprites();
if (path.y>400){
  path.y=height/1.6;
}
boy.x=mouseX;
}
