var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10;
var maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,maze19,maze20;
var maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28,maze29,maze30;
var maze31,maze32,maze33,maze34,maze35,maze36,maze37,maze38,maze39,maze40;
var maze41,maze42,maze43,maze44,maze45,maze46,maze47,maze48,maze49,maze50;
var maze51,maze52,maze53,maze54,maze55,maze56,maze57,maze58,maze59,maze60;
var maze61,maze62,maze63,maze64,maze65,maze66,maze67,maze68,maze69,maze70,maze71,maze72;

var player1,player1Img;
var player2, player2Img;
var mazeGroup;
var bulletGroup1, bulletGroup2;
var life1 = 3,life2 = 3;

function preload()
{
  player1Img=loadImage("images/player1.png");
  player2Img=loadImage("images/player2.png");
}

function setup() 
{
  createCanvas(1100, 700);

  mazeGroup = new Group();
  bulletGroup1 = new Group();
  bulletGroup2 = new Group();

  player1 = new Player1(105,125,30,30);
  player2 = new Player2(890,555,30,30);

  maze1 = new Maze(500,80,800,10);
  mazeGroup.add(maze1.rect);

  maze2 = new Maze(500,600,800,10);
  mazeGroup.add(maze2.rect);

  maze3 = new Maze(105,380,10,430);
  mazeGroup.add(maze3.rect);

  maze4 = new Maze(895,300,10,430);
  mazeGroup.add(maze4.rect);

  maze5 = new Maze(180,140,50,10);
  mazeGroup.add(maze5.rect);

  maze6 = new Maze(200,180,10,72);
  mazeGroup.add(maze6.rect);

  maze7 = new Maze(200,220,100,10);
  mazeGroup.add(maze7.rect);

  maze8 = new Maze(155,243,10,50);
  mazeGroup.add(maze8.rect);

  maze9 = new Maze(130,263,50,10);
  mazeGroup.add(maze9.rect);

  maze10 = new Maze(280,125,10,90);
  mazeGroup.add(maze10.rect);

  maze11 = new Maze(300,173,50,10);
  mazeGroup.add(maze11.rect);

  maze12 = new Maze(370,125,100,10);
  mazeGroup.add(maze12.rect);

  maze13 = new Maze(365,170,10,100);
  mazeGroup.add(maze13.rect);

  maze14 = new Maze(365,220,100,10);
  mazeGroup.add(maze14.rect);

  maze15 = new Maze(420,240,10,50);
  mazeGroup.add(maze15.rect);

  maze16 = new Maze(310,265,10,100);
  mazeGroup.add(maze16.rect);

  maze17 = new Maze(260,270,100,10);
  mazeGroup.add(maze17.rect);

  maze18 = new Maze(205,315,10,100);
  mazeGroup.add(maze18.rect);

  maze19 = new Maze(425,105,10,50);
  mazeGroup.add(maze19.rect);

  maze20 = new Maze(180,315,50,10);
  mazeGroup.add(maze20.rect);

  maze21 = new Maze(135,380,50,10);
  mazeGroup.add(maze21.rect);

  maze22 = new Maze(500,130,50,10);
  mazeGroup.add(maze22.rect);

  maze23 = new Maze(525,130,10,100);
  mazeGroup.add(maze23.rect);

  maze24 = new Maze(550,175,50,10);
  mazeGroup.add(maze24.rect);

  maze25 = new Maze(580,195,10,50);
  mazeGroup.add(maze25.rect);

  maze26 = new Maze(450,175,50,10);
  mazeGroup.add(maze26.rect);

  maze27 = new Maze(475,195,10,50);
  mazeGroup.add(maze27.rect);

  maze28 = new Maze(495,225,50,10);
  mazeGroup.add(maze28.rect);

  maze29 = new Maze(525,295,10,150);
  mazeGroup.add(maze29.rect); 

  maze30 = new Maze(500,275,50,10);
  mazeGroup.add(maze30.rect);

  maze31 = new Maze(495,365,50,10);
  mazeGroup.add(maze31.rect);

  maze32 = new Maze(465,345,10,50);
  mazeGroup.add(maze32.rect);

  maze33 = new Maze(410,325,100,10);
  mazeGroup.add(maze33.rect);

  maze34 = new Maze(360,325,10,100);
  mazeGroup.add(maze34.rect);

  maze35 = new Maze(330,370,50,10);
  mazeGroup.add(maze35.rect);
  
  maze36 = new Maze(845,450,100,10);
  mazeGroup.add(maze36.rect);

  maze37 = new Maze(865,330,50,10);
  mazeGroup.add(maze37.rect);

  maze38 = new Maze(835,350,10,50);
  mazeGroup.add(maze38.rect);

  maze39 = new Maze(265,410,10,50);
  mazeGroup.add(maze39.rect);

  maze40 = new Maze(630,105,10,50);
  mazeGroup.add(maze40.rect);

  maze41 = new Maze(670,160,50,10);
  mazeGroup.add(maze41.rect);

  maze42 = new Maze(700,180,10,50);
  mazeGroup.add(maze42.rect);

  maze43 = new Maze(720,210,50,10);
  mazeGroup.add(maze43.rect);

  maze44 = new Maze(750,230,10,50);
  mazeGroup.add(maze44.rect);

  maze45 = new Maze(795,260,100,10);
  mazeGroup.add(maze45.rect);

  maze46 = new Maze(800,285,10,50);
  mazeGroup.add(maze46.rect);

  maze47 = new Maze(745,305,100,10);
  mazeGroup.add(maze47.rect);

  maze48 = new Maze(690,285,10,50);
  mazeGroup.add(maze48.rect);

  maze49 = new Maze(740,330,10,50);
  mazeGroup.add(maze49.rect);

  maze50 = new Maze(550,330,50,10);
  mazeGroup.add(maze50.rect);

  maze51 = new Maze(630,285,10,100);
  mazeGroup.add(maze51.rect);

  maze52 = new Maze(800,130,100,10);
  mazeGroup.add(maze52.rect);

  maze53 = new Maze(800,180,10,100);
  mazeGroup.add(maze53.rect);

  maze54 = new Maze(165,400,10,50);
  mazeGroup.add(maze54.rect);

  maze55 = new Maze(210,430,100,10);
  mazeGroup.add(maze55.rect);

  maze56 = new Maze(215,480,10,100);
  mazeGroup.add(maze56.rect);

  maze57 = new Maze(260,535,100,10);
  mazeGroup.add(maze57.rect);

  maze58 = new Maze(315,515,10,50);
  mazeGroup.add(maze58.rect);

  maze59 = new Maze(345,495,50,10);
  mazeGroup.add(maze59.rect);

  maze60 = new Maze(375,475,10,50);
  mazeGroup.add(maze60.rect);

  maze61 = new Maze(395,450,50,10);
  mazeGroup.add(maze61.rect);

  maze62 = new Maze(425,520,10,150);
  mazeGroup.add(maze62.rect);

  maze63 = new Maze(490,460,10,100);
  mazeGroup.add(maze63.rect);

  maze64 = new Maze(515,505,50,10);
  mazeGroup.add(maze64.rect);

  maze65 = new Maze(540,505,10,50);
  mazeGroup.add(maze65.rect);

  maze66 = new Maze(585,480,100,10);
  mazeGroup.add(maze66.rect);

  maze67 = new Maze(580,535,10,120);
  mazeGroup.add(maze67.rect);

  maze68 = new Maze(805,370,50,10);
  mazeGroup.add(maze68.rect);

  maze69 = new Maze(675,395,10,100);
  mazeGroup.add(maze69.rect);

  maze70 = new Maze(630,530,100,10);
  mazeGroup.add(maze70.rect);

  maze71 = new Maze(740,570,10,50);
  mazeGroup.add(maze71.rect);

  maze72 = new Maze(795,550,100,10);
  mazeGroup.add(maze72.rect);
}

