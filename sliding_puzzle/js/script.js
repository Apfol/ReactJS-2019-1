var contImg = 0;
var moves = 0;
var contador = 0;

var casilla = {
    id : '0',
    posX : '0',
    posY : '0'
};

var arrayCasillas = new Array();


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        contImg++;        
        let div = createDiv();
        document.getElementById('gc').appendChild(div);
        
        casilla.id = contImg;
        casilla.posX = j + 1;
        casilla.posY = i + 1;

        arrayCasillas.push(casilla);
       
        console.log(arrayCasillas[contador]);
        contador++;
    }
}


function createDiv() {
    let div = document.createElement('div');
    let img = insPic();

    div.setAttribute('id', contImg + '' + contImg);
    div.className = 'p-0 col-4 align-content-center';
    div.style.border = '1px solid black';

    div.appendChild(img);
    return div;
}

function insPic() {    
    let pic = document.createElement('img');
    pic.setAttribute('id', contImg);

    casilla.id = contImg;

    pic.className = 'img-fluid p-1';
    pic.src = '../img/' + contImg + '.png';
    pic.setAttribute('draggable', 'false');
    
    return pic;
}

function insPic2(id) {
    this.id = id;
    let doubleID = this.id + '' + this.id;

    let temp = document.getElementById(this.id);
    let tempDiv = document.getElementById(doubleID);
    let tempEmpty = document.getElementById('99');

    let pic = document.createElement('img');

    pic.setAttribute('id', '9');
    pic.className = 'img-fluid p-1';
    pic.src = '../img/' + 9 + '.png';
    pic.setAttribute('draggable', 'false');


    document.getElementById(this.id).remove();
    document.getElementById('9').remove();
    document.getElementById(doubleID).appendChild(pic);
    document.getElementById('99').appendChild(temp);

    tempDiv.setAttribute('id', '99');
    tempEmpty.setAttribute('id', doubleID);
}

function move() {
    moves++;
    document.getElementById('moves').innerHTML = moves;
}


var printId = function () {
    console.log('Clickeaste: ' + this.id);
    
    
    if (this.id == 9) {

    } else {
        move();
        moverFicha(this.id);        
    }

    return this.id;
}

for (let i = 1; i < 10; i++) {
    document.getElementById(i).onclick = printId;
}

function moverFicha(id) {
    this.id = id;
    insPic2(this.id);
    console.log('Moviendo la ficha: ' + this.id);

}

