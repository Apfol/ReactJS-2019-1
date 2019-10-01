import React, {Component} from 'react';
import axios from 'axios';
import categories from './Categories.css'
class Categories extends Component{
    state = {
        courses: [],
        error: []
    }
    componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://api.myjson.com/bins/166vo5')
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
            <main className={categories.grid}>
            {this.state.courses.map(
                course => <article key={Date.now()} className={categories.card}>
    <img src={course.image} alt="Sample"></img>
    <div className={categories.text}>
      <h3>{course.title}</h3>
    </div>
  </article>
  )}
</main>
            </div>
        )
    }
}
export default Categories;