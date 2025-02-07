const clock = document.getElementById("clock");

// the date will come after every 1 sec
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
