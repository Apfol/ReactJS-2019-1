var movements = 0;
var score = [];
var answerArray = ["g-container1","g-container2","g-container3","g-container4","g-container5","g-container6","g-container7","g-container8","g-container9"];
var puzzleArray = [];
var round = 0;


function moves(pos) {     
    
    var temp =document.getElementById(pos).className;
    var posnow = document.querySelector('.'+temp).id;        
    var posnext = document.querySelector('.g-container9').id;   
    var num = posnext[3] - posnow[3];         

    if (num == 3 || num == -3 || num == 1 || num == -1) {
        document.getElementsByClassName("g-container9")[0].className = temp;
        document.getElementById(pos).className = "g-container9";  
        movements = movements + 1;                     
    }     
    document.getElementById("movements").textContent = "Movimientos= " + movements;      
}

function scramble(){
    
    
        var order = ["g-container1","g-container2","g-container3","g-container4","g-container5","g-container6","g-container7","g-container8","g-container9"] 
        var newOrder = order.sort(function () {return Math.random()-0.5}) 
        score.push(movements);
        movements = 0
        round = round + 1
        puzzleArray = []   
    
        document.getElementById("movements").textContent = "Movimientos= ";
        
        document.getElementById("pos1").className = newOrder[0];    
        document.getElementById("pos2").className = newOrder[1];   
        document.getElementById("pos3").className = newOrder[2];
        document.getElementById("pos4").className = newOrder[3];
        document.getElementById("pos5").className = newOrder[4];
        document.getElementById("pos6").className = newOrder[5];
        document.getElementById("pos7").className = newOrder[6];
        document.getElementById("pos8").className = newOrder[7];
        document.getElementById("pos9").className = newOrder[8];
        
    }
    

