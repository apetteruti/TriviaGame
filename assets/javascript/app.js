var correct = 0;
var incorrect = 0;
var unanswered = 0;
var seconds = 4500;

//On start click - the timer starts when you click the start button

//Timer function

//Function to get the answers from the form when the form is submitted

function getAnswers() {
    $("#submit").on("click", function (event) {
        event.preventDefault();

        //First question data and if statement to put data in scoring categories
        var q1Data = $('input[name=q1]:checked').val();
        // console.log(q1Data);
        if (q1Data == true) {
            correct++;
            console.log(q1Data + correct);
        } else if (q1Data == false) {
            incorrect++;
            console.log(q1Data + incorrect);
        } else {
            unanswered++
            console.log(q1Data + unanswered);
        }
    
    //Second question data
    var q2Data = $('input[name=q2]:checked').val();
    if (q2Data == true) {
        correct++;
        console.log(q2Data + correct);
    } else if (q2Data == false) {
        incorrect++;
        console.log(q2Data + incorrect);
    } else {
        unanswered++
        console.log(q2Data + unanswered);
    }

    //Third question data
    var q3Data = $('input[name=q3]:checked').val();
    if (q3Data == true) {
        correct++;
        console.log(q3Data + correct);
    } else if (q3Data == false) {
        incorrect++;
        console.log(q3Data + incorrect);
    } else {
        unanswered++
        console.log(q3Data + unanswered);
    }
    //fourth question data
    var q4Data = $('input[name=q4]:checked').val();
    if (q4Data == true) {
        correct++;
        console.log(q4Data + correct);
    } else if (q4Data == false) {
        incorrect++;
        console.log(q4Data + incorrect);
    } else {
        unanswered++
        console.log(q4Data + unanswered);
    }

})
}



getAnswers();






//When the timer = 0 or the user clicks the final submit button, it tallies the points