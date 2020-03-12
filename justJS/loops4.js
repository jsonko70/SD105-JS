let arX = [5, 8, 11, 14, 17, 20, 23, 27, 30, 33, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64];
console.log(`my array is ${arX.length} elements long`) // prints the same as next console.log below but this might be better
console.log('my array is ' + arX.length + ' elements long')
let totalReduce = arX.reduce( (total, nextNum) => total + nextNum);
console.log(totalReduce);
let totalAlt = 0;
for (let i = 0; i < arX.length; i++) { // i stands for index or position. The array starts at position 0, which has #5 and loops through the entire array i.e. i++
    totalAlt = totalAlt + arX[i];
    if (arX[i] > 10) {
        console.log('for ' + i + " " + arX[i]);
    }
    if (arX[i] % 2 == 0) {
        console.log(`${arX[i]} is even`);
    }

    if (arX[i] % 2 == 0) {
        console.log(`${arX[i]} is even`);
    }
    if (arX[i] % 2 == 0) {
        console.log(`${arX[i]} is even`);
    }
        if (arX[i] < totalReduce / arX.length)
    console.log(`${arX[i]} is < the average`);
}

for (const num of arX) {
    if (num > 10)
        console.log('forof ' + num)
}
console.log();
for (const num of arX) {
    if (num < totalAlt / arX.length)
        console.log(`${num} is < the average ${totalAlt / arX.length} `);
}