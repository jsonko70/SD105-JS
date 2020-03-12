// for loop, it looks at all values in an array
// for (let i = 0; i < 100000; i++) {
//   console.log('---> ' + i);
// }
// console.log('done');

let ar = [100, 5, 6, -10, 7, 8, -500, 10, 57, 86, 90, 700, 78, 45];
// for (let i = 0; i < ar.length; i++) {
//     // multiply elements by 5
//     //ar[i] = ar[i] * 5;
//     // print the numbers greater than or equal to 20 
//     if (ar[i] >= 20) {}
//     // print the numbers greater than or equal to 20 and greater than 80
//     if (ar[i] >= 20 && ar[i] < 80) {
//         //   console.log(ar[i]);
//     }

//     // print the numbers <= 20 or greater than 80
//     if (ar[i] <= 20 || ar[i] > 80) {
//         // console.log(ar[i]);
//     }
// }
// for (let num of ar) {
//     if (num <= 20 || num > 90) {
//         //  console.log(ar[i]);
//     }
// }

// // print divisible by 13 
// if (ar[i] % 13 == 0) {
//     //   console.log(ar[i]);
// }// console.log(`${i} : ${ar[i]}`);
//}

// let smallest = ar[0];
// for (let i = 0; i < ar.length; i++) {
//     if (ar[i] < smallest) {
//         smallest = ar[i];
//         console.log(smallest)
//     }
// }
// let smallest = ar[0];
// let biggest = ar[0];
// for (const num of ar) {
//     if (num < smallest) {
//         smallest = num; // to save the number you are comparing to
//     }
//     if (num > biggest) {
//         biggest = num;
//     }
// }
// console.log(`Smallest number is ${smallest} and biggest is ${biggest}`)

// variables to track:
//      number of cars sold this month
//      a list all cars sold this month
//      the name of one of the cars sold
//      JSON object descibing one the cars sold

// let carsSold = [];

let states = ["Texas", "California", "New Mexico" "Arizona", "Ohio", "Iowa", "Louisiana", "Maine", "Florida", "Georgia", "Michigan"];
let longestState = states[0];
for (const state of states) {
    // What states start with 'New'
   if (state.startsWith('New'))
        console.log(`Starts with New: ${state}`);
    // print states that contain 'x'
   if (state.indexOf('x') >= 0);
        console.log(`Contatins an x: ${state}`);
}
if (state.length > longestState.length) {
    longestState = state;
}  
states.sort();
console.table(states) 
    }
}

for ()
