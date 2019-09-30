import React from 'react';
import classes from './sportsEquipment.css';
import axios from './Data/AxiosInstance.js';
class SportsEquipment extends React.Component {
    state={
      sEquipment:[]

    }

     render() {
       return (
         <div className={classes.pContainer}> 
          <h1 className={classes.pTitle}>Prestamo de Equipo Deportivo</h1>
           <div  className={classes.dropdown} style = {{background:"red",width:"200px"}} >
            <div className={classes.button} >  <a id="default"name="TopList"></a> </div>
   
             { null ? ( 
             <ul>
               
            <li ><a name="SportsElement">none</a></li>
            <li><a  name="SportsElement1">null</a></li>
            <li><a  name="SportsElement2" >NPI</a></li>
           
             </ul>
           ):
           (
             null
           )
           }
   
          </div>
          <div className={classes.Log}>
                <h2 className={classes.tLog}>Transacciones</h2>
                <p className={classes.tLog}>Elemento: </p>
                <p className={classes.tLog}>Codigo Estudiante: </p>
                <p className={classes.tLog}>Codigo Encargado:  </p>
              </div>
          <form >
           <div className={classes.Peoplecontainer}>

              <p className={classes.inputStudentLabel} >Codigo Estudiante: </p>
              <input type="text" name="inputStudent"  className={classes.inStudentCode}></input>
              <p className={classes.inputChargeLabel}>Codigo Encargado: </p>
              <input type="text" name= "inputCharge" className={classes.inChargeCode}></input>
              <button type="submit" value="Submit" className={classes.Borrow}>Prestar</button>
             
           </div>
           </form>
          
            
          </div>
   
       );
     }
}

export default SportsEquipment;