// =============timer ============
var TotalSeconds = 120;
var nowTime = TotalSeconds;
var time_counter = 0;

function updateTimer(c){
    c.fillStyle = "red";
    c.font = "25pt Arial";
    c.textAlign="right";
    var time = nowTime;
    c.fillText("Time: "+time+" Sec",canvas.width-30,canvas.height-10);
    if(nowTime<=0&&game.state!="non-start"&&game.state!="won"&&game.state!="over"){
		StopTimer();
		game.state = "overtime";
	} else {
		if(game.state=="non-start"){
			StopTimer();
		}
		if (game.state=="won") {
			StopTimer();
		}
		if (game.state=="over") {
			StopTimer();
		}
		
	}
	if(time_counter>=move_time){
		time_counter = 0;
	}

}
function RunTimer(){
	resetTime();
	start = setInterval(function(){Timer()},1000);
	
}

function StopTimer(){
	clearInterval(start);
}

function Timer(){
	nowTime -=1;
	time_counter +=1;
}

function resetTime(){
	nowTime = TotalSeconds;
	time_counter= 0;
}

