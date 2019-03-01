var totalScore = 0;
var add_Score = 10;

function resetScore(){
	totalScore = 0;
	
}

function updateScore(c){
	c.fillStyle = "red";
    c.font = "25pt Arial";
    c.textAlign="left";
    c.fillText("Total Socres: "+totalScore, 30, canvas.height-10);
}

function addScore(target){
	for(var i =0;i<level.row;i++)
	if(target.mark ==level.row - i -1){
		totalScore = totalScore + add_Score*(i+1);
	}
	

}