function swapTiles(cell1,cell2) {
    let temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}


function shuffle() {
    for (let row=1;row<=3;row++) {
        for (let column=1;column<=3;column++) {
            let row2=Math.floor(Math.random()*3 + 1);
            let column2=Math.floor(Math.random()*3 + 1);
            swapTiles("card"+row+column,"card"+row2+column2);
        }
    }
}

function move(row,column) {
    let cell = document.getElementById("card"+row+column);
    let tile = cell.className;
    if (tile!=="tile9") {
        //Mirar si la carta 9 esta a la derecha del que se quiere mover
        if (column<3) {
            if ( document.getElementById("card"+row+(column+1)).className==="tile9") {
                swapTiles("card"+row+column,"card"+row+(column+1));
            }
        }
        //Mirar si la carda 9 esta a la iquierda del que se quiere mover
        if (column>1) {
            if ( document.getElementById("card"+row+(column-1)).className==="tile9") {
                swapTiles("card"+row+column,"card"+row+(column-1));
            }
        }
        //mirar si la carta 9 esta arriba del que se quiere mover
        if (row>1) {
            if ( document.getElementById("card"+(row-1)+column).className==="tile9") {
                swapTiles("card"+row+column,"card"+(row-1)+column);
            }
        }
        //Mirar si la carta 9 esta arriba del que se quiere mover
        if (row<3) {
            if ( document.getElementById("card"+(row+1)+column).className==="tile9") {
                swapTiles("card"+row+column,"card"+(row+1)+column);
            }
        }
    }
}

shuffle();