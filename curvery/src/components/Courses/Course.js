import React, {Component} from 'react';
import Courses from './Courses';
import recommended from './Course.css';

class Course extends Component{
    render(){
        return(
            <div className={recommended.body}>
            <h1 className={recommended.title}>Cursos</h1>
            <Courses></Courses>
                <div className={recommended.pag}>
                <a href="#">&laquo;</a>
                <a href="#" className={recommended.active}>1</a>
                <a href="#" >2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
                </div>
            </div>
        )
    }
}
export default Course;