Array.prototype.extraProperty = "nimay";

const myArr = [1, 2, 3, 4, 5];

for (let v in myArr) {
  if (myArr.hasOwnProperty(v)) {
    console.log(v);
  }
}
