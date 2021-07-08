export default class DonutMaker  {
  constructor(
    numDonuts,
    numAutoClickers,
    costOfAutoClicker,
    costOfMultiplier,
    numMultipliers
  ) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.costOfAutoClicker = costOfAutoClicker;
    this.costOfMultiplier = costOfMultiplier;
    this.numMultipliers = numMultipliers;
  }
  addDonut() {
    this.numDonuts+= Math.pow(1.2, this.numMultipliers);
  }
  addAutoClicker() {
    if (this.numDonuts >= 2) {
      this.numAutoClickers++;
      this.numDonuts -= 2;
      this.costOfAutoClicker = Math.round(this.costOfAutoClicker * 1.1);
    }
  }
  activateAutoClicker() {
      for (let i = 0; i<this.numAutoClickers;i++  ){
          this.addDonut();
      }
  }
  addMultiplier() {
    if (this.numDonuts >= 10) {
      this.numMultipliers++;
      this.numDonuts -= 10;
      this.costOfMultiplier = Math.round(this.costOfMultiplier * 1.1);
    }
  }
}

