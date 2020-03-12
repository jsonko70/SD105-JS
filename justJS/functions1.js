
let todayPlus1 = getTomorrow();
console.log(todayPlus1);

function getFutureDate(0) {
    let today = new Date();
    today.setDate(today.getDate() + 1)
    let strTomorrow = (today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullFullYear());
    return strTomorrow;