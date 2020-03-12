//push, shift, unshift, pop
let names = [];
names.push("A");
names.push("B");
names.push("C");
names.push("E");
names.push("F")
console.log(names);
names.unshift(names.pop()); 
let last = names.pop(); //remove from end add to the start
names.unshift(last);
console.log(names)

let first = names.shift();
names.push(first);
console.log(names)

