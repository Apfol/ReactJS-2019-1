import React, {Component} from 'react';
import axios from 'axios';

import './Instructors.css';

class Intructors extends Component{
    state = {
        courses: [],
        error: []
    }
    componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://prueba-6418b.firebaseio.com/persona.json')
        .then(res => {
            console.log(res);
            this.setState({courses: res.data});
        })
        .catch(error => {
            this.setState({error: error})
            alert('Hola el error es ' + error);
        })
    }
    render(){
        
        return(
            <div>
            <main className="grid_INSTRUCTORS">
            {this.state.courses.map(
                course => <article  className="card_INSTRUCTORS">
    <img className="image_circle_INSTRUCTORS" src={course.wallpaper} alt="Sample"></img>
    <img className="image_INSTRUCTORS" src={course.profile} alt="Sample"></img>
    <div className="text_INSTRUCTORS">
    <span>{course.title1}</span>
      <h3>{course.title2}</h3>
      <p>{course.body}</p>
      <button>VER PROYECTOS</button>
    </div>
  </article>
  )}
</main>
            </div>
        )
    }
}
export default Intructors;