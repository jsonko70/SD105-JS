const volcanoes = require('./volcanoes.json');
// How many volcanoes have erupted todate
// console.log(volcanoes.length)
volcanoes.forEach(v => v.DEATHS = +v.DEATHS);

// // Find volcanoes which erupted in a given year
// eruptedInAnyYear(1975); // call the function
// function eruptedInAnyYear(year) {
//     for (const vol of volcanoes)
//         if (vol.Year == year)
//             console.table(vol);
// }
// // Find volcanoes in a given country
// eruptedIn('Italy');
// function eruptedIn(country) {
//     for (const vol of volcanoes) {
//         if (vol.Country == country)
//             console.table(vol);
//     }
// }
// // Alt, find volcanoes in a given country
// eruptedInCountry('Italy');

// function eruptedInCountry(country) {
//     let count = 0;
//     deaths = 0;
//     for (const vol of volcanoes) {
//         if (vol.Country == country) {
//             //console.table(vol);
//             count++;
//             deaths += vol.DEATHS * 1;
//         }
//     }
//     console.log(`Volcanoes in ${country}: ${count}\nDeaths: ${deaths}`)
// }
// filter function - high order function
let listOfDeadlyVolcanoes;
listOfDeadlyVolcanoes = volcanoes.filter(v => v.Name.includes('Island'));

// total deaths from volcanoes
let totalDeaths = volcanoes.reduce((total, v) => total + v.DEATHS, 0); 
    console.table(`Total deaths: ${totalDeaths}`)

// average deaths from volcanoes
let averageDeaths = totalDeaths/volcanoes.length; 
    console.table(`Average deaths: ${averageDeaths.toFixed(0)}`)

// total elevation of volcanoes
let totalElevation = volcanoes.reduce((total, v) => total + v.Elevation, 0); 
    console.table(`Total elevation ${totalElevation}`)

// average elevation of volcanoes
let averageElevation = totalElevation/volcanoes.length
    console.table(`Average elevation ${averageElevation.toFixed(0)}`)


// // which  volcanoes caused the most deaths
// let count = 0;
// let totalDead = 0;
// let worst = volcanoes[0];
// for (const volcano of volcanoes) { // placeholder to hold each of the volcanoes
//     totalDead += volcano.DEATHS * 1;
//     if (worst.DEATHS * 1 < volcano.DEATHS * 1)
//         worst = volcano;
//     if (volcano.Year >= 1900 && volcano.Year < 2000)
//         count++;
// }
// console.log(`There were ${count} eruptions in the 20th century`)
// console.log(`Total death from volcanoes: ${totalDead}`)
// console.table(worst)

// // Eruptions between given years
// let eruptionsCount = eruptedBetween(1970, 2020)
// console.log(`Eruptions between two years ${eruptionsCount}`)

// function eruptedBetween(year1, year2) {
//     let add = 0; // variable
//     for (const vol of volcanoes) {
//         if (vol.Year >= year1 && vol.Year <= year2);
//         add++
//     }
//     return add;
// }
// // Find volcanoes which erupted above a given elevation
// let above;
// above = countEruptionsAbove(1000);
// console.log(`Eruptions above 1000 feet: ${above}`);

// function countEruptionsAbove(elevation) {
//     let count = 0;
//     for (const vol of volcanoes) {
//         if (vol.Elevation >= elevation) {
//             count++
//         }
//         return count;
//     }
// }
// let list = volcanoes.filter(v => v.Country == 'Italy');
// console.table(list);