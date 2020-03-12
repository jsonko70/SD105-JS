let studentName = [];                 //  Boom! that's it. you now have an array. It has 0 elements
studentName[199] = 'hello';           //  This just made your array 200 elements long
let moreStudents = new Array(200);    //  Now you have an array with 200 undefined elements

studentName[149] = "E. T. Academy";
studentName[0] = "Ima Student";


let studentName.length

studentName[studentName.length-1] = "Zeke Zamboni";     // always the last name called in class

//        JS uses square brackets to define arrays.
let cableTVShows = [];   // here is how we create an empty array
//        let's create arrays with some initial values
let tvShows = [ 'MASH', 'NCIS', 'Star Trek', 'Big Bang Theory' ];
let testScores = [ 100, 88, 47, 98, 32, 79 ];

console.log(tvShows[0]);          // Prints 'Mash' to the console
console.log(tvShows[2]);          // not a surprise this prints 'Star Trek'
console.log(tvShows[tvShows.length-1]);    // This the last entry ''Big Bang Theory'
console.log(tvShows[8]);          // you show already know that this prints undefined
tvShows[8] = 'Friends';           // What do you think this will do? 
console.log(tvShows[8]);          // Any guesses what this will print out? 

console.log(tvShows[7]);          // Now that we have an entry at [8] what will this print? 

tvShows.push('The Flash');        // This will add our new entry at the end of the array
tvShows.push('The Expanse');
tvShows.push('Friday Night Lights');
tvShows.push('Dr. Who');
tvShows.push('Designated Survivor');
tvShows.push('Mickey Mouse Club');
console.log(tvShows[tvShows.length-1]);    // This the last entry