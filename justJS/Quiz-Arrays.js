// Question 3
item = [];
item.unshift("Java");
console.log(item);
item.push("C#");
console.log(item);
item.push("Node.js");
console.log(item);
item.push("HTML");
console.log(item);
item.unshift("CSS3");
console.log(item);
let CSS3 = item.shift();
item.push(CSS3);
console.log(item);

// // Question 4
item = [];
item.unshift("Java")
item.push("C#");
item.push("Node.js");
item.push("HTML");
item.unshift("CSS3");
item.shift();
item.push("CSS3");
item.sort();

let x;
for (x of item) {
    console.log(x);
}

// Question 5
let array = ["Java", "C#", "Node.js", "HTML", "CSS3"];
let filterList1 = array.filter(language => {
    return language[0] === "C";
});
console.log(`Words that start with "C": ${filterList1}`);

// // Question 6
let array = ["Java", "C#", "Node.js", "HTML", "CSS3"];
let filterList2 = array.filter(word => word.length === 4);
console.log(`Elements that have a length of 4: ${filterList2}`);

// Question 7
let array = ["Java", "C#", "Node.js", "HTML", "CSS3"];
let index1 = array.indexOf("Node.js");
console.log(`The phrase 'Node.js' is at ${index1} in the array`);
let index2 = array.indexOf("MongoDB");
console.log(`The phrase 'MongoDB' is at ${index2} in the array`);