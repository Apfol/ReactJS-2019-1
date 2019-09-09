import React from 'react';
import classes from './AddActivity.css';
import Activity from './Activity';

class AddActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      cont: 1,
      activities: [
        { id: '1', activity: "aksldmkasmd", done: false }
      ],
    };
  }

  onChangeValue = event => {
    this.setState({ text: event.target.value });
  };

  onRemoveItem = id => {
    this.setState(state => {
      const activities = state.activities.filter(item => item.id !== id);
      return {
        activities,
      };
    });
  };

  addItem () {
    this.setState(state => {      
      const cont = state.cont + 1
      const item = {id: cont, activity:state.text, done:false}
      state.activities.push(item); 
      const activities = state.activities     
      return {
        text:'',
        cont,
        activities,
      };
    });
  };
  
  onUpdateItem = i => {
    this.setState(state => {
      const activities = state.activities.map((item,id) => {        
        if (item.id === i) {
          item.done = !item.done
        } else {
          return item
        }
        return item
      });
      return {
        activities,
      };
    });
  };
  
      
    render(){
        return (
            <div className={classes.AddActivity}>
              <input placeholder="Coloque la actividad"  value = {this.state.text} onChange={ this.onChangeValue} ></input>
              <button className={classes.Adicionarbtn} onClick={() => this.addItem()}>
                Adicionar Actividad
              </button>  
              <ul className={classes.ActivityList}>
                {this.state.activities.map(item => <Activity id = {item.id} activity = {item.activity} done = {item.done}
                 change = {this.onUpdateItem} remove = {this.onRemoveItem}/>)}                    
              </ul>                            
            </div>
          );
    }   
  }
  
  export default AddActivity;