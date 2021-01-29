class game {
    constructor(){}
  
    getState(){
      var gameStateRef  = db.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      db.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        p = new player();
        var playerCountRef = await db.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          p.getCount();
        }
        f = new form()
        f.display();
      }
      car1 = createSprite(100,200);
      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      car4 = createSprite(700,200);
      cars = [car1, car2, car3, car4];
    }
  
    play(){
     f.hide();
      textSize(30);
      text("Game Start", 120, 100)
      player.getPlayerInfo();
  
      if(allPlayer !== undefined){
        var index = 0;

        var x = 0;
        var y;
        
        for(var plr in allPlayer){
          index = index + 1;

          x = x+200;
          y = displayHeight - allPlayer[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
          
          if(index == p.index){
            cars[index - 1].shapeColor = red;
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
        }
      }
  
      if(keyDown(UP_ARROW) && p.index !== null){
        p.distance +=50
        p.update();
      }
    }
  }