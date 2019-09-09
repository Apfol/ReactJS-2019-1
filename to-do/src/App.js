import React, {Component} from 'react';
import './App.css';


class App extends Component{
  
    constructor(props){
      super(props);
      this.state = {
        newItem: "",
        list: []
      };
    }
    updateInput(key, value) {
      this.setState({ [key]: value });
    }
    deleteItem(id){
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList}); 
    }
    addItem(){
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      })
    }
    render(){
    return (
    <div className="App">
      <div>
        <h1 className="app-title">
          To Do List
        </h1>
        <div className="container">
          Añade una acción a realizar...
          <br />
          <input className = "input"
          type="text" placeholder="Ingrese texto aquí" 
          value={this.state.newItem} 
          onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button 
          className = "add-btn btn-floating" 
          onClick={() => this.addItem()}
          >
            Añadir
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key = {item.id}>
                  {item.value}
                  <button className = "del-btn"
                  onClick = {() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>);
  }
}
  

export default App;
