let studentNames = ["Alice", "Benjamin", "Clara", "David", "Elena", "Felix", "Greta", "Hugo", "Isabella", "Jasper"];

studentNames[3] = "August";
studentNames.push("Nils");

console.log( "We have: " + studentNames.length + " students");

for (let i = 0; i < studentNames.length; i++) {
  console.log("Good morning " + studentNames[i] + "!");

}

let occurrences = new Array(11).fill(0);

console.log("I will roll 10 000 numbers between 0 and 10");

for(let i = 0; i < 10000; i++) {
  let randoNum = Math.floor(Math.random() * 11);
  occurrences[randoNum]++
}

for (let j = 0; j < occurrences.length; j++) {
  console.log("I rolled " + j + " a total of " + occurrences[j] + " times");
}
