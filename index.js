import DonutMaker from "./DonutMaker.js";
console.log(DonutMaker);

var numberOfDonuts = document.getElementById("numberOfDonuts");
var buttonClick = document.getElementById("createDonut");
const createNewDonut = new DonutMaker(0, 0);

buttonClick.addEventListener("click", () => {
  createNewDonut.addDonut();
  numberOfDonuts.innerHTML = createNewDonut.numDonuts;
  console.log(createNewDonut.numDonuts);
});
