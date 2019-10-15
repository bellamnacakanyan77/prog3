var LiveForm = require("./LiveForm");
var random = require("./random.js");
module.exports = class Gishatich extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 13;
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 3;

            // sarqum em OBJ lscnum grassArr-i mej 
            let gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);

            this.life = 0;
        }
    }
    eat1 () {
        this.life++;
        let emptyCells = this.chooseCell(2);
        
        let newCell = random(emptyCells);


        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;



            // sarqum em OBJ lscnum grassArr-i mej 
            let gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);

            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1)
                }
            }


            this.y = y;
            this.x = x;


            if (this.life >= 3) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.life--;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.life <= 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1)
            }
        }
    }
}
