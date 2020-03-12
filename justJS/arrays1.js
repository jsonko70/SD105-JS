// An array of fruits
let fruits = []; // An empty array to hold types of fruits 
fruits.unshift("pear");
fruits.unshift("papaya");
fruits.unshift("grape");
fruits.unshift("strawberry");
fruits.unshift("lemon");
fruits.push("orange");
fruits.push("mango");
fruits.push("banana");
fruits.push("pineapple");
fruits.push("apple");
console.log(fruits)

let firstFruit = fruits.shift();
console.log(fruits);
let secondFruit = fruits.shift();
console.log(fruits);

secondFruit = secondFruit.toUpperCase();
console.log(secondFruit);

fruits.push(secondFruit);
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.forEach(fruit => console.log(fruit));