let workPlace = "Dallas Baptist University";
let position = "Adjunct Faculty";
let address = "3000 Mountain Creek Pkwy";
let monthStarted  = 01;
let dateStarted = 13;
let yearStarted = 2006;

console.log("I work at " + workPlace + " as an " + position);
console.log(workPlace + " is located at " + address);

console.log(monthStarted + dateStarted + yearStarted);

let sum = workPlace + position + address + monthStarted + dateStarted + yearStarted;
console.log(sum);
sum = monthStarted + dateStarted + yearStarted + workPlace + position + address;
console.log(sum);

let x = dateStarted;
x += 7;
x *= 13;
x /= 6;
console.log(x);