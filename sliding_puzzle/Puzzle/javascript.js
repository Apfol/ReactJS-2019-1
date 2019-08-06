class Square{
    constructor (id, initialp, actualp){
        this.id = id;
        this.initialp = initialp;
        this.actualp = actualp;
    }

    get getId(){
        return this.id;
    }
    get getActualp(){
        return this.actualp;
    }
    get getInitialp(){
        return this.initialp;
    }

    changePosition(actualp){
        this.actualp = actualp;
        posiciones(actualp, this.id);
    }
}

var first = new Square("one", 1, 1);
var second = new Square("two", 2, 2);
var third = new Square("three", 3, 3);
var fourth = new Square("four", 4, 4);
var fifth = new Square("five", 5, 5);
var sixth = new Square("six", 6, 6);
var seventh = new Square("seven", 7, 7);
var eighth = new Square("eight", 8, 8);
var blacks = new Square("black", 9, 9);

var squares = [first, second, third, fourth, fifth, sixth, seventh, eighth, blacks];

function iniciar(){
    var numbers = [];
    var temp;
    for(let i=0; i<9; i++){
        let plus;
        do{
            plus = 0;
            temp = Math.floor(Math.random() * (9)) + 1;
            for(let j=0; j<numbers.length; j++){
                if(numbers[j] == temp){
                    plus = plus + 1;
                }
            }
        }while(plus != 0);
        numbers.push(temp);
        squares[i].changePosition(temp);
    }
    
    let elements = document.getElementsByClassName("square");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.pointerEvents = "auto";
    }
    document.getElementById("button").style.visibility = "hidden";
}

function movimiento(id){
    var entrada = id;
    var verify = detectMovement(entrada);
    if(verify == true){
        let freePos = blacks.getActualp;
        for(let i=0; i<squares.length; i++){
            if(squares[i].getId == id){
                let audio1 = document.getElementById("sound1");
                audio1.play();
                let squarePos = squares[i].getActualp;
                squares[i].changePosition(freePos);
                blacks.changePosition(squarePos);
                posiciones(freePos, id);
                posiciones(squarePos, "black");

                let win = 0;
                for(i=0; i<squares.length; i++){
                    if(squares[i].getActualp != squares[i].getInitialp){
                        win = win + 1;
                    }
                }
                if(win == 0){
                    let elements = document.getElementsByClassName("square");
                    for(let i = 0; i < elements.length; i++){
                        elements[i].style.pointerEvents = "none";
                    }
                    document.getElementById("button").innerHTML = "JUGAR NUEVAMENTE";
                    document.getElementById("button").style.visibility = "visible";
                    let audio3 = document.getElementById("sound3");
                    audio3.play();
                    window.alert("HAS GANADO!");
                }
                break;
            }
        }
    }
    else{
        let audio2 = document.getElementById("sound2");
        audio2.play();
        alert("Movimiento Imposible");
    }
}

function posiciones(actualp, id){
    if(actualp == 1){
        document.getElementById(id).style.marginLeft = "450px";
        document.getElementById(id).style.marginTop = "50px";
    }
    if(actualp == 2){
        document.getElementById(id).style.marginLeft = "610px";
        document.getElementById(id).style.marginTop = "50px";
    }
    if(actualp == 3){
        document.getElementById(id).style.marginLeft = "770px";
        document.getElementById(id).style.marginTop = "50px";
    }
    if(actualp == 4){
        document.getElementById(id).style.marginLeft = "450px";
        document.getElementById(id).style.marginTop = "210px";
    }
    if(actualp == 5){
        document.getElementById(id).style.marginLeft = "610px";
        document.getElementById(id).style.marginTop = "210px";
    }
    if(actualp == 6){
        document.getElementById(id).style.marginLeft = "770px";
        document.getElementById(id).style.marginTop = "210px";
    }
    if(actualp == 7){
        document.getElementById(id).style.marginLeft = "450px";
        document.getElementById(id).style.marginTop = "370px";
    }
    if(actualp == 8){
        document.getElementById(id).style.marginLeft = "610px";
        document.getElementById(id).style.marginTop = "370px";
    }
    if(actualp == 9){
        document.getElementById(id).style.marginLeft = "770px";
        document.getElementById(id).style.marginTop = "370px";
    }
}

function detectMovement(entrada){
    var actual = 0;
    for(let i=0; i<squares.length; i++){
        if(squares[i].getId == entrada){
            actual = squares[i].getActualp;
            break;
        }
    }
    console.log(actual);
    var free = blacks.getActualp;
    console.log(free);

    if(actual == 1){
        if(free == 2 || free == 4){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 2){
        if(free = 1 || free == 3 || free == 5){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 3){
        if(free == 2 || free == 6){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 4){
        if(free == 1 || free == 5 || free == 7){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 5){
        if(free == 2 || free == 4 || free == 6 || free == 8){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 6){
        if(free == 3 || free == 5 || free == 9){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 7){
        if(free == 4 || free == 8){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 8){
        if(free == 7 || free == 9 || free == 5){
            return true;
        }
        else{
            return false;
        }
    }
    if(actual == 9){
        if(free == 6 || free == 8){
            return true;
        }
        else{
            return false;
        }
    }
}



