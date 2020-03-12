let friends = ["Mike", "Eva", "Laura", "Christine", "Michael", "Fred", "John", "Beatrice", "Peter", "Isaac"]
//print out elements of array
console.log(`I have ${friends.length} movies`);

for (const friend of friends) {
    if (friend.length > 8) // print elements longer than 8 characters
        console.log(`${friend} is ${friend.length} characters long`);
    if (friend.includes('a')) // print elements containing 'a'
        console.log(`Includes an 'a' ${friend}`);
    if (friend.indexOf('a') != -1) // alt to print elements containing 'a'
        console.log(`IndexOf 'a' ${friend}`);
    if (friend.startsWith('M')) //print elements that start with 'M'
        console.log(`${friend} starts with an 'M'`);
    if (friend.length > 7 && friend.toLowerCase().endsWith('e')) // print elements longer than 7 and ends with 'e'
        console.log(`Friend that is longer than 7 and ends with an 'e' ${friend}`);
}
// // remove last 3 elements
// let last = friends.pop();
// let nextToLast = friends.pop();
// let nextToNextToLast = friends.pop();

// // add last 3 removed elements to start of array
// friends.unshift( last, nextToLast, nextToNextToLast );
// console.log(friends); 

// // remove the middle element of the array
// let middle = friends.length/2;
// middle = Math.round(middle);
// let mid = friends.splice(middle, 1);
// console.log();

// //count all characters in the strings alt 1
// let str = "".concat(friends);
// str = str.replace(",","");
// console.log(str + " is " + str.length + ' long' )
// //count all characters in the strings alt 2
// str = friends.join("");
// console.log(str + " is " + str.length + ' long' )
// //count all characters in the strings alt 3
// let allFriends = 0; 
// for (let i = 0; i < friends.length; i++) {
//     allFriends += friends[i].length;
// }
// // counts characters in each string 
// let allNewFriends = 0; 
// for (let i = 0; i < friends.length; i++) {
//     console.log(`${friends[i]} is ${friends[i].length} characters`);

// // also counts characters in each string 
// for (let friend of friends) {
//     console.log(`${friend} is ${friend.length} characters long`)
//     allFriends =+ friend.length;
// }