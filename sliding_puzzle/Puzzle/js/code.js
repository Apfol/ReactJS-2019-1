let pieces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var temp;
var emptyPieceIndex;
var termino = false;

pieces = pieces.sort(function () {
    return Math.random() - 0.5
});

function drawMatrix() {
    pieces.forEach(function (i, index) {
        if (i == 9) {
            document.getElementById(index + 1).innerHTML = ' ';
            emptyPieceIndex = index;
        } else {
            document.getElementById(index + 1).innerHTML = i;
        }
    });

    pieces.forEach(function (i, index) {
        document.getElementById(index + 1).onclick = function () {
            onClickPiece(index, emptyPieceIndex, index + 1, emptyPieceIndex + 1)
        };
    });

    for(var i = 0; i < 9; i++) {
        if(pieces[i] == i + 1) {
            termino = true;
        } else {
            termino = false;
            break;
        }
    }
    if(termino) {
        alert("¡Felicidades, has terminado");
    }
}

drawMatrix();

function onClickPiece(pieceClickedIndex, emptyPieceIndex, idPiece, idEmptyPiece) {
    var pieceClicked = document.getElementById(idPiece);
    var emptyPiece = document.getElementById(idEmptyPiece);

    var rowPieceClicked = pieceClicked.parentElement.className;
    var columnPieceClicked = pieceClicked.className;

    var rowEmptyPiece = emptyPiece.parentElement.className;
    var columnEmptyPiece = emptyPiece.className;

    if (rowPieceClicked == rowEmptyPiece || columnPieceClicked == columnEmptyPiece) {
        var substract = pieceClickedIndex - emptyPieceIndex;
        if (pieceClickedIndex != emptyPieceIndex) {
            if (substract !== 6 && substract !== -6 && substract !== 2 && substract !== -2) {
                temp = pieces[pieceClickedIndex];
                pieces[pieceClickedIndex] = pieces[emptyPieceIndex];
                pieces[emptyPieceIndex] = temp;
                drawMatrix();
            }
        }
    }
}