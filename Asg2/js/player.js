function updatePlayer() {
    if(player.state == "dead") return;

    //left arrow
	if(keyboard[37])  { 
	    player.x -= 10; 
	    if(player.x < 0) player.x = 0;
	}	
	//right arrow
	if(keyboard[39]) { 
	    player.x += 10;	
	    var right = canvas.width - player.width;
	    if(player.x > right) player.x = right;
	}	
	
	//space bar
	if(keyboard[32]) {
		if(!keyboard.fired) { 
			firePlayerBullet(); 
			keyboard.fired = true;
		}
	} else {
		keyboard.fired = false;
	}
	
	if(player.state == "hit") {
        player.delay++; //explosion time when hit
        if(player.chance!=0&&player.delay>=20){
            player.chance--;
            player.state = "alive";
            player.delay=0;
        }
        else{
	    player.counter++;
	    if(player.counter >= 30&&game.state!="overtime") {
	    	player.chance--;
            player.counter = 0;
	        player.state = "dead";
	        game.state = "over";
	        overlay.counter = 0;
            player.delay=0;
	    }
        }
	}
}


function updatePlayerBullets() {
	//move each bullet
	for(i in playerBullets) {
		var bullet = playerBullets[i];
		bullet.y -= 8;
		bullet.counter++;
	}
	//remove the ones that are off the screen
	playerBullets = playerBullets.filter(function(bullet){
		return bullet.y > 0;
	});
}