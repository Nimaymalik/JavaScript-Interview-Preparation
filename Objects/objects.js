//objects literals

//adding a symbol and print it
const mySymbol = Symbol("key");

const jsUser = {
  name: { fullname: "nimay malik" },
  [mySymbol]: "mykey1",
  age: 21,
  location: "agra",
  email: "nimay@gmail.com",
};
console.log(jsUser);

console.log(jsUser["name"]);
console.log(jsUser.name);

console.log(jsUser[mySymbol])

jsUser.greeting = function () {
  console.log("hello user");
};

jsUser.greetingTwo = function () {
  console.log(`hello user ${this.name}`);
};
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
