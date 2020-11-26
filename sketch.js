var mario;
var grounds;
var marios;
var gravity = 0.04;
var gameState = "TEXT";
function preload(){
    ground = loadImage("ground2.png");
    backer =loadImage("bg.png");
    bricks = loadImage("brick.png");
    mario = loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
    obstacle = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png");


}
function setup(){   
    createCanvas(400,400);
    var backers = createSprite(200,210);
    backers.addImage(backer);
    marios = createSprite(20,320,10,10);
    marios.addAnimation("running",mario);
    grounds = createSprite(600,380,200,200);
    grounds.addImage(ground);
    obsG = new Group();
    
}
function draw(){
    background(255);
    marios.collide(grounds);
 if (gameState === "TEXT" ){
     if (keyDown("y")){
         gameState = "PLAY";
     }
 }
 if (gameState === "PLAY"){
    grounds.velocityX = -2;
  
    if (grounds.x < -200){
        grounds.x = 600;
    }
    if (keyWentDown("space")){
        marios.velocityY = -2;
    }
    marios.velocityY += gravity;
   if (frameCount % 200 === 0){
       var obs = createSprite(400,320,10,10);
       obs.addAnimation("run",obstacle);
       obs.velocityX = -2;
       obs.scale = 0.8;
       obsG.add(obs);
   }
   if (obsG.isTouching(marios)){
       gameState = "LOSE";  
    }

    drawSprites();
    
}
}
