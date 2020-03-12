//Review Exercises on FUNCTIONS

let ans = calculator(11, 11, "*"); // call a function and stored in ans
console.log(`my answer is: ${ans}`) // one way of returning answer
console.log('my answer is: ' + ans) // another way of returning answer

/**
 *  calculator
 *     takes two numbers and runs them against the specfied operator
 *     for example
 *          calculator(10, 40, "+");    // returns 50
 *          calculator(10, 40, "*");    // returns 400
 * @param  num1     just the first number to be operated on
 * @param  num2     the second number
 * @param  operator what math operation we want to do
 *                  the operator could be "+", "-", "/", "%", "^"
 * @returns         result of the math operation we performed
 */
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+": result = num1 + num2;  break;
        case "-": result = num1 - num2;  break;
        case "*": result = num1 * num2;  break;
        case "/": result = num1 / num2;  break;
        case "%": result = num1 % num2;  break;
        case "^": result = num1 ** num2; break;
        default : result = NaN;
    }
    return result;
}


let currentHour = getDatePart('h');
console.log(currentHour);
let currentMinute = getDatePart('m');
console.log(currentMinute);
let currentSeconds = getDatePart('s');
console.log(currentSeconds);
let currentDate = getDatePart('d');
console.log(currentDate);
let currentMonth = getDatePart('M')+1;
console.log(currentMonth);
let currentYear = getDatePart('y');
console.log(currentYear);
console.log(getDatePart("h") +":"+getDatePart("m")+":"+getDatePart("s"));
let currentHourPlus5 = getDatePart('h')+5;
console.log(currentHourPlus5);
function getDatePart(datePart) {
    let time;
    let now = new Date(); // this will get you the current date and time
    switch (datePart) {
        case "h" : time = now.getHours();     break;
        case "m" : time = now.getMinutes();   break;
        case "s" : time = now.getSeconds();   break;
        case "d" : time = now.getDate();      break;
        case "M" : time = now.getMonth();     break;
        case "y" : time = now.getFullYear();  break;
    }
    return time;
}