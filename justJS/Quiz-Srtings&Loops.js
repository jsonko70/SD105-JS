
// // Question 9
// let height = {
//     'enock':3,
//     'ethan':5,
//     'jeremy':4
// };

// let tallest = '';
// for (let name in height) {
//     if(tallest !== '' && height[name] > height[tallest]) {
//         tallest = name;
//         console.log(name)
//     } else if (tallest === '') {
//         tallest = name;
//     }
// }
// return tallest;

// //Alt1let num1, num2, num3;let tallestChild = tallest(4, 5, 6);function tallest(num1, num2, num3) {    if (num1 > num2 && num1 > num3) {        console.log(num1 + " is tallest");    } else if (num2 > num1 && num2 > num3) {        console.log(num2 + " is tallest");    } else if (num3 > num1 && num3 > num2) {        console.log(num3 + " is tallest");    }} //Alt2let max = Math.max(num1, num2, num3);console.log(max);// Alt3let ar = [num1, num2, num3];let max; max = Math.max(...ar);console.log(max);

// // Question 10
// let loops = loop(6);
// console.log(loops);

// function loop(jump) {
//     let count = 0; // pictcher 
//     let date = new Date();
//     let hour = date.getHours()
//     let sec = date.getSeconds()
//     for (let i = hour; i < sec; i += jump) {
//         count++
//         console.log(i);
//     }
//     return count; // catcher
// }

//Question 11
let quoteMandela = "\"Education is the most powerful weapon, which you can use to change the world.\"";
console.log(quoteMandela);
let find = quoteMandela.indexOf("powerful");
console.log(`The indexOf "powerful" is: ${find}`);
let upperQuote = quoteMandela.toUpperCase();
console.log(upperQuote)
let characterQuote = quoteMandela.charAt(1);
console.log(`The character at index 1 is: ${characterQuote}`);
let findLast = quoteMandela.lastIndexOf("the");
console.log(`The lastIndexOf of "the" is: ${findLast}`);
let howLong = quoteMandela.length;
console.log(`The length of the quote is: ${howLong}`);
let repl = quoteMandela.replace("world", "globe");
console.log(repl);
let findAll = quoteMandela.indexOf("which"); 
console.log(findAll);
let findComma = quoteMandela.indexOf(",");
console.log(findComma);
let findPeriod = quoteMandela.indexOf(".", findComma +1); 
console.log(findPeriod);
let subString = quoteMandela.substr(findComma +2, findPeriod -findComma -2);
console.log(`Extracted part: ${subString}`);



