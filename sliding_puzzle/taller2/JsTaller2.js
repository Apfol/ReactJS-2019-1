var movements = 0;
function move(positon){
    var blankPosition = document.getElementsByClassName("p9")[0].id[3]
    var piecePosition = positon
    var validation = blankPosition - piecePosition
    if(validation == -1 || validation == 1 
        || validation == 3 || validation == -3)
    {
        document.getElementsByClassName("p9")[0].className = document.getElementById("img" + positon).className
        document.getElementById("img" + positon).className = "p9"  
        movements ++    
        document.getElementsByClassName("movements-number")[0].innerHTML  = movements  
    }     
}
function shuffle()
{
    var order = [1,2,3,4,5,6,7,8,9]
          
    for(let x=0;x<=8;x++)
    {
        var random = Math.random() * (7) + 1  
        var temp = order[x]
        order[x] = order[parseInt(random, 10)]
        order[parseInt(random, 10)] = temp
    }
    var msg = ""
    
    for(let i=1;i<=9;i++)
    {       
        var nuv =  document.getElementsByClassName("p"+ i)[0].className        
        document.getElementsByClassName("p"+ i)[0].className = document.getElementsByClassName("p" + order[i-1] )[0].className
        document.getElementsByClassName("p" + order[i-1] )[0].className = nuv        
    }
    movements = 0    
}