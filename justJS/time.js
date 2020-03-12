// Response to Question #1
function getSeconds() {
    let date = new Date();
    let seconds = date.getSeconds();
    return seconds;
}
let curSeconds;
curSeconds = getSeconds();
console.log("Current Seconds = " + curSeconds);

// Response to Question #2
function getMinutes() {
    let date = new Date();
    let minutes = date.getMinutes();
    return minutes;
}
let curMinutes;
curMinutes = getMinutes();
console.log("Current Minutes = " + curMinutes);

function getHours() {
    let date = new Date();
    let hours = date.getHours();
    return hours;
}
let curHours;
curHours = getHours();
console.log("Current Hours = " + curHours);
console.log(curHours + ":" + curMinutes + ":" + curSeconds);

// Response to Question #3
let name;
name = alphabetPosition("julius sonko");
console.log(name);
function alphabetPosition(name) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphaNums = [];
    for (let i = 0; i < name.length; i++) {
        let idx = alphabet.indexOf(name[i]);
        if (idx === -1) {
            continue;
        } else {
            alphaNums.push(idx + 1);
        }
    }
    return alphaNums.join(" ");
}

// Response to Question #4
let convertedString;
convertedString=convert("aaabbbcccddd");
console.log(convertedString)
function convert(str) {
    let curSeconds;
    curSeconds = getSeconds();

    if (curSeconds < 30) {
        str = str.toUpperCase();
    } else {
        str = str.toLowerCase();
    }
    return str;
}