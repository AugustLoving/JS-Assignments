
function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
console.log(multiplyBySelf(4));




function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(add(5,20));

const input1 = 2;
const input2 = 6;

function average(Siffra1, Siffra2) {
  return (Siffra1 + Siffra2) / 2;
}

console.log(average(input1,input2));


const firstName = "Ben";
const lastName = "Ting";
function welcome(firstName, lastname) {
  return "Welcome" + " " + firstName + " " + lastname + "!";
}

console.log(welcome(firstName, lastName));

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

console.log(randomNumber());


function numberToLetter(num) {
  const letters = ["A", "B", "C"] ;
  return letters[num];
}

console.log(numberToLetter(0));
console.log(numberToLetter(1));
console.log(numberToLetter(2));


function compareNumbers(num1, num2) {
  if (num1 === num2) {
    return "The numbers are equal";
  }
  else if (num1 > num2) {
    return "First number is greater";
  }
  else if (num1 < num2) {
    return "Second number is greater";
  }
}

console.log(compareNumbers(2, 3));


function convertNumbersToLetters(number) {
  if (number === 0) {
    return "A";
  }
  else if (number === 1) {
    return "B";
  }
  else if (number === 2) {
    return "C";
  }
  else{
    return "Invalid!"
  }

}

console.log(convertNumbersToLetters(2));




