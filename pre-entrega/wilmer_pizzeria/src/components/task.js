import React, {Component} from 'react';
import {pedidos} from '../tareas.json';
class Task extends Component{

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
                
            </div>
        )
    }
}
export default Navegacion;