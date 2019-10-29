let varkyan = 0;

function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    
    
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let gishakerCountElement = document.getElementById('gishakerCount');
    let stexcoxCountElement = document.getElementById('stexcoxCount');

    socket.on("data", drawCreatures);
    function plus() {
        varkyan++
    }
    setInterval(plus, 1000)
    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.eatCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        gishakerCountElement.innerText = data.gishakerCounter;
        stexcoxCountElement.innerText = data.stexcoxCounter;
        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("#074578");
                    }else if (data.weather == "autumn"){
                        fill("#1076c9");
                    }
                    else if (data.weather == "winter"){
                        fill("#58aef5");
                    }else if (data.weather == "spring"){
                        fill("#92dbf0");
                    }
                    
                } else if (matrix[i][j] == 2) {
                    if(data.weather == "summer"){
                        fill("#edf24e");
                    }else if (data.weather == "autumn"){
                        fill("#c4c922");
                    }
                    else if (data.weather == "winter"){
                        fill("#f3fa11");
                    }else if (data.weather == "spring"){
                        fill("#d9de43");
                    }
                    
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    
                } else if (matrix[i][j] == 3) {
                    if(data.weather == "summer"){
                        fill("#074578");
                    }else if (data.weather == "autumn"){
                        fill("#1076c9");
                    }
                    else if (data.weather == "winter"){
                        fill("#58aef5");
                    }else if (data.weather == "spring"){
                        fill("#92dbf0");
                    }fill('red');
                    
                } else if (matrix[i][j] == 4) {
                    if(data.weather == "summer"){
                        fill("#f55d4c");
                    }else if (data.weather == "autumn"){
                        fill("#e33522");
                    }
                    else if (data.weather == "winter"){
                        fill("#f77d6f");
                    }else if (data.weather == "spring"){
                        fill("#ad5d53");
                    }
                } else if (matrix[i][j] == 5) {
                    if(data.weather == "summer"){
                        fill("#1f1d1d");
                    } else if (data.weather == "autumn"){
                        fill("#4a4646");
                    }
                    
                    else if (data.weather == "winter"){
                        fill("#080303");
                    }else if (data.weather == "spring"){
                        fill("#0a0303");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}