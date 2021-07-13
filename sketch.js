var db;
var form,player,game,allPlayers;
var gamestate=0 ;
var playercount=0;
function setup(){
    createCanvas(500,500);
    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playercount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }
    drawSprites();
}

