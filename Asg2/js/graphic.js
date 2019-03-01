
player.width = 60;
player.height = 90;


var ship_image;
var bg_image;
var rNum = Math.floor(Math.random()*4);
var enemy_img = new Image();
var enemy_img1 = new Image();
var e_hit_img = new Image();
var explo = new Image();
var p_bullet = new Image();
var e_bullet = new Image();
var o_hit_img = new Image();
loadResources();

function loadResources() {
    ship_image = new Image();
    ship_image.src = "img/Player.png";
    bg_image = new Image();
    bg_image.src = "img/"+"bg"+rNum+".jpg";

}



// =========== player ============

function firePlayerBullet() {
	//create a Player bullet
	playerBullets.push({
		x: player.x + 30-3, //The bullet fire position
		y: player.y - 5,
		width:10,
		height:20,
	});
}

function drawPlayer(c) {
    if(player.state == "dead") return;
    
    if(player.state == "hit") {

        explo.src = "img/explo.png";
        c.drawImage(explo,player.x,player.y, player.width, player.height);
        return;
	}
	c.drawImage(ship_image, 
	    player.x, player.y, player.width, player.height //dst coords
	    );
}

function drawPlayerBullets(c) {
    p_bullet.src = "img/p_bullet.png";
	
	for(i in playerBullets) {
		var bullet = playerBullets[i];
        c.drawImage(p_bullet,bullet.x, bullet.y, bullet.width,bullet.height)
        
	};
}


// =========== background ============

function drawBackground(c) {

	c.drawImage(bg_image,0,0,bg_width,bg_height);
    c.fillStyle = "black";
    c.fillRect(0, bg_height,canvas.width, canvas.height);
}


// =========== enemies ===============

function drawEnemies(c) {

    enemy_img.src ="img/enemy.gif";
    enemy_img1.src = "img/enemy1.gif";
    

    for(var i in enemies) {
        var enemy = enemies[i];
        if(enemy.state == "alive") {
            if(enemy.mark == level.row -1){
                c.drawImage(enemy_img1,enemy.x,enemy.y,enemy.width,enemy.height);
            }else{
            c.drawImage(enemy_img,enemy.x,enemy.y,enemy.width,enemy.height);
            }
        }
        if(enemy.state == "hit") {
            var j = Math.floor(Math.random()*6);
            e_hit_img.src = "img/p_hit_"+j+".png"
            c.drawImage(e_hit_img,enemy.x,enemy.y,enemy.width,enemy.height);    
        }
        
        if(enemy.state == "dead") {
            c.fillStyle = "black";
            c.fillRect(enemy.x,enemy.y,enemy.width,enemy.height);
        }
    }
}

function createEnemyBullet(enemy) {
    return {
        x:enemy.x,
        y:enemy.y+enemy.height,
        width:13,
        height:20,

        counter:0,
    }
}

function drawEnemyBullets(c) {
    
    e_bullet.src = "img/e_bullet.png"

    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        c.drawImage(e_bullet,bullet.x, bullet.y, bullet.width,bullet.height)


    }
}

//=========================Obstacle==========================
function drawObstacles(c){
    for(i in obstacles){
        var obstacle = obstacles[i];
        
        if(obstacle.state == "alive"){
            o_hit_img.src = "img/o_hit_0.png";
            c.drawImage(o_hit_img,obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            
        }
        if(obstacle.state =="hit"){
            o_hit_img.src = "img/o_hit_1.png";
            c.drawImage(o_hit_img,obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        }
       
    }
}