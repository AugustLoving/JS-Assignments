let score = 0;
function increaseBy(inputNumber) {
  return score += inputNumber;
}

const knappen = document.getElementById("button0");

knappen.innerHTML = increaseBy(1);




