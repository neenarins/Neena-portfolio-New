//Declaring Global Variables to be used throughout the following functions.
var words = ['balance','sonder','namaste','serenity','shanti','transcend','strength','cleanse','mindfulness','gratitude'];
var currentWord  = ""; 
var lettersInCurrentWord = [];

var numberOfBlanks = 0; 
var gameArea = []; 
var incorrectGuesses = []; 
var wins  = 0;
var losses = 0;
var lives  = 9;

window.onload = function(){
    //This is the function that will start the game, and reset the game back to the original values when it's called upon.
    function startGame() {
        lives = 9;
        //Generates a random word.
        currentWord = words[Math.floor(Math.random() * words.length)]; 
        //Splits the random word into character by character.
        lettersInCurrentWord = currentWord.split(""); 
        //Gathers the number of blanks for the number of letters within that word.
        numberOfBlanks = lettersInCurrentWord.length; 
        gameArea = []; 
        incorrectGuesses = []; 
        //Creates a for-loop, that will loop through the number of blanks within the secret word, and push out an underscore (or blank!) so as to indicate the number of letters within the word the user is trying to guess.
        for (var i=0; i <numberOfBlanks; i++){
            gameArea.push("_");

        //This populates the HTML with the variables and input we are declaring here.
        document.getElementById("lives").innerHTML = lives;
        document.getElementById("gameArea").innerHTML= gameArea.join(" ");
        document.getElementById('incorrectGuesses').innerHTML = incorrectGuesses.join(" ");
         }
    }

    //The function that will be used in order to check user guesses against actual letters. 
    function checkLetters(letter) {
        //The boolean that will toggle true or false dependent on whether the letter that the user guessed is actually a part of the secret word to be guessed. Starts as false.
        var letterInWord = false;
        //A for-loop that will be used to check whether the letter the user guessed is in the word to be guessed, and if so, it will toggle the letterInWord boolean to be true.
        for (var i=0; i<numberOfBlanks; i++) {
            if(currentWord[i] == letter) {
                letterInWord = true; // if the letter exists then toggle this boolean to true. This will be used in the next step. 
            }
        }
        //An if statement to handle the placement of the user input versus the actual letters in the word.
        if(letterInWord){
            //A for-loop to loop through the word for the following if statement.
            for (var i=0; i<numberOfBlanks; i++){
                //An if statement that will check to see that if the letter exists within the word, where exactly does it exist so that it can populate the corresponding blank with that particular letter.
                if(currentWord[i] == letter) {
                    gameArea[i] = letter;
                }
            }
        }
        //However, if the letter that the user entered does not exist within the word, the letter will be pushed to the incorrect letter bank, and one life will be deducted.
        else {
            incorrectGuesses.push(letter);
            lives--; 
        }
    }

//This function will gather the scores, and then populate the HTML will the proper numbers.
    function roundComplete(){
        //The population of the HTML.
        document.getElementById("lives").innerHTML= lives;
        document.getElementById("gameArea").innerHTML = gameArea.join(" ");
        document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");

        //An if statement that will alert the user that he or she has won if all of the letters the user entered, match all of the letters in the word.  If so, it will add to the users win counter, with the alert.
        if (lettersInCurrentWord.toString() == gameArea.toString()) {
            wins++;
            alert("You win!");
            document.getElementById("wins").innerHTML= wins;
            //Calls the function that will reset the game so the user can play again.
            startGame();
        }
        //However, if the lives counter gets to 0 before the word has been discovered, one point will be added to the users losses, and he or she will be alerted that they have lost.
        else if(lives == 0) {
            alert("Sorry! You have lost. The word you needed to guess was " + currentWord);
            losses++;
            document.getElementById("losses").innerHTML= losses; 
            startGame();
        }
    }
    //Here, we call the functions where they will actually run, whereas prior, they were just being set up for this section.
    startGame();
    //This captures the key clicks.
    document.onkeyup = function(event) {
        //Sets all of the users key clicks to lowercase, as our words are all in lowercase and this way we can more correctly match the user guesses with the actual word.
        letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

        checkLetters(letterGuessed);
        roundComplete();
    }
}