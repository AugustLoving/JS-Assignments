// Very often in programming, we encounter a situation where -
// we want to use a loop to iterate the -
// same routine multiple times, e.g. 10 times, for greeting each person:
let numberOfPeople = 10;
for (let i = 0; i < numberOfPeople; i++) {
  console.log("Good Morning")
}

// om j är mindre än fem j++. j+1.
// staringIndex = 0. stoppingIndex = 5.
for (let j = 0; j < 5 ; j++) {
  console.log(j); // 0 1 2 3 4
}
// om j är mindre eller lika med 5.
for (let j = 0; j <= 5 ; j++) {
  console.log(j); // 0 1 2 3 4 5
}
// plus 2
for (let i = 0; i <= 5 ; i+=2){
  console.log(i);
}

// negative for loops
for (let i = 5; i > 0 ; i--){
  console.log(i);
}

for (let i = 5; i >= 0 ; i--){
  console.log(i);
}

for (let i = 5; i >= 0; i-=2){
console.log(i);
}

console.log("EXERCISE");
// exercise

for (let n = 0; n < 13; n++) {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber);
}

for (let n = 1; n <= 1024; n*=2) {
  console.log(n);
}

for (let n = 10; n>=0; n--){
  console.log(n);
}

function power(firstNumber, exponent){
  // here we cache the result
  let result = firstNumber;
  for (let i = 1; i < exponent; i++){
    // here we multiply the result by the firstNumber
    result *= firstNumber;
  }
  // once the loop is over, we return the result.
  return result;
}
console.log(power(4, 24))

// arrays
let studentNames = ["Alice", "Benjamin", "Clara", "David", "Elena", "Felix", "Greta", "Hugo", "Isabella", "Jasper"];

studentNames[3] = "August";
studentNames.push("Nils");

console.log( "We have: " + studentNames.length + " students");

for (let i = 0; i < studentNames.length; i++) {
  console.log("Good morning " + studentNames[i] + "!");

}

