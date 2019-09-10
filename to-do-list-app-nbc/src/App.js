import React, {Component} from 'react';
import './Style.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(id, value) {
    // update react state
    this.setState({ [id]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      newItem: "",
      list   
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  
  render() {
    return (
      <div>
      <h1 className="app-title">Lista De Tareas</h1>
        <div>
          Agregar tareas:
          <br />
          <input
            type="text"
            placeholder="Escriba su tarea"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          &nbsp; 
          <button className="add-btn" onClick={() => this.addItem()} disabled={!this.state.newItem.length}>
            <i>+</i>
          </button>
          <br /> 
          <ul>
            Tareas:
            {this.state.list.map(item => {
              return (
                <li className="app-tareas" key={item.id}>
                  {item.value}
                  &nbsp; 
                  <button className="btn" onClick={() => this.deleteItem(item.id)}>
                    <i>x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div> 
    );
  }
}

export default App;
