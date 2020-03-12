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
for (i = 0; i < item.length; i++) {
    if (item.startsWith("C")) {
        console.log(item);
    }