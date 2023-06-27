var timeLeftEl = document.getElementById("time-left");
var titleEL = document.getElementById("Title");
var startButtonEL = document.getElementById("start-button");
var quizEL = document.getElementById("quiz-area");
var questionEL = document.getElementById("question");
var answersEL = document.getElementById("answers");


var timeRemaining = 50;
var questionNumber = 0;
var questions = [
    "The first index in an array has an index of _____"
    "",
];
var currentQuestion = "";
var answers = ""


function startQuiz(){
    titleEL.style.display = "none";
    startButtonEL.style.display = "none";
    var timeRemaining = 50;
    timeLeftEl.textContent = timeRemaining;

}

function generateQuestion(){
    currentQuestion = questions[questionNumber];
}

startButtonEL.addEventListener("click", startQuiz);