var positionGood = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var positionChange = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var movements = 0;
var total = [];
var cont = 0;

class players {
    constructor(name, points) {
        this.name = name;
        this.points = points;
    }
    general() {
        return players;
    }
}

function finish() {
    var good = 0;
    for (let i = 0; i < positionGood.length; i++) {
        if (positionGood[i] == positionChange[i]) {
            good++;
        }
    }

    if (good == 9 && movements != 0) {
        var person = prompt("Please enter your name", "");
        if (person != null) {
            var player = new players(person, movements);
            total[cont] = player;
            cont++;
        }
        var msg = "";
        for (let i = 0; i < cont; i++) {
            msg = msg + total[i].name + "\t" + total[i].points + "\n";
        }
        alert("Player" + "\t" + "Movements\n" + msg);
        shuffle();
    }
    else {
        alert("Complete the puzzle");
    }
}

function shuffle() {
    var moves = 150;
    var random;

    for (j = 0; j <= moves; j++) {
        for (i = 1; i <= 9; i++) {
            random = Math.round(Math.random() * (99) + 1);

            if (document.getElementById(i).innerHTML == "") {
                if (i == 1) {
                    if (random <= 50) {
                        moveLeft(i + 1);
                    }
                    if (random > 50) {
                        moveUp(i + 3);
                    }
                }
                if (i == 2) {
                    if (random <= 33) {
                        moveRight(i - 1);
                    }
                    if (random > 33 && random <= 66) {
                        moveLeft(i + 1);
                    }
                    if (random > 66) {
                        moveUp(i + 3);
                    }
                }
                if (i == 3) {
                    if (random <= 50) {
                        moveRight(i - 1);
                    }
                    if (random > 50) {
                        moveUp(i + 3);
                    }
                }

                if (i == 4) {
                    if (random <= 33) {
                        moveDown(i - 3);
                    }
                    if (random > 33 && random <= 66) {
                        moveLeft(i + 1);
                    }
                    if (random > 66) {
                        moveUp(i + 3);
                    }
                }
                if (i == 5) {
                    if (random <= 25) {
                        moveDown(i - 3);
                    }
                    if (random > 25 && random <= 50) {
                        moveLeft(i + 1);
                    }
                    if (random > 50 && random <= 75) {
                        moveUp(i + 3);
                    }
                    if (random > 75) {
                        moveLeft(i + 1);
                    }
                }
                if (i == 6) {
                    if (random <= 33) {
                        moveDown(i - 3);
                    }
                    if (random > 33 && random <= 66) {
                        moveRight(i - 1);
                    }
                    if (random > 66) {
                        moveUp(i + 3);
                    }
                }

                if (i == 7) {
                    if (random <= 50) {
                        moveDown(i - 3);
                    }
                    if (random > 50) {
                        moveLeft(i + 1);
                    }
                }
                if (i == 8) {
                    if (random <= 33) {
                        moveDown(i - 3);
                    }
                    if (random > 33 && random <= 66) {
                        moveRight(i - 1);
                    }
                    if (random > 66) {
                        moveLeft(i + 1);
                    }
                }
                if (i == 9) {
                    if (random <= 50) {
                        moveDown(i - 3);
                    }
                    if (random > 50) {
                        moveRight(i - 1);
                    }
                }
            }
        }
    }
    movements = 0;
    document.getElementById("movements").innerHTML = "MOVEMENTS: " + movements;
}

