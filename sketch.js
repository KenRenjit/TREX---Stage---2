var trex, trex_running, edges;
var groundImage;
var invis_line;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  

  ground = createSprite(200,180,400,20)
  ground.x = ground.width/2
  ground.addImage(groundImage);

  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  invis_line = createSprite( 200,190,400,10);
  invis_line.visible = false;
}


function draw(){
  //set background color 
  background("white");

  console.log(trex.y)
  
  ground.velocityX = -2;

  if (ground.x<0){
    ground.x = ground.width/2;
  }

  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y>=160){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invis_line);
  drawSprites();
}