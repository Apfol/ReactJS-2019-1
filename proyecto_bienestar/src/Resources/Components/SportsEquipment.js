import React from 'react';
import classes from './sportsEquipment.css';
import axios from './Data/AxiosInstance.js';
class SportsEquipment extends React.Component {
    state={
      sEquipment:[],
        id:"",
        name:"",
        StudentId:"",
        ChargeId:"",
        IsBorrowed:"true",
        transaction:{
        name:"",
        StudentId:"",
        ChargeId:""
        }
    }
    componentDidMount(){
      axios.get('/sElement')
      .then(response =>{
        let elements=response.data;
        elements=elements.map( sElement =>{
          return{
           id:sElement.id,
           name:sElement.Name,
           StudentId:sElement.StudentId,
           isBorrowed:sElement.IsBorrowed
          }
        });
        this.setState({
          sEquipment:elements
          });
      })
    }
    handleStudentChange= e =>{
      this.setState({
        StudentId: e.target.value
      });
      
    }

    handleChargeChange= e =>{
      this.setState({
        ChargeId: e.target.value
      });
      
    }
    handleElementChange= e =>{
      this.setState({
        name: e.target.value
      });
     
    }

    handleSubmit= e=>{
      e.preventDefault();
      this.setState({
        transaction:{
        name:this.state.name,
        StudentId:this.state.StudentId,
        ChargeId:this.state.ChargeId
        }
      });
      this.setState({
        id:"",
        name:"",
        StudentId:"",
        ChargeId:"",
        IsBorrowed:"true"
      });
    }

     render() { 
     
       return (
         <div className={classes.pContainer}> 
          <h1 className={classes.pTitle}>Prestamo de Equipo Deportivo</h1>
           <div  className={classes.dropdown} style = {{background:"lightred",width:"211px",height:"61px",borderRadius:"5%"}} >
            <select  onChange={this.handleElementChange} value={this.state.name} className={classes.button}>{
                 this.state.sEquipment.map((obj) => {
                     return <option   value={obj.name}>{obj.name}</option>  
                 })
              }</select>
          
   
          </div>

          <div className={classes.Log}>
                <h2 className={classes.tLog}>Transacciones</h2>
                <p className={classes.tLog} >Elemento: {this.state.transaction.name} </p>
                <p className={classes.tLog}>Codigo Estudiante: {this.state.transaction.StudentId}</p>
                <p className={classes.tLog}>Codigo Encargado:  {this.state.transaction.ChargeId}</p>
              </div>
          <form onSubmit={this.handleSubmit}>
           <div className={classes.Peoplecontainer}>
              
              <p className={classes.inputStudentLabel} >Codigo Estudiante: </p>
              <input type="text" onChange={this.handleStudentChange} value={this.state.StudentId}className={classes.inStudentCode}></input>
              <p className={classes.inputChargeLabel}>Codigo Encargado: </p>
              <input type="text" onChange={this.handleChargeChange}className={classes.inChargeCode}value={this.state.ChargeId}></input>
              <button type="submit" value="Submit" className={classes.Borrow}>Prestar</button>
              
           </div>
           </form>
          
            
          </div>
   
       );
     }
}

export default SportsEquipment;