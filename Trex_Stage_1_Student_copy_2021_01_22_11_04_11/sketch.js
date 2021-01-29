var trex, trexrunning, trexcollided,ground,groundimage,invisibleground,score,clouds,cloudimage,cloudgroup,obstacles,ob1,ob2,ob3,ob4,ob5,ob6,obgroup

function preload(){
trexrunning=loadAnimation("trex1.png","trex3.png","trex4.png")
trexcollided=loadImage("trex_collided.png")
groundimage=loadImage("ground2.png")
cloudimage=loadImage("cloud.png")
ob1=loadImage("obstacle1.png")
ob2=loadImage("obstacle2.png")
ob3=loadImage("obstacle3.png")
ob4=loadImage("obstacle4.png")
ob5=loadImage("obstacle5.png")
ob6=loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);
  trex=createSprite(40,150,10,10)
  trex.addAnimation("trex visual",trexrunning)
  trex.scale=0.5;
  ground=createSprite(300,178,600,10)
  ground.addImage(groundimage);
  ground.velocityX=-10;
  invisibleground=createSprite(300,185,600,10)
  invisibleground.visible=false;
  score=0;
  cloudgroup=createGroup()
  obgroup=createGroup()
 
}

function draw() {
  background("white");
  trex.collide(invisibleground);
  if(ground.x<0){
  ground.x=300;
  }
  if(keyDown("space")&&trex.y>156){
  trex.velocityY=-10;
  }
  //add gravity
  trex.velocityY=trex.velocityY+0.8;
  //displayscore
  text("Score:"+score,470,30)
  score=score+2
  cloud();
  obstacle();
  
  
  drawSprites();
}

function cloud(){
if(frameCount%60==0){
clouds=createSprite(600,100,10,10);
clouds.addImage(cloudimage);
clouds.velocityX=-10;
clouds.scale=0.5;
clouds.y=random(50,100);
clouds.lifetime=60;
trex.depth=cloud.depth+1;
cloudgroup.add(clouds);
}
}

 function obstacle(){
if(frameCount%80==0){
obstacles=createSprite(600,160,10,10);
var r=Math.round(random (1,6))
switch(r){
  case 1:obstacles.addImage(ob1)
  break
   case 2:obstacles.addImage(ob2)
  break
   case 3:obstacles.addImage(ob3)
  break
   case 4:obstacles.addImage(ob4)
  break
   case 5:obstacles.addImage(ob5)
  break
  case 6:obstacles.addImage(ob6)
  break
  default:break
}
obstacles.velocityX=-10;
obstacles.scale=0.5;
obstacles.lifetime=80;
obgroup.add(obstacles)
}
}




