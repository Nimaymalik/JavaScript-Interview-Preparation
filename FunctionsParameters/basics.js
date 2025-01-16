//function and parameters
function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
// console.log(result);

//functions and objects

//rest operator
function calculate(...num1) {
  return num1;
}
console.log(calculate(1, 2, 3, 4));

//objects
const user = {
  username: "nimay",
  price: 122,
};
function handle(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handle(user);
