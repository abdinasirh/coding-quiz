



var viewHighScores = document.querySelector("#view-high-score");
var timeLeft = document.querySelector("#timeLeft");
var startQuizBtn = document.querySelector("#startQuiz");
var questionsScreen = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-Title");
var choices = document.querySelector("#choices");
var endQuiz = document.querySelector("#endQuiz");
var finalScore = document.querySelector("#finalScore");
var initials = document.querySelector("#initials");
var sumbitBtn = document.querySelector("#submit");
var highscores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");
var goBackBtn = document.querySelector("#goBack");
var start = document.querySelector(".start");

var time = 60;
var timerEl;


var questions = [
  {
  
  title: "Arrays in JavaScript can be used to store ____.",
  choices: [
    "numbers and strings",
    "other arrays",
    "booleans",
    "all of the above"
  ],
  answer: "all of the above"
},

{
  
  title: "Arrays in JavaScript can be used to store ____.",
  choices: [
    "numbers and strings",
    "other arrays",
    "booleans",
    "all of the above"
  ],
  answer: "all of the above"
},

]


function startQuiz() {
  start.setAttribute("class", "hide");
  questionsScreen.removeAttribute("class", "hide");
  timerEl = setInterval(clockTick, 1000);
  timeLeft.textContent = time;


}


   




startQuizBtn.onclick = startQuiz;
