const birthYear = 2000;
const currentYear = 2024;
const favoriteNumber = 20;

let ageOfPerson = currentYear - birthYear;
console.log("your age is " + ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

if (isChild) {
  console.log("You are a child.");
}

if (isTeenager) {
  console.log("You are a teenager.");
}

if (isAdult) {
  console.log("You are an adult.");
}

console.log("Your favorite number is " + favoriteNumber);

if (favoriteNumber > ageOfPerson) {
  console.log("favorite number is greater.");
}

else if (favoriteNumber === ageOfPerson) {
  console.log("they are the same");
}

else {
  console.log("Age is greater.");
}


if (favoriteNumber % 2 === 0) {
  console.log("your favorite number is even.");
}

else {
  console.log("Your favorite number is odd.");
}

