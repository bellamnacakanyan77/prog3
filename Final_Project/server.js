var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Gishatich = require("./modules/Gishatich.js");
var Gishaker = require("./modules/Gishaker.js");
var Stexcox = require("./modules/Stexcox.js");
let random = require('./modules/random');

grassArr = [];
eatArr = [];
gishatichArr = [];
gishakerArr = [];
stexcoxArr = [];
matrix = [];


grassHashiv = 0;
eatHashiv = 0;
gishatichHashiv = 0;
gishakerHashiv = 0;
stexcoxHashiv = 0;

function matrixGenerator(matrixSize, grass, eat, gishatich, gishaker, stexcox) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0 - 39
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < eat; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < gishaker; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < stexcox; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(20, 25, 20, 15, 10, 2);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                eatArr.push(grassEater);
                eatHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++
            }
            else if (matrix[y][x] == 4) {
                var gishaker = new Gishaker(x, y);
                gishakerArr.push(gishaker);
                gishakerHashiv++
            }
            else if (matrix[y][x] == 5) {
                var stexcox = new Stexcox(x, y);
                stexcoxArr.push(stexcox);
                stexcoxHashiv++
            }
        }
    }

}

creatingObjects();
let exanak = 0
function game() {
    exanak++;
    if (exanak <= 10){
        weather = "summer"
    }else if (exanak <= 20){
        weather = "autumn"
    }else if (exanak > 20){
        exanak = 0
    }else if (exanak <= 30){
        weather = "winter"
    }else if (exanak > 30){
        exanak = 0
    }else if (exanak <= 40){
        weather = "spring"
    }else if (exanak > 40){
        exanak = 0
    }
    


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (eatArr[0] !== undefined) {
        for (var i in eatArr) {
            eatArr[i].eat();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in huntArr) {
            gishatichArr[i].eat();
        }
    }
    if (gishakerArr[0] !== undefined) {
        for (var i in termArr) {
            gishakerArr[i].eat();
        }
    }
    if (stexcoxArr[0] !== undefined) {
        for (var i in stexcoxArr) {
            stexcoxArr[i].eat();
        }
    }

    
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        eatCounter: eatHashiv,
        gishatichCounter: gishatichHashiv,
        gishakerCounter: gishakerHashiv,
        stexcoxCounter: stexcoxHashiv,
        weather: weather
    }

    
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)