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

// Select all elements with the class of pin-wrapper
// var pinWrapperElements = document.querySelectorAll(".pin-wrapper");

// // Popup function
// function valveDetailFunction(element) {
//   // Get the data-detail attribute value
//   var dataDetailValue = element.getAttribute("data-details");
//   console.log(dataDetailValue);
//   // Select the corresponding element by ID
//   var x = document.querySelector("[data-details='" + dataDetailValue + "']");

//   // Toggle the display
//   x.style.display = x.style.display === "none" ? "block" : "none";
// }

// // Add event listeners to each pin-wrapper element
// pinWrapperElements.forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     e.preventDefault();
//     valveDetailFunction(element);
//   });
// });

// // Function to handle document mouseup event
// function handleDocumentMouseup(targetId) {
//   return function (event) {
//     var obj = document.getElementById(targetId);
//     if (!obj.contains(event.target)) {
//       if (obj.style.display === "block") {
//         obj.style.display = "none";
//       }
//     }
//   };
// }

// // Add document mouseup event listeners
// document.addEventListener(
//   "mouseup",
//   handleDocumentMouseup("main-altitude-open")
// );
// document.addEventListener(
//   "mouseup",
//   handleDocumentMouseup("main-altitudeAuto-open")
// );
