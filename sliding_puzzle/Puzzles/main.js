//En base al desarollo de la pagina https://www.101computing.net/sliding-puzzle/

  
  function shuffle() {

  for (var row=1;row<=3;row++) { 
     for (var column=1;column<=3;column++) { 
    
      var row2=Math.floor(Math.random()*3 + 1);
      var column2=Math.floor(Math.random()*3 + 1); 
       
      cambioImagen("cell"+row+column,"cell"+row2+column2);
    } 
  } 
  }
  
  function clickVacio(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="cuadro9") { 
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)).className=="cuadro9") {
             cambioImagen("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="cuadro9") {
             cambioImagen("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="cuadro9") {
             cambioImagen("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="cuadro9") {
             cambioImagen("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }

  function cambioImagen(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }