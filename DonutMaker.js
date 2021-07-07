class DonutMaker {
    constructor(numDonuts, numAutoClickers){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
    }


addDonut(){
    this.numDonuts++;
}

addAutoClicker(){
    if(this.numdonuts >= 100) {
        this.numAutoClickers++;
        this.numDonuts -= 100;
    }
}

activateAutoClicker(){
    if(this.numAutoClicker > 0){
        this.numDonuts += this.numAutoClickers;
    }
}

}
export default DonutMaker;

