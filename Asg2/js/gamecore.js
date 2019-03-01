var game = {
    state: "non-start",
    obstacle: Math.floor(1+Math.random()*5),
    
};

var overlay = {
    counter: -1,
    title: "foo",
    subtitle: "bar",
};
var level = {
    easy_r: 5,
    easy_c: 11,
    hard_r: 7,
    hard_c: 15,
    row: 0,
    col: 0,

}


var player = {
	x:1280/2,    //Player Start Position
	y:720-90,
	width: 60,
	height: 90,
	counter: 0,
    chance: 2,
    live: 2, //3 lives
    delay: 0,

};
var keyboard = { };
var inputs=[];
var playerBullets = [];
var enemies = [];
var enemyBullets = [];
var obstacles = [];
var obstacle_width = 120;
var obstacle_height = 60;
// =========== reset ==============
function toDo(){
    StopTimer();
    resetGame();
}
function resetGame(){
    var playerLives = document.getElementById("credit").value;
    player.state = "alive";
    player.chance = playerLives-1;
    
    game.forward = 15;
    game.obstacle = Math.floor(1+Math.random()*5);
    game.state = "start";
    resetScore();
    RunTimer();
}


// =========== game   ============
function updateGame() {
    
    if(game.state == "non-start") {

        if(keyboard[49]){
            game.state = "ready-1";
            level.row = level.easy_r;
            level.col = level.easy_c;
            row = level.easy_r;
            cow = level.easy_c;
            elv();
            inputSetting();
        }
        if(keyboard[50]){
            game.state = "ready-2";
            level.row = level.hard_r;
            level.col = level.hard_c;
            row = level.hard_r;
            col = level.hard_c;
            hlv();
            inputSetting();
        }
        
    }

    if (game.state=="ready-1"&&keyboard[89]) {

        resetGame();
        overlay.counter = -1;

    }
    if (game.state=="ready-1"&&keyboard[66]) {
        game.state = "non-start";

    }

    if(game.state=="ready-2"&&keyboard[89]){
        
        resetGame();
        overlay.counter = -1;
    }
    if(game.state=="ready-2"&&keyboard[66]){
        game.state = "non-start";
    }


    if(game.state == "playing" && enemies.length == 0) {
        game.state = "won";
        overlay.counter = 0;
    }
    if(game.state == "over" && keyboard[89]) {
        resetGame();
        overlay.counter = -1;
    }
    if(game.state == "over" && keyboard[27]) {
        game.state = "non-start";
        overlay.counter = -1;
    }    

    
    if(game.state == "won" && keyboard[89]) {
        resetGame();
        overlay.counter = -1;
    }
    if(game.state == "won" && keyboard[27]) {
        game.state = "non-start";
        overlay.counter = -1;
    }


    if(game.state == "overtime" && keyboard[89]) {
        resetGame();
        overlay.counter = -1;
    }
    if(game.state == "overtime" && keyboard[27]) {
        game.state = "non-start";
        overlay.counter = -1;
    }
    //reset
    if(keyboard[82]&&game.state=="playing"){
        game.state = "re-game";
        overlay.counter = 0;
    }
    if(game.state == "re-game" && keyboard[89]) {
        StopTimer();
        resetGame();
        overlay.counter = -1;
    }

    if(game.state == "re-game" && keyboard[78]) {
        game.state = "playing";
    }

    if(game.state=="re-game"&& keyboard[27]){
        game.state = "non-start";
    }

    
    if(overlay.counter >= 0) {
        overlay.counter++;
    }
    
}


function updateBackground() {
}

// ==============================Obstacle=================================
function updateObstacles(){

    if(game.state == "start"){
        obstacles = [];
        var spaceDis = game.obstacle+1 ;
        for(var i=0;i<game.obstacle;i++){
            obstacles.push({
                x: (canvas.width - game.obstacle*obstacle_width)/spaceDis + i*(canvas.width/spaceDis),
                y: 500,
                width: obstacle_width,
                height: obstacle_height,
                counter: 0,
                state: "alive",
                live: 3,
                chance: 3,
                counter: 0,
                delay: 0,

            });
        }

    }

    for(var i in obstacles){
        var obstacle = obstacles[i];
        if(obstacle && obstacle.state=="hit"){
            obstacle.counter++;
            if(obstacle.chance!=0&&obstacle.counter>=10){
                obstacle.chance--;
                obstacle.state ="alive";
                obstacle.counter = 0;
                                
            }else{
                obstacle.delay++;
                if (obstacle.delay>=20) {
                    obstacle.state = "dead";
                    obstacle.delay = 0;
                }
            }
        }
    }

    //remove the dead Obstacle
    obstacles = obstacles.filter(function(e) {
            if(e && e.state != "dead") return true;
            return false;
    });

}


function doSetup() {
	attachEvent(document, "keydown", function(e) {
		keyboard[e.keyCode] = true;
	});
	attachEvent(document, "keyup", function(e) {
		keyboard[e.keyCode] = false;
	});
}

function attachEvent(node,name,func) {
    if(node.addEventListener) {
        node.addEventListener(name,func,false);
    } else if(node.attachEvent) {
        node.attachEvent(name,func);
    }
};
