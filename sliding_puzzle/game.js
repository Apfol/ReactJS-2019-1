function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function scramble() {
    for (var row=1;row<=4;row++) {
      for (var column=1;column<=4;column++) {
      
        var row2=Math.floor(Math.random()*4 + 1); 
        var column2=Math.floor(Math.random()*4 + 1); 
        
        swapTiles("cell"+row+column,"cell"+row2+column2);
      } 
    } 
  }
  
  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile16") { 
      //Checking if white tile is on the right side
      if (column<4) {
        if ( document.getElementById("cell"+row+(column+1)).className=="tile16") {
          swapTiles("cell"+row+column,"cell"+row+(column+1));
          return;
        }
      }

      //Checking if white tile is on the left side
      if (column>1) {
        if ( document.getElementById("cell"+row+(column-1)).className=="tile16") {
          swapTiles("cell"+row+column,"cell"+row+(column-1));
          return;
        }
      }

        //Checking if white tile is up
      if (row>1) {
        if ( document.getElementById("cell"+(row-1)+column).className=="tile16") {
          swapTiles("cell"+row+column,"cell"+(row-1)+column);
          return;
        }
      }

      //Checking if white tile is down
      if (row<4) {
        if ( document.getElementById("cell"+(row+1)+column).className=="tile16") {
          swapTiles("cell"+row+column,"cell"+(row+1)+column);
          return;
        }
      } 
    }
  }
  function winGame(){
    var correctTiles=0;
    var tileCount=1;
    for (var row=1;row<=4;row++) {
      for (var column=1;column<=4;column++) {
        if(document.getElementById("cell"+row+column).className=="tile"+tileCount){
          correctTiles++;      
        }
        tileCount++;
      } 
    }
   
    if(correctTiles>15){
      window.alert("Felicidades!! Ganaste.");
    }else{
      window.alert("Aún no completas el rompecabezas :(");
    }
  }