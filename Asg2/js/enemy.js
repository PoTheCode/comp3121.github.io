var forward = 50;
var move_time = 10;
var enemy_height = 58;
var enemy_width = 58;
var enemy_positon = 0;
var inputs=[];
// ============== Enemy Setting======
function inputSetting(){
    delete inputs;
    var num = 0;
    var updateInput=[];
    
    for(var i=0;i<row;i++){
        for(var j = 0;j<col;j++){
            var ivalue = document.getElementById('s'+num).value;
            num++;
            updateInput.push({
                position_score: ivalue,
                set: 1,
            });
        }
    }
    num = 0;
    inputs = updateInput;
    delete updateInput;

    //alert(inputs[1].position_score); // for testing    
}
    
// ============== Enemy =============
function updateEnemies(speed) {
    var move_speed = speed;
    var move_speed2 = 100;
    if(move_speed >=0&&move_speed<20){
        move_time = 15;
        move_speed2 = 200;
    }
    if(move_speed>=20&&move_speed<40){
        move_time = 13;
        move_speed2 = 150;
    }
    if (move_speed=>40&&move_speed<60) {
        move_time = 10;
        move_speed2 = 100;
    }
    if (move_speed>=60&&move_speed<80) {
        move_time = 7;
        move_speed2 = 50;
    } 
    if(move_speed>=80&&move_speed<=100){
        move_time = 5;
        move_speed2 = 25;
    }       
    if(game.state == "start") {
        var num1 = 0;
        enemies = [];
        enemyBullets = [];
                       
        for(var i=0; i<level.row; i++) {
            for(var j=0; j<level.col; j++){
                if(j==enemy_positon){
                    var checkinput = inputs[num1].position_score;
                    var setScore = checkinput;
                    if (setScore == 0){
                        var estate = "dead";
                    }else{
                        var estate = "alive";
                    }


                    enemies.push({
                        x: ((canvas.width-level.col*enemy_width)/level.col+1)*(2/3) + j*(canvas.width/(level.col+1)),
                        y: 15 + i*65,
                        width: enemy_width,
                        height: enemy_height,
                        state: estate, // the starting state of enemies
                        counter: 0, // a counter to use when calculating effects in each state
                        phase: Math.floor(Math.random()*200), //make the enemies not be identical
                        shrink: 20,
                        count: "false",
                        mark: i,  // use to mark the row enemy
                        fired: "off",
                        score: setScore,
                        check: 1,

                    });
                
                    
                }
                enemy_positon ++ ; 
                num1++;            
            }
            enemy_positon = 0;
            num1 = 0;

        }
        game.state = "playing";
    }
    
    
    //for each enemy
    for(var i in enemies) {
        
        var enemy = enemies[i];
        var input = inputs[i];
        if(!enemy) continue;      
        
        //float back and forth when alive
        if(enemy && enemy.state == "alive") {
            enemy.counter++;
            enemy.x += Math.sin(enemy.counter*Math.PI*2/move_speed2)*2;
            enemy.fired = "off";

            //use 'phase' so they don't all fire at the same time
            if((enemy.counter + enemy.phase) % 300 == 0) {
                enemyBullets.push(createEnemyBullet(enemy));
                enemy.fired = "on";
            }
            
        }

        if(enemy && time_counter == move_time){
            enemy.y += forward;


        }
        // check enemy position
        if(enemy.y >= bg_height - 100)
        {
            game.state = "over";
        }



        //enter the destruction state when hit
        if(enemy && enemy.state == "hit") {

            enemy.counter++;           
            //the time for enemy(dead) cleaned 
            if(enemy.counter >= 15) {
                enemy.state = "dead";
                addScore(enemy); // add Score
                enemy.counter = 0;
                enemy.count = "ture";
            }

        }
        if(enemy&&input.position_score==0){
            enemy.counter++;

            if(enemy.counter >=15){
                enemy.state = "dead";
                enemy.check = 0;
                enemy.counter = 0;
                enemy.count = "ture";
            }
            
        }
    

    }

    //remove the dead ones
    enemies = enemies.filter(function(e) {

            if(e && e.state != "dead"&&e.check!=0) {
                return true;
            }else{
                
                return false;

            }
            
    });
}


function updateEnemyBullets() {
    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        bullet.y += 8;  //Enemy Bullets speed
        bullet.counter++;
        if(bullet.y>=bg_height){
            bullet.y = canvas.height + bullet.height;
        }
    }
    playerBullets = playerBullets.filter(function(bullet){
        return bullet.y < canvas.height + bullet.height;
    });
}