function draw() 
{
  background('white');  

  text(mouseX + "," + mouseY,50,50);

  textSize(40);
  fill("red");
  text("GAME ARENA",380,50);

  textSize(20);
  fill("black");
  text("PLAYER 1:" + life1,910,50);
  text("PLAYER 2:" + life2,910,100);

  player1.rect.collide(mazeGroup);
  player2.rect.collide(mazeGroup);

  if(keyDown("up"))
  {
    player2.moveUp();
  }
  if(keyDown("down"))
  {
    player2.moveDown();
  }
  if(keyDown("left"))
  {
    player2.moveLeft();
  }
  if(keyDown("right"))
  {
    player2.moveRight();
  }

  if(keyDown("enter"))
  {
    player1.releaseBullets();
  }

  if(keyDown("space"))
  {
   player2.releaseBullets();
  }
  if(keyDown("W"))
  {
    player1.moveUp();
  }
  if(keyDown("S"))
  {
    player1.moveDown();
  }
  if(keyDown("A"))
  {
    player1.moveLeft();
  }
  if(keyDown("D"))
  {
    player1.moveRight();
  }

  if(bulletGroup1.isTouching(player2.rect))
  {
    life2 = life2-1;
    bulletGroup1.destroyEach();
  }
  if(bulletGroup2.isTouching(player1.rect))
  {
    life1 = life1-1;
    bulletGroup2.destroyEach();
  }

  drawSprites();
}

