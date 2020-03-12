let item1Price = 4.00;
let item2Price = 6.00;
let item3Price = 5.12;
let item4Price = 3.42;

let subTotal = item1Price+item2Price+item3Price+item4Price;
const salesRate = 0.0825;
let salesTax = subTotal * salesRate;
let total = subTotal+salesTax;

console.log("Your purchase comes to $"+ subTotal.toFixed(2) +" plus tax of $" +salesTax.toFixed(2) + " for a total of $" + total.toFixed(2)+"." + " Thanks for shopping at our store.");