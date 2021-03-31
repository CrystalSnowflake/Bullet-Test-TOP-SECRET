/* This programme's objective is to test the lethality of certain accidents using a formula.
If there is no damage the sprite will turn green.
If there is moderate damage, it will turn yellow.
If the accident is lethal, it will turn red.*/

var bullet, wall, gun;
var wallImage, damage, gunImage;
var speed, weight, thickness;
var  y;

function preload() {
  bulletImage = loadImage("bullet 2.png");
  gunImage = loadImage("gun 2.png");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);

  //wall
  wall = createSprite(windowWidth - 80, 290, thickness, windowHeight);
  wall.shapeColor = 'pink';

  //test bullet
  bullet = createSprite(windowWidth/10, windowHeight/2.12, windowWidth/3, windowHeight/6);
  bullet.addImage(bulletImage);
  bullet.scale = 0.1;

  //gun
  gun = createSprite(windowWidth/20, windowHeight/2, 10, 10);
  gun.addImage(gunImage);
  gun.scale = 0.3;

  //properties
  weight = random(400, 1500);
  speed = random(50, 90);
  thickness = random(20, 83);

  
}

function draw() {
  background(rgb(112, 0, 52));

  //formula
  damage = (0.5 * weight * speed * speed)/22500;

  //properties of  bullet
  bullet.velocityX = speed;
  
  

  militaryTest();

  drawSprites();
}


function militaryTest() {
  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    bullet.velocityY = 0;
    if(damage < 100 || damage === 100) {
      wall.shapeColor = 'green';
    }
    if(damage > 100) {
      wall.shapeColor = 'red';
    }
}
}

