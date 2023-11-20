// Select all elements with the class of pin-wrapper
var pinWrapperElements = document.querySelectorAll(".pin-wrapper");
console.log(pinWrapperElements);

// // Popup function
function valveDetailFunction(element) {
  // Get the data-detail attribute value
  var dataDetailValue = element.target.getAttribute("data-details");
  // Select the corresponding element by ID

  var x = document.querySelector(
    "[data-details='" + dataDetailValue + "'][id='main-altitude-open']"
  );
  hideAllPopups();

  // Toggle the display
  x.style.display = x.style.display === "none" ? "flex" : "none";
}

// // Add event listeners to each pin-wrapper element
pinWrapperElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    valveDetailFunction(e);
  });
});

function hideAllPopups() {
  var popups = document.querySelectorAll("[id^='main-altitude-']");
  popups.forEach((popup) => {
    popup.style.display = "none";
  });
}

// Function to handle document mouseup event
function handleDocumentMouseup(targetId) {
  return function (event) {
    var obj = document.querySelector("[data-details][id='" + targetId + "']");
    if (obj && !obj.contains(event.target)) {
      if (obj.style.display === "flex") {
        obj.style.display = "none";
      }
    }
  };
}

// Add document mouseup event listeners
document.addEventListener(
  "mouseup",
  handleDocumentMouseup("main-altitude-open")
);
document.addEventListener(
  "mouseup",
  handleDocumentMouseup("main-altitudeAuto-open")
);
