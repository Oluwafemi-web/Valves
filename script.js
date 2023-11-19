const wasteValves = document.querySelectorAll("[data-category='waste-valves']");
const waterValves = document.querySelectorAll("[data-category='water-valves']");
const wasteButton = document.querySelector(".waste-valves");
const waterButton = document.querySelector(".water-valves");
const allButton = document.querySelector(".all");
console.log(wasteValves);
function showWaste() {
  wasteValves.forEach((e) => (e.style.display = "block"));
  waterValves.forEach((e) => (e.style.display = "none"));
  wasteButton.classList.add("active");
  allButton.classList.remove("active");
  waterButton.classList.remove("active");
}
function showAll() {
  wasteValves.forEach((e) => (e.style.display = "block"));
  waterValves.forEach((e) => (e.style.display = "block"));
  wasteButton.classList.remove("active");
  allButton.classList.add("active");
  waterButton.classList.remove("active");
}
function showWater() {
  wasteValves.forEach((e) => (e.style.display = "none"));
  waterValves.forEach((e) => (e.style.display = "block"));
  wasteButton.classList.remove("active");
  allButton.classList.remove("active");
  waterButton.classList.add("active");
}
wasteButton.addEventListener("click", showWaste);
waterButton.addEventListener("click", showWater);

allButton.addEventListener("click", showAll);
