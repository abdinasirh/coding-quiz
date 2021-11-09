



var viewHighScores = document.querySelector("#view-high-score");
var timeLeft = document.querySelector("#timeLeft");
var startQuizBtn = document.querySelector("#startQuiz");
var questionsScreen = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-Title");
var choicesEl = document.querySelector("#choices");
var endQuiz = document.querySelector("#endQuiz");
var finalScore = document.querySelector("#finalScore");
var initials = document.querySelector("#initials");
var sumbitBtn = document.querySelector("#submit");
var highscores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");
var goBackBtn = document.querySelector("#goBack");
var start = document.querySelector(".start");

var time = 60;
var questionIndex = 0;
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

  displayQuestions();
}

function displayQuestions() {
  var currentQuestion = questions[questionIndex];
  questionTitle.textContent = currentQuestion.title;

  currentQuestion.choices.forEach(function (choice) {
    var choicesBtn = document.createElement("button");
    choicesBtn.setAttribute("value", choice);
    choicesBtn.textContent = choice;
    choicesBtn.onclick = choiceClick;
    choicesEl.appendChild(choicesBtn);

  })

}

function choiceClick() {
  if (this.value !== questions[questionIndex].answer) {
    time -= 10;
  }

  if( time<0) {
    time = 0;
  }

  timeLeft.textContent = time;

  questionIndex++;

  // if statement to check if questions are done
    // if done - call end quiz
    // iff more questions call function for next question

}


function clockTick() {
  time--;
  timeLeft.textContent = time;
  if (time <= 0) {
    quizOver()
  }

}

function quizOver() {

}




startQuizBtn.onclick = startQuiz;
