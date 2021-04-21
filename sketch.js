var cat , mouse ;
var backgroundimg;
function preload() {
    //load the images here
    backgroundimg = loadImage("images/garden.png");
    tomImg1= loadImage("images/tomOne.png"); 
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png"); 
    tomImg3= loadImage("images/tomFour.png"); 
    jerryImg1=loadImage("images/jerryOne.png");
 jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
      jerryImg3=loadImage("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
   
    //create tom and jerry sprites here
    mouse = createSprite(150,660,20,20);
    mouse.addImage(jerryImg1);
    mouse.scale = 0.2;
    cat = createSprite(690,680,50,50);
    cat.addImage(tomImg1);
    cat.scale = 0.2;
}

function draw() {
    background(backgroundimg);
    if (cat.X  -  mouse.X < (cat.width - mouse.width) /2 ) {
      //Write condition here to evalute if tom and jerry collide
        cat.velocityX = 0;
cat.addAnimation("catLastImage",tomImg3);
cat.changeAnimation("catLastImage");
    }
    
  
    mouse.display();
    cat.display();
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX= -5;
    cat.addAnimation("catRunning",tomImg2);
    cat.changeAnimation("catRunning");
    
}

}
