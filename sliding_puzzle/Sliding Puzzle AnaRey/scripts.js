function nuevaPos(caja1,caja2) {
    var temporal = document.getElementById(caja1).className;
    document.getElementById(caja1).className = document.getElementById(caja2).className;
    document.getElementById(caja2).className = temporal;
  }
  
  window.onload=function() {
    
    for (var fila=1;fila<=3;fila++) { 
       for (var columna=1;columna<=3;columna++) { 
      
        var fila2=Math.floor(Math.random()*3 + 1); 
        var columna2=Math.floor(Math.random()*3 + 1); 
         
        nuevaPos("caja"+fila+columna,"caja"+fila2+columna2); 
      } 
    } 
    }

  function cuadroPos(fila,columna) {
    var caja = document.getElementById("caja"+fila+columna);
    var cuadro = caja.className;
    if (cuadro!="cuadroBlanco") { 
         
         if (columna<3) {
           if ( document.getElementById("caja"+fila+(columna+1)).className=="cuadroBlanco") {
             nuevaPos("caja"+fila+columna,"caja"+fila+(columna+1));
           }
         }
        
         if (columna>1) {
           if ( document.getElementById("caja"+fila+(columna-1)).className=="cuadroBlanco") {
             nuevaPos("caja"+fila+columna,"caja"+fila+(columna-1));
           }
         }
         
         if (fila>1) {
           if ( document.getElementById("caja"+(fila-1)+columna).className=="cuadroBlanco") {
             nuevaPos("caja"+fila+columna,"caja"+(fila-1)+columna);
           }
         }
        
         if (fila<3) {
           if ( document.getElementById("caja"+(fila+1)+columna).className=="cuadroBlanco") {
             nuevaPos("caja"+fila+columna,"caja"+(fila+1)+columna);
           }
         } 
    }
    
  }