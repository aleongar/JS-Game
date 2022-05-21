let spr
let floor
let enemy
let canJump
let absorb
let facingRight = true
let canMove = true

function setup() {
  createCanvas(600, 600)
  spr = createSprite(width/2, height/2, 40, 40)
  spr.shapeColor = color(255)
  
  floor = createSprite(width/2, height +80, width, height)
  enemy = createSprite(width/2 + 10, height/2 + 10, 40, 40)
  enemy.shapeColor = color(36)

}

function draw() {
  background(50)
  drawSprites()
  spr.velocity.y += 1
  enemy.velocity.y += 1
  if(enemy.collide(floor)){
    enemy.velocity.y = 0
  }

  if (spr.collide(floor)) {
		spr.velocity.y = 0
    canJump = true
	}else{
    canJump = false
  }
  if(keyWentDown('x')){
    facingRight ? absorb = createSprite(spr.position.x + 30, spr.position.y, 50, 20) : absorb = createSprite(spr.position.x + -30, spr.position.y, 50, 20)
    absorb.shapeColor = color(125)
    spr.velocity.x = 0
    canMove = false
    canJump = false
  }
  if(keyWentUp('x')){
    absorb.remove()
    canMove = true
    canJump = true
  }

  if(keyWentDown('z') && canJump){
    spr.velocity.y = -15
  }
   
  
  if(keyWentDown(LEFT_ARROW) && canMove){
    spr.velocity.x = -4
    facingRight = false
  }
  if(keyWentDown(RIGHT_ARROW) && canMove){
    spr.velocity.x = 4
    facingRight = true
  }
  if(keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)){
    spr.velocity.x = 0
  }
}



// sprites on the move
/*let spr;

function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/3, 40, 40);
  spr.shapeColor = color(255);
}

function draw() {
  background(50);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text("use arrow keys, or SPACE to stop", width/2, height*0.67);
  drawSprites();
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    spr.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    spr.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    spr.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    spr.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    spr.setSpeed(0, 0);
  }
  return false;
}
*/

/*
let spr;

function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
  spr.velocity.y = 0;
}

function draw() {
  background(50);
  if (spr.position.y >= height) {
    spr.velocity.y *= -1;
    // set to height to prevent "tunneling"
    spr.position.y = height;
  }
  // constant downward speed
  // (i.e., gravity)
  spr.addSpeed(0.25, 90);
  drawSprites();
}

function mousePressed() {
  spr.position.y = mouseY;
}
*/

// following the mouse
/*
let spr;

function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
}

function draw() {
  background(50);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
  drawSprites();
}
*/

/*
let spr;

function setup() {
  createCanvas(400, 400);
  spr = createSprite(
    width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
}

function draw() {
  background(50);
  // a bit of lag
  spr.velocity.x = (mouseX - spr.position.x) * 0.2;
  spr.velocity.y = (mouseY - spr.position.y) * 0.2;
  drawSprites();
}
*/

/*
let spr;

function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
  spr.rotateToDirection = true;
  spr.maxSpeed = 2;
  spr.friction = 0.05;
}

function draw() {
  background(50);
  if (mouseIsPressed) {
    spr.attractionPoint(0.5, mouseX, mouseY);
  }
  drawSprites();
}
*/

// mouse events
/*
let spr1;
let spr2;

function setup() {
  createCanvas(400, 400);

  spr1 = createSprite(width/2, height/3, 100, 100);
  spr1.shapeColor = color(255);
  spr1.onMouseOver = function() {
    this.scale = 2;
  }
  spr1.onMouseOut = function() {
    this.scale = 1;
  }

  spr2 = createSprite(width/2, height*0.67, 100, 100);
  spr2.shapeColor = color(0);
  spr2.onMousePressed = function() {
    this.shapeColor = color(128);
  }
  spr2.onMouseReleased = function() {
    this.shapeColor = color(0);
  }
}

function draw() {
  background(50);
  drawSprites();
}
*/

/*
let spr1;
let spr2;

function setup() {
  createCanvas(400, 400);
  spr1 = createSprite(width/2, height/3, 100, 100);
  spr1.shapeColor = color(255);
  spr1.mouseActive = true;
  spr2 = createSprite(width/2, height*0.67, 100, 100);
  spr2.shapeColor = color(0);
  spr2.mouseActive = true;
}

function draw() {
  background(50);
  if (spr1.mouseIsOver) {
    background(100);
  }
  if (spr2.mouseIsOver && mouseIsPressed) {
    spr2.rotation += 4;
  }
  drawSprites();
}
*/

// multiple sprites
/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  drawSprites();
}

function mousePressed() {
  let spr = createSprite(width/2, height/2, random(10, 50), random(10, 50));
  spr.shapeColor = color(255);
  spr.velocity.y = random(3);
  spr.velocity.x = random(-3, 3);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
  spr.friction = 0.005;
  spr.life = 120;
}
*/

/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  for (let i = 0; i < allSprites.length; i++) {
    // gravity
    allSprites[i].addSpeed(0.1, 90);
    if (allSprites[i].position.y > height) {
      allSprites[i].velocity.y *= -1;
    }
    // any code that removes sprites should be
    // the *last* thing in the loop!
    if (allSprites[i].position.x > width ||
        allSprites[i].position.x < 0) {
      allSprites[i].remove();
    }
  }
  fill(255);
  textAlign(RIGHT, TOP);
  text("sprite count: " + allSprites.length, width-10, 10);
  drawSprites();
}

function mousePressed() {
  let spr = createSprite(width/2, height/2, random(10, 50), random(10, 50));
  spr.shapeColor = color(255);
  spr.velocity.y = random(3);
  spr.velocity.x = random(-3, 3);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
}
*/

