var cat , mouse ;
var backgroundimg;
function preload() {
    //load the images here
    backgroundimg = loadAnimation("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png"); 
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png"); 
    tomImg3= loadAnimation("images/tomFour.png"); 
    jerryImg1=loadAnimation("images/jerryOne.png");
 jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
      jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
   
    //create tom and jerry sprites here
    mouse = createSprite(200,700,20,20);
    cat = createSprite(500,700,50,50);
}

function draw() {
    //background(backgroundimg);
    
    //Write condition here to evalute if tom and jerry collide
    drawSprites();
    mouse.display();
    cat.display();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX= 
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    
}

}
