import React, {Component} from 'react';
import axios from 'axios';

import recommendeds from './Courses.css'

class Courses extends Component{
    state = {
        courses: [],
        error: []
    }
    componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://api.myjson.com/bins/17d4i5')
        .then(res => {
            const someArray = res.data;
            someArray.shift();
            someArray.shift();
            someArray.shift();
            someArray.shift();
            someArray.shift();
            someArray.shift();
            someArray.shift();
            someArray.shift();

            console.log(someArray);
            this.setState({courses: res.data});
        })
        .catch(error => {
            this.setState({error: error})
            alert('Hola el error es ' + error);
        })
    }
   
    render(){
        return(
            <div className={recommendeds.container}>
            <main className={recommendeds.grid}>
            {this.state.courses.map(
                course => <article key={Date.now()} className={recommendeds.card}>
    <img src={course.image} alt="Sample"></img>
    <div className={recommendeds.text}>
    <span>{course.title1}</span>
      <h3>{course.title2}</h3>
      <p>{course.body}</p>
      <button>SEGUIR</button>
    </div>
  </article>
  )}
</main>
            </div>
        )
    }
}
export default Courses;