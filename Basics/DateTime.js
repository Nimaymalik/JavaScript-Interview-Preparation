//Dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); //object

console.log(Math.floor(Date.now() / 1000));
