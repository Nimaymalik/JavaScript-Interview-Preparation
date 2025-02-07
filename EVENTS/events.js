//addEventListner
// document.getElementById("a").addEventListener(
//   "click",
//   function () {
//     alert("clicked");
//   },
//   false
// );

// document.getElementById("a").addEventListener("click", function (e) {
//   console.log(e);
// });

//eventBubbling->inside to outside moving of compiler
// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("a clicked");
//   },
//   false
// );

// //first this will will run and than a will run this is bubbling
// document.getElementById("c").addEventListener(
//   "click",
//   function (e) {
//     console.log("b clicked");
//   },
//   false
// );

//to stop bubbling we use stopPropogation
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("a clicked");
  },
  false
);

//first this will will run and than a will run this is bubbling
document.getElementById("c").addEventListener(
  "click",
  function (e) {
    console.log("b clicked");
    e.stopPropagation();
  },

  false
);


//preventDefault
document.getElementById("google").addEventListener("click",function(e){
    e.preventDefault();
})