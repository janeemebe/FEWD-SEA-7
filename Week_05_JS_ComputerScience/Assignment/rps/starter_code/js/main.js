// hint: You will need to look at the jQuery docs
// ready() https://api.jquery.com/ready/
// click() https://api.jquery.com/click/
// html() https://api.jquery.com/html/
// String concatenation used the plus symbol (+)
// You can mix variables with strings (text wrapped in quotes)

// add your functions here

// $(document).ready(function(){ 
	var computerChoices = ["rock", "paper", "scissors"];
	var getComputerPlay = function() {
		var play = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		return play;
	};


var humanScore = 0;
var computerScore = 0;

var updateHumanScore = function(newScore) {
	$("#humanScore").html(newScore);
};

var updateComputerScore = function(newScore) {
	$("#computerScore").html(newScore);
};

$("#rock").click(function(e){
	var computerPlay = getComputerPlay();
	if(computerPlay === "scissors"){
		$("#outcome").html("Rock beats Scissors, Human wins");
		humanScore++;
		updateHumanScore(humanScore);
	} else if(computerPlay === "paper") {
		$("#outcome").html("Paper beats Rock, Computer wins");
		computerScore++;
		updateComputerScore(computerScore);
	} else {
		$("#outcome").html("We tie");
	}
})

$("#paper").click(function(e){
	var computerPlay = getComputerPlay();
	if(computerPlay === "scissors"){
		$("#outcome").html("Scissors beats Paper, Computer wins");
		computerScore++;
		updateComputerScore(computerScore);
	} else if(computerPlay === "rock") {
		$("#outcome").html("Paper beats Rock, Human wins");
		humanScore++;
		updateHumanScore(humanScore);
	} else {
		$("#outcome").html("We tie");
	}
})

$("#scissors").click(function(e){
	var computerPlay = getComputerPlay();
	if(computerPlay === "paper"){
		$("#outcome").html("Scissors beats Paper, Human wins");
		humanScore++;
		updateHumanScore(humanScore);
	} else if(computerPlay === "rock") {
		$("#outcome").html("Rock beats Scissors, Computer wins");
		computerScore++;
		updateComputerScore(computerScore);
	} else {
		$("#outcome").html("We tie");
	}
})



// this is where you'll bind evnet (hint: click)

// });