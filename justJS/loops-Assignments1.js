let declaration = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";

// code to display the number of words in an array
let words = declaration.split(" ");
let stringLength = words.length;
console.log(`The length of the array is: ${stringLength}`);

// smallWords = words.filter(w => w.length <= 7);

// a for loop, loop through each word and add words 7 characters or less to a new array.
words = declaration.split(/[ ,;.:-]/);
smallWords = words.filter(w => w.length > 0 && w.length <= 7);
console.table(smallWords);

// for (let word of smallWords) {
//     if (word.startsWith('t')) {
//         word = word.toUpperCase()
//         console.table(words)
//     }
// }
// for loop, loop through the new list of short words. If the word starts with (startsWith) the letter 't' uppercase that word
for (let i = 0; i < smallWords.length; i++) {
    if (smallWords[i].startsWith('t')) {
        smallWords[i] = smallWords[i].toUpperCase();
    }
}
console.table(smallWords)