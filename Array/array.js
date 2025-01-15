const myarr = [1, 2, 3, 4];
const nyHero = ["hi", "my", "name"];
const arr = new Array(1, 2, 3, 4);

arr.push(5);
arr.push(6);
arr.pop();
arr.unshift(9);
arr.shift();
console.log(arr);

nyHero.join();

console.log("a", nyHero);
const myn1 = myarr.slice(1, 3);
console.log("b", myn1);

const myn2 = myarr.splice(1, 3);
console.log("c", myn2);
