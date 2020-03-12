/**
 * Created by Edge Tech Academy on 4/21/2017.
 */

let flight = 418.12;
let hotel = 113.85;
let car = 99.99;
const TAX_RATE = 0.0825;
let subtotal, tax, total;

//  flight + hotel
subtotal = flight+hotel;
tax = subtotal * TAX_RATE;
total = subtotal + tax;
console.log("Flight + hotel = $"+subtotal. toFixed(2));
console.log("tax $"+tax.toFixed(2));
console.log("total $"+total.toFixed(2));

//  flight + car
subtotal = flight+car;
Tax = subtotal * TAX_RATE;
total = subtotal + tax;
console.log("Flight + car $"+subtotal.toFixed(2));
console.log("tax $"+tax.toFixed(2));
console.log("total $"+total.toFixed(2));

//  flight + hotel + car
subtotal = flight+hotel+car;
tax = subtotal * TAX_RATE;
total = subtotal + tax;
console.log("Flight + hotel + car $"+subtotal.toFixed(2));
console.log("tax $"+tax.toFixed(2));
console.log("total $" +total.toFixed(2));

//-------------------------------------------------------------------------
//      now with 100% more functions and 33% less code!
//-------------------------------------------------------------------------
let totalTripCost;

totalTripCost = tripCost(123.45, 234.56, 0);
totalTripCost += tripCost(6789.01, 0, 765.43);
totalTripCost += tripCost(567.89, 567.89, 432.10);
console.log("My three trips will cost: $" + totalTripCost);

//-------------------------------------------------------------------------

function tripCost(flight, hotel, car) {
	let subtotal = flight + hotel + car;
	let tax = subtotal * TAX_RATE;
	let total = subtotal + tax;

	console.log("Flight + hotel + car $"+subtotal.toFixed(2));
	console.log("tax $"+tax.toFixed(2));
	console.log("total $" +total.toFixed(2));
	console.log();

	return total;
}
