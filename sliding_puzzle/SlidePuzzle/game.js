
var movements = 0;
var movementError = false;
var shuffledBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => {
    return Math.random() - 0.5;
});

var winningBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];



document.getElementById("0").src = "img/" + shuffledBoard[0] + ".png";
document.getElementById("1").src = "img/" + shuffledBoard[1] + ".png";
document.getElementById("2").src = "img/" + shuffledBoard[2] + ".png";
document.getElementById("3").src = "img/" + shuffledBoard[3] + ".png";
document.getElementById("4").src = "img/" + shuffledBoard[4] + ".png";
document.getElementById("5").src = "img/" + shuffledBoard[5] + ".png";
document.getElementById("6").src = "img/" + shuffledBoard[6] + ".png";
document.getElementById("7").src = "img/" + shuffledBoard[7] + ".png";
document.getElementById("8").src = "img/" + shuffledBoard[8] + ".png";



let pos0 = "img/" + shuffledBoard[0] + ".png";
let pos1 = "img/" + shuffledBoard[1] + ".png";
let pos2 = "img/" + shuffledBoard[2] + ".png";
let pos3 = "img/" + shuffledBoard[3] + ".png";
let pos4 = "img/" + shuffledBoard[4] + ".png";
let pos5 = "img/" + shuffledBoard[5] + ".png";
let pos6 = "img/" + shuffledBoard[6] + ".png";
let pos7 = "img/" + shuffledBoard[7] + ".png";
let pos8 = "img/" + shuffledBoard[8] + ".png";



if (movements === 0) {
    document.getElementById("gameState").className = "btn btn-info";
    document.getElementById("gameState").innerHTML = "Inicio";
    console.log(shuffledBoard);
}



