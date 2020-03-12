let declaration = "\"We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.\"";
let find = declaration.indexOf("Governments");
console.log(find);
let findAll = declaration.indexOf("all"); 
console.log(findAll);
let firstComma = declaration.indexOf(",");
console.log(firstComma);
let nextComma = declaration.indexOf(",", firstComma +1); 
console.log(nextComma);
let subString = declaration.substr(firstComma +7, nextComma -firstComma -7);
console.log(subString)
let repl = declaration.replace(/ah/g, "ha");
console.log(repl);
let howLong = "Length: " + declaration.length;
console.log(howLong);