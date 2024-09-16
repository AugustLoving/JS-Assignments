const birthYear = 2010;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);
let isChild = ageOfPerson <= 10 ;

let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

let isAdult = ageOfPerson >= 18;


console.log(isChild);
console.log(isTeenager);
console.log(isAdult);


let playerTouchGround = true;
let playerHasJetpack = true;

if (playerTouchGround) {
  console.log("player is on the ground");
  console.log("player can jump");
}

else if (playerHasJetpack) {
  console.log("player can jet away");
}

else{
  console.log("player is not on the ground");
  console.log("player can not jump");
}


