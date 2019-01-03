$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //Sets the visibility of the three sections of the trivia
    $("#titleDiv").show();
    $("#second-page").hide();
    $("#third-page").hide();

    //TIMER FUNCTION
    //Start the timer when the button is clicked
    $("#start-button").click(function () {
        $("#start-button").on("click", start); //starts the game
        $("#submit").on("click", submitAnswers); //submits the answers
        $("#restart-button").on("click", restart); //restarts the game
        var time = 45;

        function start() {
            counter = setInterval(count, 1000);
            //show me and hide me directions here
            $("#titleDiv").hide();
            $("#second-page").show();
            $("#third-page").hide();
        }

        function count() {
            time-- //decreases the time (45) by one
            $("#show-timer").text(time); //displays the timer as it is decreasing
            if (time === 0) {
                alert("Time's Up!");
                stop(); //calls the stop function
                displayScores();
            }
        }

        function stop() {
            clearInterval(counter); //stops timer  
            $("#titleDiv").hide();
            $("#second-page").hide();
            $("#third-page").show();
        }

        //Submitting answers
        function submitAnswers() {
            time = 1;
            clearInterval(counter); //stops timer
            displayScores();
            $("#titleDiv").hide();
            $("#second-page").hide();
            $("#third-page").show();
        }

        function restart() {
            time = 45;
            start();
            // $("#form")[0].reset();
            $("#correct-display").empty();
            $("#incorrect-display").empty();
            $("#unanswered-display").empty();
            correct = 0;
            incorrect = 0;
            unanswered = 0;

        }
        start();
    })

    //QUESTIONS FORM
    //Function to get the answers from the form when the form is submitted
    function getAnswers() {
        $("#submit").on("click", function (event) {
            event.preventDefault();

            //First question data and if statement to put data in scoring categories
            var q1Data = $('input[name=q1]:checked').val();
            // console.log(q1Data);
            if (q1Data == "true") {
                correct++;
                console.log(q1Data + correct);
            } else if (q1Data == "false") {
                incorrect++;
                console.log(q1Data + incorrect);
            } else {
                unanswered++
                console.log(q1Data + unanswered);
            }

            //Second question data
            var q2Data = $('input[name=q2]:checked').val();
            if (q2Data == "true") {
                correct++;
                console.log(q2Data + correct);
            } else if (q2Data == "false") {
                incorrect++;
                console.log(q2Data + incorrect);
            } else {
                unanswered++
                console.log(q2Data + unanswered);
            }

            //Third question data
            var q3Data = $('input[name=q3]:checked').val();
            if (q3Data == "true") {
                correct++;
                console.log(q3Data + correct);
            } else if (q3Data == "false") {
                incorrect++;
                console.log(q3Data + incorrect);
            } else {
                unanswered++
                console.log(q3Data + unanswered);
            }
            //fourth question data
            var q4Data = $('input[name=q4]:checked').val();
            if (q4Data == "true") {
                correct++;
                console.log(q4Data + correct);
            } else if (q4Data == "false") {
                incorrect++;
                console.log(q4Data + incorrect);
            } else {
                unanswered++
                console.log(q4Data + unanswered);
            }

        })
    }
    
    function displayScores() {
        $("#correct-display").text(correct);
        $("#incorrect-display").text(incorrect);
        $("#unanswered-display").text(unanswered);
    }


    getAnswers();




})