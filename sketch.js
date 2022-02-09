var boyImg, boy;
var obstacleImg, obstacle, obstaclesGroup;
var dungeonImg, dungeon, invisibleGround;
var gameState = "play";
var score;


function preload(){
dungeonImg = loadImage("dungeon.png");
boyImg = loadImage("boy.png");
obstacleImg = loadImage("obstacle.png");
}

function setup() {
    createCanvas(600, 540);

/*
    var invisibleGround = createSprite(0,460,400,10);
    invisibleGround.visible = false;
*/
    
    dungeon = createSprite(300,300);
    dungeon.addImage("dungeon", dungeonImg);
    dungeon.velocityX = -4;
    dungeon.scale = 3;

    boy = createSprite(60, 460, 50, 50);
    boy.addImage(boyImg);
    boy.scale = 0.8; 
    boy.setCollider("rectangle", 0, 0, boy.width -100, boy.height-30);
    
    score = 0;

    obstaclesGroup = new Group();
}

function draw() {
    background(200);
    
    text("Score: "+ score, 500,50);
    score = score + Math.round(getFrameRate()/60);

    boy.velocityY += 1;
    //boy.collide(invisibleGround);
    if(keyDown("space")&& boy.y > 350){
        boy.velocityY = -10;
    }

    spawnObstacles();

    /*if(obstacle.isTouching(boy)){
        dungeon.velocityY = 0;
        obstaclesGroup.destroyEach();
    }*/

    
    if (dungeon.x < 30){
        dungeon.x = dungeon.width/2;
    }
    
    drawSprites();
   
}
function spawnObstacles(){
    if(frameCount % 200 === 0){
        obstacle = createSprite(600,520,10,40);
        obstacle.scale = 0.22;
        obstacle.addImage(obstacleImg);
        obstacle.velocityX = -10;
        obstacle.lifetime = 800;
        obstacle.depth = boy.depth;
        boy.depth += 1;
        obstaclesGroup.add(obstacle);
        
        

    }
}