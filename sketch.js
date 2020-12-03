var mario;
var grounds;
var marios;
var gravity = 0.04;
var gameState = "TEXT";
var lives = 3;
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
    if (!localStorage["score"]){
localStorage["score"] = 0;
}

if (!localStorage["Highest_score"]){
    localStorage["Highest_score"] = 0;
    }

}
}
function draw(){
    background(255);
    marios.collide(grounds);
    drawSprites();
 if (gameState === "TEXT" ){
     if (keyDown("y")){
         gameState = "PLAY";
     }
 }
 if (gameState === "PLAY"){
     time = time + Math.round(getFrameRate()/60);
     grounds.velocityX = -2;
  
    if (grounds.x < -200){
        grounds.x = 600;
    }
    if (keyWentDown("space")&&marios.y > 250){
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
       lives = lives -1;
       obsG.destroyEach();
       if (lives === 0){
           gameState = "LOSE";  
       }
       
    }
 fill("white");
   textFont("Georgia");
   noStroke();
   textSize(20)
    text("Score: "+score,300,50);
   text("LIVES: "+ lives,200,50)
text("Survival Time: "+ time,20,50)
    
    
}
    
}
