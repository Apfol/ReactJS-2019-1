const imagePath = "img/paisaje", holePath = "img/hueco.jpg";
var numAttempts = 0, pAttemps = document.getElementById("AttemptsCounter");


function findSpace(cell) {
    let image = cell.firstChild;
    if (image === null) {
        alert("No se puede mover el hueco :v");
    } else {
        let cellPosition = cell.getAttribute("id");
        let holePosition = document.getElementsByClassName("hole")[0].getAttribute("id");
        let neighbors = getNeighbors(cellPosition);
        let newCellPosition = neighbors.filter(neighbor => neighbor === holePosition)[0];
        if (newCellPosition !== undefined) {
            let newCellImage = document.getElementById(newCellPosition);
            cell.setAttribute("class", "hole");
            cell.removeChild(image);
            newCellImage.appendChild(image);
            newCellImage.setAttribute("class", "");
            numAttempts++;
            pAttemps.innerHTML = "Numero de Movimientos: " + numAttempts;
            this.checkSolution();
        }
    }
}

function checkSolution() {
    let tempImg, finished = true, tempSrc;
    for (var i = 1; i < 9; i++) {
        tempImg = document.getElementById(i).firstChild;
        if (tempImg === null) {
            finished = false;
        } else {
            tempSrc = tempImg.getAttribute("src");
            if (tempSrc !== (imagePath + i + ".jpg")) {
                finished = false;
            }
        }

    }
    if (finished) {
        alert("Todas la fichas están ubicadas correctamente. ¡Felicidades!");
        this.restartCounter();
    }
}

function getNeighbors(cellPosition) {
    let neighbors = [];
    switch (cellPosition) {
        case "1":
            neighbors.push("2", "4");
            break;
        case "2":
            neighbors.push("1", "3", "5");
            break;
        case "3":
            neighbors.push("2", "6");
            break;
        case "4":
            neighbors.push("1", "5", "7");
            break;
        case "5":
            neighbors.push("2", "4", "6", "8");
            break;
        case "6":
            neighbors.push("3", "5", "9");
            break;
        case "7":
            neighbors.push("4", "8");
            break;
        case "8":
            neighbors.push("7", "5", "9");
            break;
        case "9":
            neighbors.push("6", "8");
    }
    return neighbors;
}

function random() {
    let ids = [];
    let idValid = [];
    let tempCell;
    do {
        var idRandom = Math.floor((Math.random() * 10) + 1);
        if (idRandom < 9) {
            // alert("idRandom= " + idRandom);
            idValid = ids.filter(id => idRandom === id);
            if (idValid[0] === undefined) {
                ids.push(idRandom);
            }
            //alert("ids= " + ids + ". idValid= " + idValid[0]);
        } else {
            idValid[0] = 1;
        }
    } while (ids.length < 8);

    for (var i = 1; i <= ids.length; i++) {
        tempCell = document.getElementById(i);
        tempCell.setAttribute("class", "");
        if (tempCell.firstChild === null) {
            tempCell.appendChild(document.createElement("IMG"));
        }
        tempCell.firstChild.setAttribute("src", imagePath + ids[i - 1] + ".jpg");
    }
    tempCell = document.getElementById("9");
    tempCell.setAttribute("class", "hole");
    if (tempCell.firstChild !== null) {
        tempCell.removeChild(tempCell.firstChild);
    }
    this.restartCounter();

}

function restartCounter() {
    numAttempts = 0;
    pAttemps.innerHTML = "Numero de Movimientos: " + numAttempts;
}

