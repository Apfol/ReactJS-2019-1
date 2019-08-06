var tabla = document.getElementsByTagName("table")[0];
const rows = document.querySelectorAll('tr');
const rowsArray = Array.from(rows);

var numbers = [1, 2,
    3, 4, 5,
    6, 7, 8, 0
];


/* for(let i = 0; i < tabla.rows.length; i++){
    for(let j = 0; j < tabla.rows[i].cells.length; j++){
        tabla.rows[i].cells[j].onclick = (mouseEvent)=>{
            alert(mouseEvent.target.innerText);
        };
    }
} */
function inicializar() {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].cells.length; j++) {
            rows[j].cells[i].innerText = numbers[i + j * rows[i].cells.length] != 0 ? numbers[i + j * rows[i].cells.length] : "";
            rows[i].cells[j].onclick = function (mouseEvent) {
                let row = rowsArray.findIndex(row => row.contains(mouseEvent.target));
                let column = mouseEvent.target.cellIndex;

                if (checkNear(row, column) != -1) {
                    let [emptRow, emptCol] = findEmpty();
                    rows[emptRow].cells[emptCol].innerText = rows[row].cells[column].innerText;
                    rows[row].cells[column].innerText = "";
                }

                if (checkEndGame()) {
                    alert("You win prro")
                    shuffleArray();
                    inicializar();
                }
            };
        }
    }

}


/**
 * Checks if game is finished
 */
function checkEndGame() {

    let correctsAmount = 0;
    let counterCorrects = 1;
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].cells.length; j++) {
            if (parseInt(rows[i].cells[j].innerText) == counterCorrects) {
                correctsAmount++;
                // alert("Chequeo "+rows[i].cells[j].innerText+" counterCorrects "+counterCorrects);
            }
            counterCorrects++;
        }
    }

    // alert("Correctas "+correctsAmount);
    return correctsAmount == rows.length * rows.length - 1;

}


/** 
 * Checks if the click was near the blank td
 * and returns the index in which the blank is

*/
function checkNear(row, column) {
    if (rows[row > 0 ? row - 1 : row].cells[column].innerText === "") {
        return 1;
    } else if (rows[row].cells[column < rows[0].cells.length - 1 ? column + 1 : column].innerText === "") {
        return 1;

    } else if (rows[row < rows.length - 1 ? row + 1 : row].cells[column].innerText === "") {
        return 1;

    } else if (rows[row].cells[column > 0 ? column - 1 : column].innerText === "") {
        return 1;

    } else {
        return -1;
    }

}

function findEmpty() {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].cells.length; j++) {
            if (rows[i].cells[j].innerText === "") {
                return [i, j];
            }
        }
    }
}
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(numbers);
inicializar();