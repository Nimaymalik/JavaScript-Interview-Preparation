const user = {
  username: "nimay",
  price: 999,
  welcomemessage: function () {
    console.log(`welcome ${this.username}`);
    console.log(this);
  },
};

const code = () => {
  let username = "nimay";
  console.log(this);
};

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(2, 3));
