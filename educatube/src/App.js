import React,{Component} from 'react';
import './App.css';
//Components
import Menu from './components/Menu';
//Data
import tasks from './data/tasks.json'
console.log(tasks);


class App extends Component{
  state = {
    tasks: tasks
  }
  render(){
    return <div>
    <Menu tasks={this.state.tasks}/>
    </div>
  }
}

export default App;
