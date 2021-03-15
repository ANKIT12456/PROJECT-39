class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('/').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    plane1=createSprite(300,400);
    plane1.addImage(plane1img);
    plane1.scale=0.5;
    plane2=createSprite(550,400);
    plane2.addImage(plane2img);
    plane2.scale=0.5;
    plane3=createSprite(800,400);
    plane3.addImage(plane3img);
    plane3.scale=0.5;
    plane4=createSprite(1050,400);
    plane4.addImage(plane4img);
    plane4.scale=0.5;
    planedata=[plane1,plane2,plane3,plane4];
  }

  play(){
    form.hide();
    textSize(25);
    text("GAME START",200,100);

    Player.getPlayersInfo();

    if(allplayers !== undefined){

      background("black");
      image(bg,0,-displayHeight*4,2000,displayHeight*5);
      //var player_pos=130;
      var index=0,x=170,y;
      for(var i in allplayers){
        index++;
        x+=200;
        y=displayHeight-allplayers[i].distance;
        planedata[index-1].x=x;
        planedata[index-1].y=y;
        if(index === player.index){
          planedata[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=planedata[index-1].y;
        }
      }
    }
    if(keyIsDown(UP_ARROW) && player.index!==null){
      player.distance+=25;
      player.update(player.distance);
    }
    drawSprites();
  }
}
