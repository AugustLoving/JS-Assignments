let cirkleinput = 2;
let areaoutpout = 0;
cirkleinput **= 2;
areaoutpout = cirkleinput * Math.PI;

console.log(areaoutpout);


let posinput = 11
let negoutput = -posinput;

console.log(negoutput);

//med function
function calculateBMI(weight, height) {
  return weight / (height * height);
}

const weight = 70;
const height = 1.82;

const bmi = calculateBMI(weight, height);

console.log(bmi);

//utan function
const vikt = 70;
const langd = 1.82;

const bmiet = vikt / (langd * langd);

console.log(bmiet);

// med function
function raknaHypotenusan(a,b) {
  return Math.sqrt(a * a + b * b);
}

const  sida1 = 3;
const sida2 = 4;

const hypotenusan = raknaHypotenusan(sida1, sida2);

console.log(hypotenusan);

//utan function
const side1 = 3;
const side2 = 4;

const hypothenus = Math.sqrt(sida1 * sida1 + sida2 * sida2);

console.log(hypothenus);


const sekunder = 111;

const minuter = Math.floor(sekunder / 60);
const sekunderkvar = sekunder % 60;

console.log(minuter);

