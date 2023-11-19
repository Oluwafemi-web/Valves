const eccentric = document.querySelector(".pin-wrapper.one");

//popup fuction
function valveDetailFunction() {
  var x = document.getElementById("main-altitude-open");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

eccentric.addEventListener("click", (e) => {
  e.preventDefault();
  valveDetailFunction();
});

function altitudeAutoFunction() {
  var x = document.getElementById("main-altitudeAuto-open");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener("mouseup", function (event) {
  var obj = document.getElementById("main-altitude-open");
  if (!obj.contains(event.target)) {
    var x = document.getElementById("main-altitude-open");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }
});
document.addEventListener("mouseup", function (event) {
  var obj = document.getElementById("main-altitudeAuto-open");
  if (!obj.contains(event.target)) {
    var x = document.getElementById("main-altitudeAuto-open");
    console.log("x.style.display", x.style.display, "--", x.style, "2222");

    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }
});
