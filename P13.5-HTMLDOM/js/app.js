// document elements
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");


//buttons
const increaseScoreButton = document.getElementById("button0");
const decreaseScoreButton = document.getElementById("button1");

decreaseScoreButton.style.color = "red";
increaseScoreButton.style.color = "green";




// internal Variables
let score = 0;


// button click
// Process (what is going to happen in what sequence?)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne()
  checkForSeven()

});

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

function checkForSeven(){
  if (score >= 7) {
    changeTextToGreen();
    }

  }

function changeTextToGreen(){
  textField0.style.color = "green";
}

// View
function updateScoreText(newText){
  textField0.innerHTML = "Your Score Is: " + newText;
}

function updateStatusText(newText){
  textField1.innerHTML = newText;
}

// minus
function decreaseScoreByOne() {
  score--;
  updateScoreText(score);
}


