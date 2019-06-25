//Global Variables
var time;
var right;
var wrong;
var $timer = $(".timer");
var $trivia = $("#trivia");
var $main = $(".main");
var intervalID;
var runTime;
var questions = [{
    text: "1. Where is King's Landing?",
    option: {
        text: "South of Westeros."
        ,
        text: "North of Westeros"
        ,
        text: "South of Essos"
        ,
        text: "North of Essos"
    },
    correct: "South of Westeros"
}, {
    text: "2. What is The Purple Wedding?",
    option: {
        text: "Edmure Tully and Roslin Frey's Wedding"
        ,
        text: "Robb Stark and Talisa Maegyr's Wedding"
        ,
        text: "Tyrion Lannister and Sansa Stark's Wedding"
        ,
        text: "Joffrey Baratheon and Margaery Tyrell's Wedding"
    },
    correct: "Joffrey Baratheon and Margaery Tyrell's Wedding"
}, {
    text: "3. What is the meaning of the phrase 'Valar Dohaeris' ? ",
    option: {
        text: "All men must live"
        ,
        text: "All men must die"
        ,
        text: "All men must serve"
        ,
        text: "All men must kill"
    },
    correct: "All men must serve"
}, {
    text: "4. Who sits on the Iron Throne in the end?",
    option: {
        text: "Jon Snow/Aegon VI Targaryen"
        ,
        text: "Daenerys Targaryen"
        ,
        text: "Brandon Stark"
        ,
        text: "No One"
    },
    correct: "No One"
}, {
    text: "5. Who is 'The Prince That Was Promised' according to the show?",
    option: {
        text: "Jon Snow/Aegon VI Targaryen"
        ,
        text: "Daenerys Targaryen"

        ,
        text: "Arya Stark"
        ,
        text: "Jamie Lannister"
    },
    correct: "Arya Stark"
}, {
    text: "6. What is Hodor's real name?",
    option: {
        text: "Willace"
        ,
        text: "Wylis"
        ,
        text: "Wyllis"
        ,
        text: "Wallace"
    },
    correct: "Wylis"
}, {
    text: "7. Who made The Iron Throne?",
    option: {
        text: "Balerion The Dread"
        ,
        text: "Aegon I Targaryen"
        ,
        text: "Aerys II Targaryen/The Mad King"
        ,
        text: "Tywin Lannister"
    },
    correct: "Balerion The Dread"
}, {
    text: "8. Which of the following is not one of Jamie Lannister's alias",
    option: {
        text: "Kingslayer"
        ,
        text: "Kingkiller"

        ,
        text: "Lord of Casterly Rock"
        ,
        text: "Lord Commander of the Kingsguard"
    },
    correct: "Lord of Casterly Rock"
}, {
    text: "9. Which of the following houses extinct?",
    option: {
        text: "Lannisters"
        ,
        text: "Tyrells"
        ,
        text: "Targaryens"
        ,
        text: "Baratheons"
    },
    correct: "Tyrells"
}, {
    text: "10. Who is currently The King/Queen of the Seven Kingdom?",
    option: {
        text: "Bran Stark"
        ,
        text: "Jon Snow"
        ,
        text: "Daenerys Targaryen"
        ,
        text: "No One"
    },
    correct: "No One"
}]

// start
function start() {
    time = 120;
    var currentTime = timeConverter(time);
    $timer.text(currentTime);
    intervalID = setInterval(countDown, 1000);
}
function countDown() {
    time--;
    var currentTime = timeConverter(time);
    $timer.text(currentTime);
    if (time === 0) {
        endGame();
    }
}

    


function buildQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var $question = buildQuestion(questions[i], i);
        $trivia.append($question);
    }
    console.log($question);
    var $button = $('<button type="submit" class="btn btn-primary">Submit Answers</button>');
    $trivia.append($button);
}

function buildQuestion(question, index) {
    var $fullQuestion = $('<div class="full-question">');
    var $question = $('<h1 class="question">');
    $question.text(question.text);
    $fullQuestion.append($question);
    var len = question.responses.length;
    for(var i = 0; i < len; i++) {
        var response = question.responses[i];
        var $response = buildResponse(response, index);
        $fullQuestion.append($response);
    }
    console.log($fullQuestion);
    return $fullQuestion;
}

function buildResponse(response, index) {
    var $responseInput = $('<input class="form-check-input" type="radio">');
     $responseInput.addClass(questionName);
    var $responseLabel = $('<label class="form-check-label">');
    $responseLabel.text(response.text)
    var $input = $('<div class="form-check">');
    $input.append($responseInput);
    $input.append($responseLabel);
    return $input;
}




function endGame() {
    //TODO:
    //Show the score and right answer and wrong answer
    if($input===option){
        console.log("win");
        right++;
    } else {
        wrong++;
    }
}
start();
buildQuestions();
// the player will answer 10 multiples questions
//game end when player click submit or the clock runs out. 
//when the game ends, show right answer and wrong answer

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}