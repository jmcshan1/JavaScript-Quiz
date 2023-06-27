var timeLeftEl = document.getElementById("time-left");
var titleEL = document.getElementById("Title");
var startButtonEL = document.getElementById("start-button");
var quizEL = document.getElementById("quiz-area");
var questionEL = document.getElementById("question");
var answersListEL = document.getElementById("answers");

var timeRemaining = 50;
var questionNumber = 0;
var questions = [
    "The first index in an array has an index of _____.",
    "Which one of these is not a JavaScript datatype?",
    "What which one of these is not a way to declare JavaScript variables?",
    "Which array method adds an element to the end of an array in Javascript?"
    ];
var answerOptions = [
    "0, 1, O, First",
    "String Undefined Binary Null",
    "var variableName = variableName =  const variableName =, let variableName =",
    "shift(), pop(), append(), push()"
    ]
var currentQuestion = "";

function startQuiz(){
    titleEL.style.display = "none";
    startButtonEL.style.display = "none";
    var questionNumber = 0;
    var timeRemaining = 50;
    timeLeftEl.textContent = timeRemaining;

    generateQuestion();
}

function generateQuestion(){
    currentQuestion = questions[questionNumber];
    questionEL.textContent = currentQuestion;
    generateAnswers()
}

function generateAnswers(){
    var answers = answerOptions[questionNumber].split(/[.,!,?]/);
    for(i = 0; i < 4; i++){
        var answerBtn = answersListEL.children[i].children[0];
        answerBtn.textContent = answers[i];
    }
}

function nextQuestion{
    questionNumber++;
    generateQuestion
}

answers.addEventListener("click", function(event){
    if(event.tar)
})
startButtonEL.addEventListener("click", startQuiz);

