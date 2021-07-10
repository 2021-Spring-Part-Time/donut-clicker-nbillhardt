import DonutMaker from "./DonutMaker.js";
console.log(DonutMaker);
var numberOfDonuts = document.getElementById("numberOfDonuts");
var buttonClick = document.getElementById("createDonut");
var autoClicker = document.getElementById("autoClicker");
var autoClickerCost = document.getElementById("costOfAutoClicker");
var numberOfAutoClickers = document.getElementById("numberOfAutoClickers");
var multiplier = document.getElementById("multiplier");
var numMultipliers = document.getElementById("numberOfMultipliers");
var costOfMultiplier = document.getElementById("costOfMultiplier");

var modal = document.getElementById("myModal");
var contactLink = document.getElementById("contactModal");
var span = document.getElementsByClassName("close")[0];


const createNewDonut = new DonutMaker(0, 0, 100, 10, 0);

buttonClick.addEventListener("click", () => {
  createNewDonut.addDonut();
  numberOfDonuts.innerHTML = createNewDonut.numDonuts.toFixed(2);
  console.log(createNewDonut.numDonuts);
});

autoClicker.addEventListener("click", () => {
  createNewDonut.addAutoClicker();
  numberOfAutoClickers.innerHTML = createNewDonut.numAutoClickers;
  autoClickerCost.innerHTML = createNewDonut.costOfAutoClicker;
  numberOfDonuts.innerHTML = createNewDonut.numDonuts.toFixed(2);
  console.log(createNewDonut.numAutoClickers);
});

setInterval(function () {
  createNewDonut.activateAutoClicker();
  numberOfDonuts.innerHTML = createNewDonut.numDonuts.toFixed(2);
}, 1000);

multiplier.addEventListener("click", () => {
  createNewDonut.addMultiplier();
  numMultipliers.innerHTML = createNewDonut.numMultipliers;
  costOfMultiplier.innerHTML = createNewDonut.costOfMultiplier;
  numberOfDonuts.innerHTML = createNewDonut.numDonuts.toFixed(2);
});


var modal = document.getElementById("myModal");


var contact = document.getElementById("myContact");


var span = document.getElementsByClassName("close")[0];

 
contact.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

