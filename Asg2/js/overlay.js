// =========== overlay ===============
var center = canvas.width/2;
var text_space = 70;
var low_pos =250;
var height_pos =150;
var fontStyle_High = "Bold 45pt Arial";
var fontStyle_low = "bold 25pt sans-serif";
function drawOverlay(c) {
    if(game.state =="non-start"){
        c.fillStyle = "white";
        c.textAlign="center";
        c.font = fontStyle_High;
        c.fillText("WELCOME TO SPACE INVADERS",center,height_pos);
        c.fillStyle = "#66ff33";
        c.font = fontStyle_low;
        c.fillText("SELECT LEVEL", center,low_pos);
        c.fillText("Press [1] to select <Easy Level>", center,low_pos+text_space);
        c.fillText("Press [2] to select <Hard Level>", center,low_pos+2*text_space);    
    }
    if(game.state =="ready-1"){
        c.fillStyle = "white";
        c.textAlign="center";
        c.font = fontStyle_High;
        c.fillText("EASY LEVEL",center,height_pos);
        c.fillStyle = "#66ff33";
        c.font = fontStyle_low;
        c.fillText("You will be play with Easy Level", center,low_pos);
        c.fillText("Press [Y] to START The Game", center,low_pos+text_space);
        c.fillText("Press [B] Back to SELECT LEVEL", center,low_pos+2*text_space);    
    }
     if(game.state =="ready-2"){
        c.fillStyle = "white";
        c.textAlign="center";
        c.font = fontStyle_High;
        c.fillText("HARD LEVEL",center,height_pos);
        c.fillStyle = "#66ff33";
        c.font = fontStyle_low;
        c.fillText("You will be play with Hard Level", center,low_pos);
        c.fillText("Press [Y] to START The Game", center,low_pos+text_space);
        c.fillText("Press [B] Back to SELECT LEVEL", center,low_pos+2*text_space);   
    }
    if(game.state == "over") {
        c.fillStyle = "white";
        c.textAlign="center";
        c.font = fontStyle_High;
        c.textAlign="center";
        c.fillText("GAME OVER",center,height_pos);
        c.fillStyle = "#66ff33";
        c.font = fontStyle_low;
        c.fillText("Press [Y] to Play Again", center,low_pos);
        c.fillText("Press [ESC] to Go Main Manu", center,low_pos+text_space);
    }
    if(game.state == "won") {
        c.fillStyle = "white";
        c.textAlign="center";
        c.font = fontStyle_High;
        c.fillText("YOU WON",center,height_pos);
        c.fillStyle = "#66ff33";
        c.font = fontStyle_low;
        c.fillText("Press [Y] to Play Again", center,low_pos);
        c.fillText("Press [ESC] to Go Main Manu", center,low_pos+text_space);
        
    }
    if(game.state == "overtime") {
        c.fillStyle = "white";
        c.textAlign="center";
        c.font = fontStyle_High;
        c.fillText("OVER TIME",center,height_pos);
        c.fillStyle = "#66ff33";
        c.font = fontStyle_low;
        c.fillText("Press [Y] to Play Again", center,low_pos);
        c.fillText("Press [ESC] to Go Main Manu", center,low_pos+text_space);
    }

    if(game.state == "re-game") {
        c.fillStyle = "white";
        c.textAlign="center";
        c.font = fontStyle_High;
        c.fillText("Do you want to restart ?",center,height_pos);
        c.fillStyle = "#66ff33";
        c.font = fontStyle_low;
        c.fillText("Press [Y] to restart, [N] to Resume", center,low_pos);
        c.fillText("Press [ESC] to Go Main Manu", center,low_pos+text_space);
    }


}

function updateLive(c){
    c.fillStyle = "Yellow";
    c.font = "23pt Arial";
    c.textAlign="center";
    c.fillText("Total Lives: "+(player.chance+1),canvas.width/2,canvas.height-10);
}