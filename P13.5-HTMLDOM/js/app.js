// document elements
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

// internal Variables
let score = 0;

// process,

increaseScoreByOne()

// Controllers
function showScore(inputNumber) {
  return inputNumber * 100;
}

function showStylizedScore(scoreInput) {
  return "your score is: " + scoreInput * 100;
}

function increaseScoreByOne() {
  score++;
  updateScoreText(score);
}

// View
function updateScoreText(newText){
  textField0.innerHTML = newText;
}

function updateStatusText(newText){
  textField1.innerHTML = newText;
}
