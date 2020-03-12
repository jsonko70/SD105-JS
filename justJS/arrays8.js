//filter, reduce, join, every, some, find
let ages = [32, 12, 33, 16, 15, 40, 80, 55, 11, 6];
console.log(ages.reduce( (total, age) => total + age)); //shrinks the array to one value

// let newArray = ages.filter(checkAdult)
// console.log(newArray);      

// newArray = ages.filter(age => age <= 18); // placeholder to get age, one at a time
// console.log(newArray); // returns the same result as previous one

// function checkAdult(age) {
//      return age <= 18;

// newArray = ages.filter(age => (age % 5) == 0); 
// console.log(newArray); 
// console.log(newArray.join(", "));

// newArray = ages.every(age => (age > 5));
// console.log("Every age > 5 " + newArray);

// newArray = ages.some(age => (age > 5));
// console.log("Every age > 5 " + newArray);

// newArray = ages.find(age => (age > 32));
// console.log("Every age > 32 " + newArray);

// function checkAdult(age) {
//      return (age % 5) == 0;
// }

// let names = ['Liya', 'Rain', 'Lindsey', 'Peyton', "Jarvis", 'ALexis', 'Julius', 'John', 'Brian']
// newArray = names.filter(name => name.length >= 6);
// console.log(newArray);
// console.log(newArray.join("/"));

// ages.forEach(age => console.log (age));

// ages.forEach(age => showAge(age));
// function showAge(age) {
//     if (age < 10) {
//         console.log("Child " + age);
//     } else if (age >= 10 && age < 20) {
//         console.log("Teenager " + age); 
//     } else if (age >= 20 && age < 43) {
//         console.log("Young adult " + age);
//     } else if (age >= 43) {
//         console.log("Just plain old " + age);
//     }
// }