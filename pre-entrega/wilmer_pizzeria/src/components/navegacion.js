import React, {Component} from 'react';

class Navegacion extends Component{
    render(){
        return(
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
               <h1>Pizzeria_Wilmer</h1> 
               <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pizzas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Ordernes</a>
      </li>
      
    </ul>
    </div>
                </nav>
            </div>
        )
    }
}
export default Navegacion;