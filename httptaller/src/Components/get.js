import React, { Component } from 'react';

class get extends Component {
    onSubmit = (e) => {

        e.preventDefault();
        
        const id = document.getElementById('id').value;
        fetch("http://localhost:3001/posts").then(response => {
            return response.json()
          })
          .then(data => {
            // Work with JSON data here
            document.getElementById('titulo').value=data[id].title;
            document.getElementById('body').value=data[id].body;

          })
     
    }


    render() {
        return (
            <div ClassName='get'>
                <label>Selecione id(0-9):</label><input type="text" id="id"></input>
                <input type="submit" value="GET" onClick={this.onSubmit}></input> <br />
                <label>Titulo</label><input type="text" id="titulo" disabled></input><br />
                <label>Cuerpo</label><input type="text" id="body" disabled></input>

            </div>

        );
    }
}
export default get;