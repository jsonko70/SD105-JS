//Example 1
let yearEndTotal2019 = calcuateYearEndTotal(400, 500)
console.log(yearEndTotal2019)
function calcuateYearEndTotal(a, b) {
    let yearEndTotal;
    yearEndTotal = (a + b);
    return yearEndTotal;
}

//Example 2
let salesFor2019 = [400, 500];
yearEndTotal2019 = salesFor2019.reduce((total, sales) => total + sales);
console.log(yearEndTotal2019);

//Example 3
let sales2019 = 0; 
for (let i = 0; i < sales2019.length; i++) {
    yearEndTotal2019 += sales2019[i].length;
}
console.log(yearEndTotal2019)

//Example 4
const sales = {
    amounts: [400, 500],
    sum: function() { 
      return this.amounts.reduce(function(acc, num) { 
        return acc + num;
      });
    }
  }
console.log(sales.sum());

