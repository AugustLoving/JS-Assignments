// Very often in programming, we encounter a situation where -
// we want to use a loop to iterate the -
// same routine multiple times, e.g. 10 times, for greeting each person:
let numberOfPeople = 10;
for (let i = 0; i < numberOfPeople; i++) {
  console.log("Good Morning")
}

// om j är mindre än fem j++. j+1.
for (let j = 0; j < 5 ; j++) {
  console.log(j) // 0 1 2 3 4
}
// om j är mindre eller lika med 5.
for (let j = 0; j <= 5 ; j++) {
  console.log(j) // 0 1 2 3 4 5
}
// plus 2
for (let i = 0; i <= 5 ; i+=2){
  console.log(i)
}

// negative for loops
for (let i = 5; i > 0 ; i--){
  console.log(i);
}

for (let i = 5; i >= 0 ; i--){
  console.log(i)
}

for (let i = 5; i >= 0; i-=2){
console.log(i)
}
