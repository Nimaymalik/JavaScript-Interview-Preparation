const coding = ["js", "java", "c", "python"];

// coding.forEach((key) => {
//   console.log(key);
// });

//filter method
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = nums.filter((i) => {
  return i > 4;
});

// console.log(num)

//map method
const num1 = [1, 2, 3, 4, 5, 6, 7];
let nu=num1.map((num) => num+10);
console.log(nu);

