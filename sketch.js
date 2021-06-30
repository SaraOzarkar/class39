var gameState=0;
var playerCount;

var form,game,player

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

 form = new Form()
 form.display()

 game=new Game()
 game=gameState()
 game.display()
  
}

function draw(){
  background("white");
  
    
 
}

