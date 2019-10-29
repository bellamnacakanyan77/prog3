var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Gishaker extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 40;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]

        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    

    eatgishaker() {
       
        let emptyCells = this.chooseCell(3);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

           
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;



            

            for (let i in gishakerArr) {
                if (gishakerArr[i].x == this.x && gishakerArr[i].y == this.y) {
                    gishakerArr.splice(i, 1);
                    this.x = x;
                    this.y = y;
                }
            }

            this.y = y;
            this.x = x;


           
        }
    }
}