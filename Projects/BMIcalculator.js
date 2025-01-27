const sel = document.querySelector("form");
sel.addEventListener("submit", function (e) {
  e.preventDefault();

  const hei = parseInt(document.querySelector("#height").value);
  const wei = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "please enter valid height";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = <span>${bmi}</span>;
  }
});
