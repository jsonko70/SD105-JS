//filter
let ages = [32, 12, 33, 16, 15, 40, 80, 55, 11, 6];

let newArray = ages.filter(checkAdult)
console.log(newArray);   

newArray = ages.filter(age => age <= 18); // placeholder to get age, one at a time
console.log(newArray); // returns the same result as previous one

function checkAdult(age) {
    return age <= 18;
}
newArray = ages.filter(age => age > 35); 
console.log("ages > 35 " + newArray);  
console.log("There " + newArray.length + " people over 35");
console.log("The last person in the list over 35 is " + newArray[newArray.length-1]); //on the test last element in the array

let names = ['Liya', 'Rain', 'Lindsey', 'Peyton', "Jarvis", 'ALexis', 'Julius', 'John', 'Brian']
newArray = names.filter(name => name.length >= 6);

newArray = names.filter(name => name.charAt(1) == 'a'); //what charater is at position 1
console.log(newArray);

newArray = names.filter(name => name.charAt(0) == 'J'); // find out what element is at position 0 is a J
newArray = names.filter(name => name.charAt(0) == 'J' && name.length!=4); // find out what element is at position 0 is a J
console.log(newArray.join("/"));
newArray = names.filter(name => name.startsWith('J') && name.length!=4); // find out what element is at position 0 is a J
console.log(newArray.join("/"));

let old = ages.find(age => (age > 33));
console.log("First old person in array: " + old);

let index = ages.findIndex(age => (age > 33));
console.log(`Location of the first person older than 33 is ${index} and that age is ${ages[index]}`);