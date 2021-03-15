var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allplayers,distance=0;

var plane1,plane2,plane3,plane4,planedata;
var plane1img,plane2img,plane3img,plane4img,bg;


function preload(){
  plane1img=loadImage("sprite_0.png");
  plane2img=loadImage("sprite_89.png");
  plane3img=loadImage("12315.png");
  plane4img=loadImage("sprite_5.png");
  bg=loadImage("bg.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight-10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(player.distance>=3800){
    game.update(2);
  }
  
  if(gameState===2){
    console.log("GAME  OVER  !!");
  }

}
