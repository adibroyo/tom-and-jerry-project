var tom,jerry,bgImg; 
var tomImg1,tomImg2,tomImg3,jerryimg1,jerryImg2,jerryImg3,bg;
function preload() { 
    //load the images here
 bgImg=loadImage("images/garden.png")
tomImg1=loadAnimation("images/cat1.png")
jerryimg1=loadAnimation("images/mouse1.png")
tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
tomImg3=loadAnimation("images/cat4.png")
jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
jerryImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400)
    bg.scale=1.5
    bg.addImage(bgImg)
    tom=createSprite(870,600,10,10)
    tom.addAnimation("tomsleeping",tomImg1)
    tom.scale=0.2;
    jerry=createSprite(200,600,10,10)
    jerry.scale=0.1;
    jerry.addAnimation("jerrystanding",jerryimg1)
   
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < tom.width/2-jerry.width/2){
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3); 
         tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
         jerry.addAnimation("jerryLastImage", jerryImg3); 
         jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");



    }
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
    tom.velocityX = -5;
     tom.addAnimation("tomRunning", tomImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing", jerryImg2);  
      jerry.changeAnimation("jerryTeasing");

  }

}