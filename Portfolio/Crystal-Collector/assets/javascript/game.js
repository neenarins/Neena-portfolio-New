$(document).ready(function(){

$("#buttonReset").hide();

//Global Variables, to be referred to throughout any function.
var blueNum = 0;
var greenNum = 0;
var redNum = 0;
var yellowNum = 0;
var scoreNow = 0;
var matchScore = 0;
var wins = 0;	
var losses = 0;

		//If the given gem does not already have a number attributed to it, then it will generate a random number for that gem.  Otherwise, it will use the number given to the gem, and add it to the current score. 
		$("#blueGem").on('click', function(){		
				scoreNow = scoreNow + blueNum;
				//Replaces the HTML for the element with the scoreNow Id, with the current score, that includes the points from the clicked gem.
				document.getElementById("scoreNow").innerHTML = scoreNow;
				//Calling the function that will handle the scorekeeping.
				scoreKeeper();
		
			
		});

		$("#greenGem").on('click', function(){		
				scoreNow = scoreNow + greenNum;
				document.getElementById("scoreNow").innerHTML = scoreNow;
				scoreKeeper();
		
		});

		$("#redGem").on('click', function(){		
				scoreNow = scoreNow + redNum;
				document.getElementById("scoreNow").innerHTML = scoreNow;
				scoreKeeper();
		
		});

		$("#yellowGem").on('click', function(){
				scoreNow = scoreNow + yellowNum;
				document.getElementById("scoreNow").innerHTML = scoreNow;
				scoreKeeper();
		
		});
	
	
		$("#buttonReset").click(function(){
			startNewGame()
		});
	
		//This function will reset all the values at start run when it is time to reset the game, which will set all of the following values back to 0.
	function startNewGame(){	
			scoreToMeet = 0;
			scoreNow = 0;
			blueNum = 0;
			greenNum = 0;
			redNum = 0;
			yellowNum = 0;
			//givenScore();
			$("#buttonReset").hide();
			$("#gemRow").show();
	    	matchScore= Math.floor((Math.random() * 101) + 19);
	    	document.getElementById("scoreToMeet").innerHTML = matchScore;
	    	document.getElementById("scoreNow").innerHTML = 0;
	    	blueNum = Math.floor((Math.random() * 11) + 1);
	    	greenNum = Math.floor((Math.random() * 11) + 1);
	    	yellowNum = Math.floor((Math.random() * 11) + 1);
	    	redNum = Math.floor((Math.random() * 11) + 1);   		
		
	};

	//This function will check whether the current score equals the given score to match.  If it does, then the user wins will add by one.  If it does not, then the user losses will add by one.  It will then be posted to the HTML page, through the element with that given Id.  It will also hide and show certain content, for a cleaner look.
	function scoreKeeper(){
		if (scoreNow > matchScore){
			losses++;
			$("#losses").html('Losses: ' + losses);
			$("#buttonReset").show();
			$("#gemRow").hide();
			
		}

		if (scoreNow == matchScore){
			wins++;
			$("#wins").html('Wins: ' + wins);
			$("#buttonReset").show();
			$("#gemRow").hide();
			
		};
	};

//This will call the givenScore function.
//givenScore();
startNewGame();

});