function move(pos) {
    if (pos == 1) {
        if (document.getElementById(pos + 1).innerHTML == "") {
            moveRight(pos);
        }
        if (document.getElementById(pos + 3).innerHTML == "") {
            moveDown(pos);
        }
    }
    if (pos == 2) {
        if (document.getElementById(pos - 1).innerHTML == "") {
            moveLeft(pos);
        }
        if (document.getElementById(pos + 1).innerHTML == "") {
            moveRight(pos);
        }
        if (document.getElementById(pos + 3).innerHTML == "") {
            moveDown(pos);
        }
    }
    if (pos == 3) {
        if (document.getElementById(pos - 1).innerHTML == "") {
            moveLeft(pos);
        }
        if (document.getElementById(pos + 3).innerHTML == "") {
            moveDown(pos);
        }
    }

    if (pos == 4) {
        if (document.getElementById(pos - 3).innerHTML == "") {
            moveUp(pos);
        }
        if (document.getElementById(pos + 1).innerHTML == "") {
            moveRight(pos);
        }
        if (document.getElementById(pos + 3).innerHTML == "") {
            moveDown(pos);
        }
    }
    if (pos == 5) {
        if (document.getElementById(pos - 3).innerHTML == "") {
            moveUp(pos);
        }
        if (document.getElementById(pos - 1).innerHTML == "") {
            moveLeft(pos);
        }
        if (document.getElementById(pos + 1).innerHTML == "") {
            moveRight(pos);
        }
        if (document.getElementById(pos + 3).innerHTML == "") {
            moveDown(pos);
        }
    }
    if (pos == 6) {
        if (document.getElementById(pos - 3).innerHTML == "") {
            moveUp(pos);
        }
        if (document.getElementById(pos - 1).innerHTML == "") {
            moveLeft(pos);
        }
        if (document.getElementById(pos + 3).innerHTML == "") {
            moveDown(pos);
        }
    }

    if (pos == 7) {
        if (document.getElementById(pos - 3).innerHTML == "") {
            moveUp(pos);
        }
        if (document.getElementById(pos + 1).innerHTML == "") {
            moveRight(pos);
        }
    }
    if (pos == 8) {
        if (document.getElementById(pos - 3).innerHTML == "") {
            moveUp(pos);
        }
        if (document.getElementById(pos - 1).innerHTML == "") {
            moveLeft(pos);
        }
        if (document.getElementById(pos + 1).innerHTML == "") {
            moveRight(pos);
        }
    }
    if (pos == 9) {
        if (document.getElementById(pos - 1).innerHTML == "") {
            moveLeft(pos);
        }
        if (document.getElementById(pos - 3).innerHTML == "") {
            moveUp(pos);
        }
    }
}

var comodin = '';

function moveUp(pos) {
    movements++;
    document.getElementById("movements").innerHTML = "MOVEMENTS: " + movements;
    document.getElementById(pos - 3).innerHTML = document.getElementById(pos).innerHTML;
    comodin = positionChange[pos - 4];
    positionChange[pos - 4] = positionChange[pos - 1];
    positionChange[pos - 1] = comodin;
    document.getElementById(pos).innerHTML = "";
}
function moveDown(pos) {
    movements++;
    document.getElementById("movements").innerHTML = "MOVEMENTS: " + movements;
    document.getElementById(pos + 3).innerHTML = document.getElementById(pos).innerHTML;
    comodin = positionChange[pos - 1];
    positionChange[pos - 1] = positionChange[pos + 2];
    positionChange[pos + 2] = comodin;
    document.getElementById(pos).innerHTML = "";
}
function moveLeft(pos) {
    movements++;
    document.getElementById("movements").innerHTML = "MOVEMENTS: " + movements;
    document.getElementById(pos - 1).innerHTML = document.getElementById(pos).innerHTML;
    comodin = positionChange[pos - 2];
    positionChange[pos - 2] = positionChange[pos - 1];
    positionChange[pos - 1] = comodin;
    document.getElementById(pos).innerHTML = "";
}
function moveRight(pos) {
    movements++;
    document.getElementById("movements").innerHTML = "MOVEMENTS: " + movements;
    document.getElementById(pos + 1).innerHTML = document.getElementById(pos).innerHTML;
    comodin = positionChange[pos];
    positionChange[pos] = positionChange[pos - 1];
    positionChange[pos - 1] = comodin;
    document.getElementById(pos).innerHTML = "";
}