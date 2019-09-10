import React,{Component} from 'react';
import './App.css';
//Components
import Menu from './components/Menu';
import Map from './components/Map';
import Card from './components/Cards';
import Cursos from './components/Cursos';
import Carousel from './components/Carousel';

//Data
import tasks from './data/tasks.json';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
console.log(tasks);


class App extends Component{
  state = {
    tasks: tasks
  }
  render(){
    return <div>
    <Map tasks={this.state.tasks}/>
    <Card tasks={this.state.tasks}/>
    <Carousel />

    </div>
  }
}

export default App;
