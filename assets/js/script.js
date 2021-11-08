



var viewHighScores = document.querySelector("#view-high-score");
var timeLeft = document.querySelector("#timeLeft");
var startQuiz = document.querySelector("#startQuiz");
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var endQuiz = document.querySelector("#endQuiz");
var finalSore = document.querySelector("#finalScore");
var initials = document.querySelector("#initials");
var sumbit = document.querySelector("#submit");
var highscores = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

var timeLeft;

function startQuiz() {
    var startQuiz = document.getElementById("startQuiz");

    timeLeft = setInterval(clockTick, 1000);


}
   



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
]