// This is my day:

let date = new Date();
let hour = date.getHours();

console.log(date);
console.log(hour);

if (hour >= 23 || hour < 6) {
    console.log(`Julius is sleeping`);
} else if (hour == 6) {
    console.log(`Julius wakes up for morning devotional`);
} else if (hour >= 7 && hour <= 8) {
    console.log(`Julius is having breakfast and dropping kids at school`);
} else if (hour >= 8 && hour <= 13) {
    console.log(`Julius is at Edge Tech Academy learning JAVA`);
} else if (hour > 13 && hour <= 18) {
    console.log(`Julius is working at his Consulting Business`);
} else if (hour > 18 && hour <= 20) {
    console.log(`Julius is preparing to teach a class at DBU`);
} else if (hour == 20 && hour <= 22) {
    console.log(`Julius is at DBU teaching a class`);
} else if (hour > 22 && hour <= 23) {
    console.log(`Julius is driving back home`);
}