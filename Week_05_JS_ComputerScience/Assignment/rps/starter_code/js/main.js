$(document).ready(function(){ 
	var humanScore = 0;
	var computerScore = 0;
	var choices = ["rock", "paper", "scissors"];
	var getComputerPlay = function() {
		var play = choices[Math.floor(Math.random() * choices.length)];
		return play;
	};
	var updateHumanScore = function(newScore) {
		humanScore++;
		$("#humanScore").html(humanScore);
	};
	var updateComputerScore = function(newScore) {
		computerScore++;
		$("#computerScore").html(computerScore);
	};
	$("#rock, #paper, #scissors").click(function(e){
		var humanPlay = $(this).attr('id');
		var computerPlay = getComputerPlay();
		var x = choices.indexOf(humanPlay);
    	var y = choices.indexOf(computerPlay);
		if (x === y) {
			$("#outcome").html("We both played " + computerPlay + ". We tie!");
		} else if (x === 0 && y === 2 || x === 2 && y === 1 || x === 1 && y === 0) {
			updateHumanScore(humanScore);
			$("#outcome").html("Computer played " + computerPlay + ". Human wins!")
		} else {
			updateComputerScore(computerScore);
			$("#outcome").html("Computer played " + computerPlay + ". Computer wins!")
		};	
	});
});