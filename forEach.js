//custom ForEach
// Array.prototype.customForEachOne = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

Array.prototype.ForEachTwo = function (callback, thiscontext) {
  if (typeof callback != "function") {
    throw `not  function`;
  }
  const len = this.length;
  let i = 0;
  while (i < len) {
    if (this.hasOwnProperty) {
      callback.call(thiscontext, this, this[i], i);
    }
    i++;
  }
};
