$(document).ready(function(){
    //The hiding and showing of different content, so as to create a cleaner user interface.
    $("#main-content").hide();
    $("#finish").hide();
    $(".start").click(function(){
        $(".start").hide();
        $("#main-content").show();
        $("#finish").hide();
    });
    $("#submit").click(function(){
        $("#main-content").hide();
        $("#finish").show();
    });

//Global variables to be used throughout the rest of the jQuery code.
var correctAns = 0;
var wrongAns = 0;
var time = 30;
//Setting a variable to equal an interval, which will essentially subtract 1 from the timer every second.
var timer = setInterval(counter, 1000);

    //The function that works with the timer on the game.  Once the time reaches 0, certain content will clear out, to allow for the scoring div to appear.
    function counter(){
        time = time - 1;
        if (time <= 0){
            clear();
            stats();
            $("#main-content").hide();
            $("#finish").show();

        }
        //This replaces the element in the HTML of "counter" to alert the user of how many seconds are remaining.
        document.getElementById("counter").innerHTML = "Seconds Remaining: " + time;
    };

    //If the user finishes early, and clicks the submit button, the scoring div will appear to relay the users score to him or her.
    $("#submit").click(function(){
        $("#main-content").hide();
        stats();
    });

    //The function that will clear out the timer once the user is finished.
    function clear(){
        clearInterval(timer);
    };

    //The function that takes care of the scoring.
    function stats(){
        correctAns = 0;
        wrongAns = 0;
        //Creating a for-loop, that will loop through each of the radio buttons.  It will then check to see if the button is both, clicked, and whether it has a label of "right" or "wrong."
        for (var i = 0; i < 10; i++) {
            var radios = document.getElementsByName('q'+i);
            for (var n = 0; n < radios.length; n++) {
                var radio = radios[n];
                //If the input is clicked, and right, it will add 1 to the users correct answer count.
                if (radio.value == "right" && radio.checked){
                    correctAns++
                //However, if the input is clicked, and wrong, it will add 1 to the users wrong answer count.
                }else if (radio.value == "wrong" && radio.checked){
                    wrongAns++
                }
            }
        }

        //Adding text to the HTML, to indicate to the user the amount of correct and wrong answers he or she has.
        $("#right").html("Meowvelous: " + correctAns);
        $("#wrong").html("You have cat to be kitten me: " + wrongAns);
    }
});