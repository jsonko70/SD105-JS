let movies = ['Arrival', 'Interstellar', '2001', 'The Abyss',
    'Batman and Robin', 'Wild Wild West', 'Plan 9', 'Casablanca', 'Buckeroo Bonzai',
    'the Fifth Element', 'Back to the Future'
];

console.log(`I have ${movies.length} movies`);

for (const movie of movies) {
    if (movie.length > 8)
        console.log(`${movie} is characters ${movie.length} long`);
    if (movie.includes('W'))
        console.log(`Includes a 'W' ${movie}`);
    if (movie.indexOf('W') != -1)
        console.log(`IndexOf    'W' ${movie}`);
    if (movie.startsWith('B'))
        console.log(`${movie} starts with a 'B'`);
    if (movie.length > 7 && movie.toLowerCase().endsWith('t'))
        console.log(`long movie that ends with a 't' ${movie}`);
}
let last = movies.pop();
let nextToLast = movies.pop();
let nextToNextToLast = movies.pop();
movies.unshift( last, nextToLast, nextToNextToLast );

let middle = movies.length/2;
middle = Math.round( middle );
let mid = movies.splice( middle, 3);
console.log();

let str = "".concat(movies);
str = str.replace(",","");
console.log(str + " is " + str.length + ' long' )

str = movies.join("");
console.log(str + " is " + str.length + ' long' )

let allMovies = 0; 
for (let i = 0; i < movies.length; i++) {
    allMovies += movies[i].length;
}
console.log(allMovies)