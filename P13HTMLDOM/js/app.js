// we reference "text0" and assign it to the variable called "textField0"
const textfield0 = document.getElementById("text0");
textfield0.innerHTML = average(20, 20);

const headertext5 = document.getElementById("header5");
headertext5.innerHTML = "This is my website!";

headertext5.style.color = "pink";


const button0 = document.getElementById("button0");

button0.style.backgroundColor = "red";
button0.style.color = "white";
button0.style.borderColor = "blue";
button0.style.cursor = "pointer";


function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function average(Siffra1, Siffra2) {
  return (Siffra1 + Siffra2) / 2;
  }


