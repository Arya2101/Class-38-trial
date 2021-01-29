var db;
var gameState = 0;
var playerCount;
var f;
var p;
var g;
var allPlayer;
var distance = 0;
var cars;
var car1;
var car2;
var car3;
var car4;

function setup(){
    db = firebase.database(); 
    createCanvas(displayWidth - 20,displayHeight - 30);
    g = new game();
    g.getState();
    g.start();
    
   }

function draw(){
    background("white");
    if(playerCount == 4){
        g.update(1);

}
if(gameState == 1){
  clear();
  g.play();
}

  }


