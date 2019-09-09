import React , {Component}from 'react';
import logo from './logo.svg';
import {pedidos} from './tareas.json';
import './App.css';
import Navegacion from './components/navegacion';

class App extends Component {
  constructor(){
    super();
    this.state = {

    pedidos
/*          titulo: 'Orden numero ',
        pizza: 'Pizza de ',
        cliente: 'cliente :' */

    }
}
  render(){
    const pedido =  this.state.pedidos.map((pedido, i) => {
         return ( 
             <div className="card">
                 {pedido.Npedido}
             </div>
         )
     })
     return(
         <div className="card">
             
           { pedido }
         </div>
  );
};
}

export default App;
