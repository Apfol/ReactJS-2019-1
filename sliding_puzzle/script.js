
var emptyX=3;
var emptyY=3;
var emptyId=9;
function movement(pstY,pstX,idTable) {
  
  var content = document.getElementById(idTable);    
    
  if(pstX-1==emptyX && pstY==emptyY){
      content =document.getElementById(idTable);
      document.getElementById(emptyId).innerHTML = content.innerHTML;
      document.getElementById(idTable).innerHTML = "";
      emptyX=pstX;
      emptyY=pstY;
      emptyId=idTable;
    }

    if(pstX+1==emptyX  && pstY==emptyY){
      content =document.getElementById(idTable);
      document.getElementById(emptyId).innerHTML = content.innerHTML;
      document.getElementById(idTable).innerHTML = "";
      emptyX=pstX;
      emptyY=pstY;
      emptyId=idTable;
    }
    

    if(pstY-1==emptyY  && pstX==emptyX ){
      content  =document.getElementById(idTable);
      document.getElementById(emptyId).innerHTML = content.innerHTML;
      document.getElementById(idTable).innerHTML = "";
      emptyX=pstX;
      emptyY=pstY;
      emptyId=idTable;
    }

    if(pstY+1==emptyY  && pstX==emptyX ){
      content =document.getElementById(idTable);
      document.getElementById(emptyId).innerHTML = content.innerHTML;
      document.getElementById(idTable).innerHTML = "";
      emptyX=pstX;
      emptyY=pstY;
      emptyId=idTable;
    }
 
  
}

