let quoteMandela = "\"Education is the most powerful weapon, which you can use to change the world.\"";
console.log(quoteMandela);
let find = quoteMandela.indexOf("powerful");
console.log(`The indexOf "powerful" is: ${find}`);
let upperQuote = quoteMandela.toUpperCase();
console.log(upperQuote)
let characterQuote = quoteMandela.charAt(1);
console.log(`The character at index 1 is: ${characterQuote}`);
let findLast = quoteMandela.lastIndexOf("world");
console.log(`The lastIndexOf of "word" is: ${findLast}`);
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