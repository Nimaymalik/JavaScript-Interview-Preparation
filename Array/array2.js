const marvel = ["thor", "spiderman", "vision"];
const dc = ["superman", "aquaman", "wonder women"];

//it will print array inside array
marvel.push(dc);
console.log(marvel);

//return the new array
const combine = marvel.concat(dc);
console.log(combine);

//used as a spread operations because this will spread the individual value
const allhero = [...marvel, ...dc];
console.log(allhero);

//this will slipt all the array and create a single array
const array = [1, 2, 3, 4, [5, 6, 7], 8, 9, [1, 2]];
const myreal = array.flat();
console.log(myreal);

console.log(Array.isArray("Nimay"));

// convert string into an array
console.log(Array.from("nimay"));

// this will create an array from different objects
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
