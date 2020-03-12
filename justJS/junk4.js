let result = convertCtoF(11)
console.log(result);
function convertCtoF (temp) {
    let fahrenheit;
    fahrenheit= ((temp * 9) / 5) + 32;
    return fahrenheit;
}

let ans = convertMilestoKm(11)
console.log(ans);
console.log(ans.toFixed(2));
function convertMilestoKm(distanceInMiles) {
    let kilometers;
    kilometers = (distanceInMiles * 1.609344);
    return kilometers;
}

let answer = convertIntoCm(10);
console.log(answer);
function convertIntoCm(inchestoCm) {
    let centimeters;
    centimeters = (inchestoCm * 2.54);
    return centimeters;
}

let greeting = hello('Edge Tech');
console.log(greeting);
function hello(you) {
    return "Hello " + you + "!";
}
let action = trafficLightWaitTimes('yellow')
console.log(action);
function trafficLightWaitTimes(lightColor) {
    let waitTime;           // number of seconds before change
    switch (lightColor.toLowerCase()) {
        case   'red'      :    waitTime = 20;  break;
        case   'yellow'   :    waitTime = 5;   break;
        case   'green'    :    waitTime = 30;  break;
        case   'leftturn' :    waitTime = 15;  break;
        default           :    waitTime = 10;  break;
    }
    return waitTime;
}