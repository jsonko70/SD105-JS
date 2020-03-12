let declaration = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";

let words = declaration.split(" ");

// print words 7 characters or less
let smallWords = word.filter(w => w.length <= 7);

smallWords = [];
for (const word of words) { // alternative to the above filter code
	if (word.length <= 7) 
		console.table(smallWords);
	for (let i = 0; i < word.length; i++) {
		(newArray.push(word[i].toUpperCase().startsWith('t')))
		}
	}
	