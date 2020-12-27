var PLAY = 1;
var END = 0;
gameState= PLAY;


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  PLAY =1;
  GameState = PLAY;
  END = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
   monkey = createSprite(70,370,50,50);
   monkey.addAnimation("monkey", monkey_running);
   monkey.scale = 0.1;
  
  ground = createSprite(250,377,1000,10);
  ground.x=ground.width/2;
  
  invisible = createSprite(250,379,1000,10);
  invisible.x = ground.width/2;
  
}


function draw() {
 background("white");
  
  if(GameState === PLAY){
    if(ground.x < 0){
      ground.x=ground.width/2
    } 
    if(invisible.x <0){
      invisible.x=invisible.width/2;
    }
    invisible.velocityX=-2;
    
  if(keyDown("space")&& monkey.isTouching(ground)){
    monkey.velocityY= -20;
     
}
       
  }
  
}






