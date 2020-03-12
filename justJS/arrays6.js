//sort,  reverse, indexOf
let names = [];
names.push("A");
names.push("Z");
names.push("C");
names.push("W");
names.push("E");
names.push("Y")
names.push("B");
console.log(names);
names.reverse();
console.log(names);
names.sort();
console.log(names);
let whereIsW = names.indexOf('W');
console.log(whereIsW)
let w = names.includes('W');
console.log(w);
if (w) {
    let whereIsW = names.indexOf('W');
    console.log(whereIsW);
    names.splice(console.log(whereIsW, 1));
    console.log(names);
}