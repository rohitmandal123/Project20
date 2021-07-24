function setup() {
  createCanvas(1600,400);
  

  speed = random(55,90);
  weight = random(400,1500);

  car=createSprite(50,200,50,50);
  car.shapeColor=color(255);

  wall=createSprite(1300,200,30,200);
  wall.shapeColor=color("white");

  car.velocityX=speed;

 
}

function draw() {
  background(0); 
   if(wall.x-car.x<car.width/2+wall.width/2){
   }

  if(car.isTouching(wall)){
  var deformation=0.5*weight*speed*speed/22509
  if(deformation>180){
    car.shapeColor=color("red")
  }

  if(deformation<180 && deformation>100){
    car.shapeColor=color("green")
  }

  if(deformation<100){
    car.shapeColor=color("yellow")
  }
  car.velocity=0
}
  drawSprites();

  
}