// events on multiple sprites
/*
let score = 0;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    let spr = createSprite(random(width), random(height), random(10, 50), random(10, 50));
    spr.shapeColor = random(255);
    spr.onMouseOver = removeAndScore;
  }
}

function draw() {
  background(50);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (score < 10) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}

function removeAndScore() {
  score += 1;
  this.remove();
}
*/

// sprite groups
/*
let clouds;
let birds;

function setup() {
  createCanvas(400, 400);
  clouds = new Group();
  birds = new Group();

  for (let i = 0; i < 10; i++) {
    let c = createSprite(random(width), random(height), random(25, 100), random(25, 100));
    c.shapeColor = color(random(200, 255));
    clouds.add(c);
  }
  for (let i = 0; i < 5; i++) {
    let b = createSprite(random(width), random(height), random(10, 50), random(5, 25));
    b.shapeColor = color(255, 0, random(255));
    b.friction = random(0.01, 0.05);
    b.maxSpeed = random(1, 4);
    b.rotateToDirection = true;
    birds.add(b);
  }
}

function draw() {
  background(0, 150, 240);
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].position.x += clouds[i].width * 0.01;
    if (clouds[i].position.x > width) {
      clouds[i].position.x = 0;
    }
  }
  for (let i = 0; i < birds.length; i++) {
    birds[i].attractionPoint(0.2, mouseX, mouseY);
  }
  drawSprites();
}
*/

// collisions
/*
let spr1;
let spr2;

function setup() {
  createCanvas(400, 400);
  spr1 = createSprite(width/2, height/2, 150, 150);
  spr1.shapeColor = color(0);
  spr2 = createSprite(0, 0, 50, 50);
  spr2.shapeColor = color(128);
}

function draw() {
  background(50);
  spr2.velocity.x = (mouseX - spr2.position.x) * 0.2;
  spr2.velocity.y = (mouseY - spr2.position.y) * 0.2;
  if (spr2.overlap(spr1)) {
    spr1.shapeColor = color(255);
  }
  else {
    spr1.shapeColor = color(0);
  }
  drawSprites();
}
*/

/*
let spr1;
let spr2;

function setup() {
  createCanvas(400, 400);
  spr1 = createSprite(width/2, height/2, 100, 100);
  spr1.shapeColor = color(0);
  spr2 = createSprite(0, 0, 50, 50);
  spr2.shapeColor = color(128);
}
function draw() {
  background(50);
  spr2.velocity.x = (mouseX - spr2.position.x) * 0.2;
  spr2.velocity.y = (mouseY - spr2.position.y) * 0.2;
  spr2.collide(spr1);
  drawSprites();
}
*/

/*
let spr1;
let spr2;

function setup() {
  createCanvas(400, 400);
  spr1 = createSprite(width/2, height/2, 100, 100);
  spr1.shapeColor = color(0);
  spr2 = createSprite(0, 0, 50, 50);
  spr2.shapeColor = color(128);
}

function draw() {
  background(50);
  spr2.velocity.x = (mouseX - spr2.position.x) * 0.2;
  spr2.velocity.y = (mouseY - spr2.position.y) * 0.2;
  spr2.displace(spr1);
  drawSprites();
}
*/

// group collisions
/*
let walls;
let boxes;
let player;

function setup() {
  createCanvas(400, 400);
  walls = new Group();
  boxes = new Group();
  player = createSprite(100, 100, 40, 40);
  player.shapeColor = color(255);
  for (let i = 0; i < 5; i++) {
    let w = createSprite(random(125, width-125), (height/5)*i, random(10, 100), random(10, 100));
    w.shapeColor = color(0);
    walls.add(w);
  }
  for (let i = 0; i < 4; i++) {
    let b = createSprite(random(50, 100), random(100, height-100), 25, 25);
    b.shapeColor = color(255, 0, 0);
    boxes.add(b);
  }
}

function draw() {
  background(50);
  player.velocity.x = (mouseX - player.position.x) * 0.1;
  player.velocity.y = (mouseY - player.position.y) * 0.1;
  player.collide(walls);
  player.displace(boxes);
  boxes.collide(walls);
  boxes.displace(boxes);
  drawSprites();
}
*/

// collision callbacks
/*
let coins;
let player;
let score = 0;

function setup() {
  createCanvas(400, 400);
  coins = new Group();
  for (let i = 0; i < 10; i++) {
    let c = createSprite(random(100, width-100), random(100, height-100), 10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);
}

function draw() {
  background(50);
  player.velocity.x = (mouseX - player.position.x) * 0.1;
  player.velocity.y = (mouseY - player.position.y) * 0.1;
  player.overlap(coins, getCoin);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}

function getCoin(player, coin) {
  coin.remove();
  score += 1;
}
*/

// images and animations
/*
let joamba;
let joambaImg;

function preload() {
  joambaImg = loadImage('images/FOTO JOAMBA.jpg');
}

function setup() {
  createCanvas(400, 400);
  joamba = createSprite(width/2, height/2);
  joamba.addImage(joambaImg);
}

function draw() {
  background(255);
  joamba.position.x = mouseX;
  joamba.position.y = mouseY;
  if (mouseIsPressed) {
    joamba.rotation += 2;
  }
  drawSprites();
}
*/

// animations´
/*
let spr;
let anim;

function preload() {
  anim = loadAnimation("images/asterisk_normal0001.png",
    "images/asterisk_normal0002.png",
    "images/asterisk_normal0003.png");

}

function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/2);
  spr.addAnimation("default", anim);
}
function draw() {
  background(255);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
  if (mouseIsPressed) {
    spr.rotation -= 2;
  }
  drawSprites();
}
*/
