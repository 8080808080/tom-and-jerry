var backgroundImage
var tom, jerry
var tomImg1, jerryImg1
var tomImg2, jerryImg2
var tom3, jerry3

function preload() {
    //load the images here
    backgroundImage=loadImage("images/garden.png")

    tomImg1=loadAnimation("images/cat1.png")
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
    tom3=loadAnimation("images/cat4.png")
    jerryImg1=loadAnimation("images/mouse1.png")
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(770,700,20,20)
tom.addAnimation("tomSitting",tomImg1)
tom.scale=0.2

jerry=createSprite(250,700,10,10)
jerry.addAnimation("jerryEating",jerryImg1)
jerry.scale=0.1

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide



if ((tom.x-jerry.x)<(tom.width - jerry.width)/2){
    tom.velocityX=0 

    tom.addAnimation("happy",tom3)
    tom.changeAnimation("happy")
    jerry.addAnimation("happy1",jerry3)
    jerry.changeAnimation("happy1")
   


}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("LEFT_ARROW")){
jerry.addAnimation("tease",jerryImg2)
jerry.changeAnimation("tease")


tom.addAnimation("move",tomImg2)
tom.changeAnimation("move")

tom.velocityX=-1
}





}
