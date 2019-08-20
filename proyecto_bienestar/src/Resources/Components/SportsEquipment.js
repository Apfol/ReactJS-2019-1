import React from 'react';
import './sportsEquipment.css';


class SportsEquipment extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
          displayMenu: false, inputStudent:'', inputCharge:'',shStudent:'',shCharge:'',shElement:'',
          TopList:'Select', SportsElement:this.props.object[0].SportsElement,
          SportsElement1:this.props.object[0].SportsElement1,SportsElement2:this.props.object[0].SportsElement2
        };
   
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setdropdown=this.setdropdown.bind(this);
   
   };
   handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
      
    });
    
   
  }

  handleSubmit(event) {
    alert('Codigo estudiante: ' + this.state.inputStudent + 
    "\nCodigo Encargado: " + this.state.inputCharge + 
    "\nElemento: "+this.state.SportsElement);
    const sCode=this.state.inputStudent;
    const cCode=this.state.inputCharge;
    const sElement=this.state.TopList
    this.setState({
      shCharge:cCode,
      shStudent:sCode,
      shElement:sElement,
      inputCharge:"",
      inputStudent:"",
      TopList:"Select"
      
    })
   
    event.preventDefault();

  }

   showDropdownMenu(event) {
       event.preventDefault();
       this.setState({ displayMenu: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu);
       });
     }
   
     hideDropdownMenu() {
       this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
       });
    
     }
     setdropdown(event){
      const target = event.target;
      const name=target.name;
      if (name=="SportsElement"){
        this.setState({
          TopList:this.state.SportsElement
        })
      }else if(name=="SportsElement1"){
        this.setState({
          TopList:this.state.SportsElement1
        })
      }else if(name=="SportsElement2"){
        this.setState({
          TopList:this.state.SportsElement2
        })
      }
      
      
    
    
    }
    
    
   
     render() {
       return (
         <div className="pContainer"> 
          <h1 className="pTitle">Prestamo de Equipo Deportivo</h1>
           <div  className="dropdown" style = {{background:"red",width:"200px"}} >
            <div className="button" onClick={this.showDropdownMenu}>  <a id="default"name="TopList">{this.state.TopList}</a> </div>
   
             { this.state.displayMenu ? ( 
             <ul>
               
            <li ><a onClick={this.setdropdown}  name="SportsElement" value={this.state.SportsElement} >{this.state.SportsElement}</a></li>
            <li><a  name="SportsElement1" onClick={this.setdropdown} value={this.state.SportsElement1}>{this.props.object[0].SportsElement1}</a></li>
            <li><a  name="SportsElement2" onClick={this.setdropdown}value={this.state.SportsElement2}>{this.props.object[0].SportsElement2}</a></li>
           
             </ul>
           ):
           (
             null
           )
           }
   
          </div>
          <form onSubmit={this.handleSubmit}>
           <div className="Peoplecontainer">

              <p className="inputStudentLabel" >Codigo Estudiante: </p>
              <input type="text" name="inputStudent" value={this.state.inputStudent} onChange={this.handleChange} className="inStudentCode"></input>
              <p className="inputChargeLabel">Codigo Encargado: </p>
              <input type="text" name= "inputCharge" value={this.state.inputCharge}  onChange={this.handleChange} className="inChargeCode"></input>
              <button type="submit" value="Submit" className="Borrow">Prestar</button>
              <div className="Log">
                <h2 className="Logheader">Transacciones</h2>
                <p className="tLogElement">Elemento: {this.state.shElement}</p>
                <p className="tLogStudentCode">Codigo Estudiante: {this.state.shStudent} </p>
                <p className="tLogChargeCode">Codigo Encargado:  {this.state.shCharge}</p>
              </div>
           </div>
           </form>
          
            
          </div>
   
       );
     }
}

export default SportsEquipment;