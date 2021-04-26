var bomb;
var bowl;
var coin;
var fruit1 ,fruit2 ,fruit3 ,fruit4 ,fruit5;
var bg;
var wall1, wall2, wall3, wall4 ,wall5;
var fruits;
var foodGroup;
var score=0;
var bombGroup;
var coinGroup;
var blast;
var gameover;

function preload() {
  fruit_1 = loadImage("fruit1.png");
  fruit_2 = loadImage("fruit2.png");
  fruit_3 = loadImage("fruit3.png");
  fruit_4 = loadImage("fruit4.png");
  fruit_5 = loadImage("fruit5.png");
  coin_1 = loadImage("coin.png");
  bomb_1 = loadImage("bomb.png");
  bowl_1 = loadImage("bowl.png");
  bg_image = loadImage("backg.jpg");
  blast_image = loadImage("bombblast.png");
  gameover_image = loadImage("gameover.png");
  
}
  
function setup(){
    createCanvas(400,420);

    score=0;

    bg = createSprite(200,220,400,400);
    bg.addImage(bg_image);

    bowl = createSprite(200,350,50,50);
    bowl.addImage(bowl_1);
    bowl.scale=0.2;

    blast = createSprite(200,210,200,210);
    blast.addImage(blast_image);
    blast.scale=0.75;
    blast.visible=false;

    gameover = createSprite(200,210,200,210);
    gameover.addImage(gameover_image);
    gameover.visible=false;

    wall1 = createSprite(2,210,4,420);
    wall2 = createSprite(398,210,4,420);  
    wall3 = createSprite(200,420,400,4);  
    wall4 = createSprite(200,2,400,4);  
    wall5 = createSprite(200,22,400,4);  

    foodGroup=new Group();
    bombGroup=new Group();
    coinGroup=new Group();
  }

function draw(){
  background(255);
  fill("red");
  text("Score: "+ score, 50,20);

  
  
 if(keyDown("right")){
      bowl.x=bowl.x+6}
      
 if(keyDown("left")){
  bowl.x=bowl.x-6}
  
  bowl.collide(wall1);
  bowl.collide(wall2);

  if (foodGroup.isTouching(bowl)){
  foodGroup.destroyEach();
  score = score + 1; 
}
  
if (coinGroup.isTouching(bowl)){
  coinGroup.destroyEach();
  score = score + 10; 
}

if (bombGroup.isTouching(bowl)){
  score = 0; 
  foodGroup.velocityY=0;
  coinGroup.velocityY=0;
  bombGroup.velocityY=0;
  blast.visible=true;
  gameover.visible=true;
 bowl.visible=false;
}

  if(frameCount%40 === 0){
    fruits = createSprite(random(10,390),30, 100, 100);
    fruits.velocityY = 6;
    fruits.scale = random(0.1,0.2);
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: fruits.addImage("fruit1",fruit_1);
        break;
        case 2: fruits.addImage("fruit2",fruit_2);
        break;
        case 3: fruits.addImage("fruit3",fruit_3);
        break;
        case 4: fruits.addImage("fruit4",fruit_4);
        break;
        case 5: fruits.addImage("fruit5",fruit_5);
        break;
    }
    foodGroup.add(fruits);      
    fruits.depth = bowl.depth;
    bowl.depth = bowl.depth + 1;         
 }




  rand = Math.round(random(1,1));
  if(frameCount%200===0){
      coinCreateFrame=frameCount;
      coin = createSprite(random(10,390),30, 10, 10);
      switch(rand){
          case 1: coin.addImage(coin_1);
          break;           
          default: break; }
          coin.scale = 0.1;
          coin.velocityY=+4;
          coinGroup.add(coin);      
  }

  rand = Math.round(random(1,1));
  if(frameCount%200===0){
      bombCreateFrame=frameCount;
      bomb = createSprite(random(10,390),30, 10, 10);
      switch(rand){
          case 1: bomb.addImage(bomb_1);
          break;           
          default: break; }
          bomb.scale = 0.1;
          bomb.velocityY=+4;
          bombGroup.add(bomb);      
  }

  
    drawSprites();
  }   