function moveBlock(positionClick) {

    if (movements >= 1) {
        document.getElementById("gameState").className = "btn btn-info";
        document.getElementById("gameState").innerHTML = "Jugando";
    }

    if (document.getElementById(positionClick).src != "img/9.png") {

        movements++;

        switch (positionClick) {
            case 0:
                if (pos1 == "img/9.png") {
                    document.getElementById("1").src = pos0;
                    document.getElementById("0").src = "img/9.png";
                    pos1 = pos0;
                    pos0 = "img/9.png";
                    shuffledBoard[1] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;

                } else if (pos3 == "img/9.png") {
                    document.getElementById("3").src = pos0;
                    document.getElementById("0").src = "img/9.png";
                    pos3 = pos0;
                    pos0 = "img/9.png";
                    shuffledBoard[3] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                }else{
                    movementError = true;
                }
                break;

            case 1:

                if (pos0 == "img/9.png") {
                    document.getElementById("0").src = pos1;
                    document.getElementById("1").src = "img/9.png";
                    pos0 = pos1;
                    pos1 = "img/9.png";
                    shuffledBoard[0] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos2 == "img/9.png") {
                    document.getElementById("2").src = pos1;
                    document.getElementById("1").src = "img/9.png";
                    pos2 = pos1;
                    pos1 = "img/9.png";
                    shuffledBoard[2] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos4 == "img/9.png") {
                    document.getElementById("4").src = pos1;
                    document.getElementById("1").src = "img/9.png";
                    pos4 = pos1;
                    pos1 = "img/9.png";
                    shuffledBoard[4] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }
                break;

            case 2:

                if (pos1 == "img/9.png") {
                    document.getElementById("1").src = pos2;
                    document.getElementById("2").src = "img/9.png";
                    pos1 = pos2;
                    pos2 = "img/9.png";
                    shuffledBoard[1] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos5 == "img/9.png") {
                    document.getElementById("5").src = pos2;
                    document.getElementById("2").src = "img/9.png";
                    pos5 = pos2;
                    pos2 = "img/9.png";
                    shuffledBoard[5] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }
                break;

            case 3:


                if (pos0 == "img/9.png") {
                    document.getElementById("0").src = pos3;
                    document.getElementById("3").src = "img/9.png";
                    pos0 = pos3;
                    pos3 = "img/9.png";
                    shuffledBoard[0] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos6 == "img/9.png") {
                    document.getElementById("6").src = pos3;
                    document.getElementById("3").src = "img/9.png";
                    pos6 = pos3;
                    pos3 = "img/9.png";
                    shuffledBoard[6] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos4 == "img/9.png") {
                    document.getElementById("4").src = pos3;
                    document.getElementById("3").src = "img/9.png";
                    pos4 = pos3;
                    pos3 = "img/9.png";
                    shuffledBoard[4] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }
                break;

            case 4:

                if (pos1 == "img/9.png") {
                    document.getElementById("1").src = pos4;
                    document.getElementById("4").src = "img/9.png";
                    pos1 = pos4;
                    pos4 = "img/9.png";
                    shuffledBoard[1] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos3 == "img/9.png") {
                    document.getElementById("3").src = pos4;
                    document.getElementById("4").src = "img/9.png";
                    pos3 = pos4;
                    pos4 = "img/9.png";
                    shuffledBoard[3] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos5 == "img/9.png") {
                    document.getElementById("5").src = pos4;
                    document.getElementById("4").src = "img/9.png";
                    pos5 = pos4;
                    pos4 = "img/9.png";
                    shuffledBoard[5] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos7 == "img/9.png") {
                    document.getElementById("7").src = pos4;
                    document.getElementById("4").src = "img/9.png";
                    pos7 = pos4;
                    pos4 = "img/9.png";
                    shuffledBoard[7] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }

                break;

            case 5:

                if (pos2 == "img/9.png") {
                    document.getElementById("2").src = pos5;
                    document.getElementById("5").src = "img/9.png";
                    pos2 = pos5;
                    pos5 = "img/9.png";
                    shuffledBoard[2] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos4 == "img/9.png") {
                    document.getElementById("4").src = pos5;
                    document.getElementById("5").src = "img/9.png";
                    pos4 = pos5;
                    pos5 = "img/9.png";
                    shuffledBoard[4] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos8 == "img/9.png") {
                    document.getElementById("8").src = pos5;
                    document.getElementById("5").src = "img/9.png";
                    pos8 = pos5;
                    pos5 = "img/9.png";
                    shuffledBoard[8] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }

                break;

            case 6:


                if (pos3 == "img/9.png") {
                    document.getElementById("3").src = pos6;
                    document.getElementById("6").src = "img/9.png";
                    pos3 = pos6;
                    pos6 = "img/9.png";
                    shuffledBoard[3] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos7 == "img/9.png") {
                    document.getElementById("7").src = pos6;
                    document.getElementById("6").src = "img/9.png";
                    pos7 = pos6;
                    pos6 = "img/9.png";
                    shuffledBoard[7] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }
                break;

            case 7:

                if (pos6 == "img/9.png") {
                    document.getElementById("6").src = pos7;
                    document.getElementById("7").src = "img/9.png";
                    pos6 = pos7;
                    pos7 = "img/9.png";
                    shuffledBoard[6] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos8 == "img/9.png") {
                    document.getElementById("8").src = pos7;
                    document.getElementById("7").src = "img/9.png";
                    pos8 = pos7;
                    pos7 = "img/9.png";
                    shuffledBoard[8] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos4 == "img/9.png") {
                    document.getElementById("4").src = pos7;
                    document.getElementById("7").src = "img/9.png";
                    pos4 = pos7;
                    pos7 = "img/9.png";
                    shuffledBoard[4] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }
                break;
            case 8:

                if (pos7 == "img/9.png") {
                    document.getElementById("7").src = pos8;
                    document.getElementById("8").src = "img/9.png";
                    pos7 = pos8;
                    pos8 = "img/9.png";
                    shuffledBoard[7] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else if (pos5 == "img/9.png") {
                    document.getElementById("5").src = pos8;
                    document.getElementById("8").src = "img/9.png";
                    pos5 = pos8;
                    pos8 = "img/9.png";
                    shuffledBoard[5] = shuffledBoard[positionClick];
                    shuffledBoard[positionClick] = 9;
                } else {
                    movementError = true;
                }

            default:
                break;
        }
    } else {
        movements++;
    }
    if (movementError) {
        document.getElementById("gameState").className = "btn btn-danger";
        document.getElementById("gameState").innerHTML = "No se puede hacer ese movimiento";
        movementError = false;
    }
    console.log(shuffledBoard);

    if(shuffledBoard === winningBoard){
        document.getElementById("winningState").innerHTML = "Has ganado";
    }else{
        document.getElementById("winningState").innerHTML = "Sigue intentando";
    }

    document.getElementById("counterMovements").innerHTML = "Movements = "+movements;
}










