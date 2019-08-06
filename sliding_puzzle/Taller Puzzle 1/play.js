var movements = 0
var name = prompt("Escriba su nombre")
var playerName = []
var score = []
var rightArray = ["cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8"]
var puzzleArray = []
var round = 0
playerName.push(name)
console.log(playerName[0])

var c1
var c2
var c3
var c4
var c5
var c6
var c7
var c8
var c9  

function exchange(cell1) {    
    
    var temp =document.getElementById(cell1).className;
    var posiE = document.querySelector('.'+temp).id;        
    var posiC = document.querySelector('.cell9').id;       
    var num = posiC[8] - posiE[8]           

    if (num == 3 || num == -3 || num == 1 || num == -1) {
        document.getElementsByClassName("cell9")[0].className = temp;
        document.getElementById(cell1).className = "cell9";  
        movements = movements + 1                      
    }     
    document.getElementById("movements").textContent = "Movimientos: " + movements       
}

function shufflePieces(){
    
    var order = ["cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8","cell9"] 
    var newOrder = order.sort(function () {return Math.random()-0.5}) 
    
    name = prompt("Escriba su nombre")
    score.push(movements)
    playerName.push(name)        

    if (round > 0) {
        addElement(playerName[round],score[round])    
    }else{
        addElement(playerName[0],score[0])
    }

    movements = 0
    round = round + 1
    puzzleArray = []   

    document.getElementById("movements").textContent = "Movimientos: "
    document.getElementById("position1").className = newOrder[0]      
    document.getElementById("position2").className = newOrder[1]    
    document.getElementById("position3").className = newOrder[2]
    document.getElementById("position4").className = newOrder[3]
    document.getElementById("position5").className = newOrder[4]
    document.getElementById("position6").className = newOrder[5]
    document.getElementById("position7").className = newOrder[6]
    document.getElementById("position8").className = newOrder[7]
    document.getElementById("position9").className = newOrder[8]

}

function addElement(player,score) {

    var newP = document.createElement("p"); 
    var newContent = document.createTextNode(player + ": " + score); 
    newP.appendChild(newContent); 
    newP.className = "newP"
 
    var currentP = document.getElementById("history"); 
    document.body.insertBefore(newP, currentP);     
}