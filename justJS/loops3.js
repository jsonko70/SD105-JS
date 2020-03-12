// While loop - keeping on adding and condition is fulfilled
let count = -5;
while (count < 10) {
    console.log("While : " + count);
    count++;
}

// do while it only once - do want to do again e.g. ATM transaction
do {
    console.log("do while: " + count);
    count++;
} while(count < 10)

let ar = [1, 3, 4, 43, 3, 88, 14, 6, 234];
arX.forEach(thing => console.log('foreach ' + thing));

for (let i = 0; i < arX.length; i++) { // if you wish to add a 2, change i++ to i+=2
    console.log('for ' i + " " + arX[i]);
}
for (const num of ar) {
    console.log(num)
}

let ar = [];
