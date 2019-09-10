import React, { Component } from 'react';
import Radium from 'radium';
import './Lista-Style.css'

class Lista extends Component {
    onSubmit = (e) => {

        e.preventDefault();
        //const v=document.getElementById('Confirm').value;
        //alert(v);
    }
    borrar= (id,e) => {
        e.preventDefault();
        document.getElementById(id).style.textDecoration="line-through";
        
    }
  
    render() {
        return (
            <div ClassName='lista'>
                <h1>Lista por hacer:</h1>
                <ul>
                <li><h2 id="1">Realizar tarea 1</h2><input type="submit"  value="realizado" onClick={(e) =>this.borrar(1,e)} ></input></li>
                <li> <h2 id="2">Realizar tarea 2</h2><input type="submit"  value="realizado" onClick={(e) =>this.borrar(2,e)} ></input> </li>
                <li><h2 id="3">Realizar tarea 3</h2><input type="submit"  value="realizado" onClick={(e) =>this.borrar(3,e)} ></input></li>
                <li><h2 id="4">Realizar tarea 4</h2><input type="submit"  value="realizado" onClick={(e) =>this.borrar(4,e)} ></input></li>
                <li><h2 id="5">Realizar tarea 5</h2><input type="submit"  value="realizado" onClick={(e) =>this.borrar(5,e)} ></input> <br/></li>
                </ul>
            </div>

        );
    }
}
export default Radium(Lista);
