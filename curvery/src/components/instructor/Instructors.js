import React, {Component} from 'react';
import axios from 'axios';

import instructors from './Instructors.css'

class Intructors extends Component{
    state = {
        courses: [],
        error: []
    }
    componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://api.myjson.com/bins/13wej9')
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
            <main className={instructors.grid}>
            {this.state.courses.map(
                course => <article key={Date.now()} className={instructors.card}>
    <img className={instructors.image_circle} src={course.wallpaper} alt="Sample"></img>
    <img className={instructors.image} src={course.profile} alt="Sample"></img>
    <div className={instructors.text}>
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