var timeLeftEl = document.getElementById("time-left");
var titleEL = document.getElementById("Title");
var startButtonEL = document.getElementById("start-button");
var quizEL = document.getElementById("quiz-area");
var questionEL = document.getElementById("question");
var answersListEL = document.getElementById("answers");
var answerCheckEl = document.getElementById("answer-checker");
var headerEl = document.getElementById("header")

var score = 0;
var timeRemaining = 51;
var questionNumber = 0;
var questions = [
    "The first index in an array has an index of _____.",
    "Which one of these is not a JavaScript datatype?",
    "What which one of these is not a way to declare JavaScript variables?",
    "Which array method adds an element to the end of an array in Javascript?"
    ];
var answerOptions = [
    "0, 1, O, First",
    "String, Undefined, Binary, Null",
    "var variableName =, variableName =,  const variableName =, let variableName =",
    "shift(), pop(), append(), push()"
    ]
var currentQuestion = "";

function startQuiz(){
    titleEL.style.display = "none";
    startButtonEL.style.display = "none";
    timeRemaining = 51;
    questionNumber = 0;
    timeLeftEl.textContent = timeRemaining;
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timeLeftEl.textContent = timeRemaining;
        if(timeRemaining <=0){
            endQuiz;
            clearInterval(timerInterval);
        }
      }, 1000);

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

function nextQuestion(){
    questionNumber++;
    console.log(questionNumber);
    console.log(questions.length);

    if(questionNumber === questions.length){
        endQuiz();
        return;
    }else{
        console.log("Next");
        generateQuestion();
        generateAnswers();
    }
    
}

answers.addEventListener("click", function(event){
    var element = event.target;

    if(element.matches("button")){
        checkAnswer(element);
        nextQuestion();
    }
});

function checkAnswer(event){
    if(questionNumber === 0 && event.matches("#button-1")){
        correctAnswer();
    }else if(questionNumber === 1 && event.matches("#button-3")){
        correctAnswer();
    }else if(questionNumber === 2 && event.matches("#button-2")){
        correctAnswer();
    }else if(questionNumber === 3 && event.matches("#button-4")){
        correctAnswer();
    }else{
        wrongAnswer();
    };

}

function correctAnswer(){
    score = score + 5;
    answerCheckEl.textContent = "Correct!";
}

function wrongAnswer(){
    timeRemaining = timeRemaining - 10;
    if(timeRemaining <=0){
        endQuiz();
        return;
    }
    answerCheckEl.textContent = "Bzzz. Wrong!";
    timeLeftEl.textContent = timeRemaining;
}

function endQuiz(){
    console.log("End quiz");
    quizEL.style.display = "none";
    answerCheckEl.style.display = "none";
    headerEl.style.display = "none";
}

startButtonEL.addEventListener("click", startQuiz);


