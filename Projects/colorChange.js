// changing the color

const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

body.style.cursor = "pointer";

btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    } else if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "yellow";
    }
  });
});
