// =========== check for collisions ===

function checkCollisions() {

    // check player bullet with invader
    for(var i in playerBullets) {
        var bullet = playerBullets[i];
        for(var j in enemies) {
            var enemy = enemies[j];
            if(collided(bullet,enemy)) {
                //remove Player bullet when hit
                bullet.y = -bullet.height;
                bullet.state = "hit";
                enemy.state = "hit";
                
                enemy.counter = 0;

            }
            
        for(var k in obstacles){
            var obstacle = obstacles[k];
            if(collided(bullet,obstacle)){
                bullet.y = -bullet.height; // remove player bullet when hit obstacle
            }
        }


        }
    }
    
    if(player.state == "hit" || player.state == "dead") return;
    
    // check invader bullet with Player
    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        if(collided(bullet,player)) {
            //remove Enemy Bullets bullet when hit
            bullet.y = canvas.height+1;
            bullet.state = "hit";
            player.state = "hit";
            player.counter = 0;
        }
        //chenck enemy bullet with obstacles
        for(var l in obstacles){
            var obstacle = obstacles[l];
            if(collided(bullet,obstacle)){
                bullet.y = canvas.height+bullet.height; // remove player bullet when hit obstacle
                bullet.state ="hit";
                obstacle.state = "hit";

            }

        }
        
    }

    // check invader with player

    for(var i in enemies){
        var enemy = enemies[i];
        if (collided(enemy, player)) {
            game.state = "over";
            
        }
    }


}

function collided(a, b) {
    
    //check for horz collision
    if(b.x + b.width >= a.x && b.x < a.x + a.width) {
        //check for vert collision
        if(b.y + b.height >= a.y && b.y < a.y + a.height) {
            return true;
        }
    }
    
    //check a inside b
    if(b.x <= a.x && b.x + b.width >= a.x+a.width) {
        if(b.y <= a.y && b.y + b.height >= a.y + a.height) {
            return true;
        }
    }
    
    //check b inside a
    if(a.x <= b.x && a.x + a.width >= b.x+b.width) {
        if(a.y <= b.y && a.y + a.height >= b.y+b.height) {
            return true;
        }
    }
    
    return false;
}