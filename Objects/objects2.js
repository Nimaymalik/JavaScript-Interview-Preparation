// const user = new Object();

const user = {};
user.id = "1234";
user.name = "nimay";
user.isLoggedIn = false;

// console.log(user);

const regularUser = {
  email: "nimaymalik@gmail.com",
  name: {
    firstname: "nimay",
    lastname: "malik",
  },
};
// console.log(regularUser.name.firstname,regularUser.name.lastname);

//conbining the two objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//second method to combine 2 objects
const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);

const user1 = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

console.log(user.hasOwnProperty("isLoggedIn")); //true
