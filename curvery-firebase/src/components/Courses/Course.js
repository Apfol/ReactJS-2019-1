import React, {Component} from 'react';
import Courses from './Courses';
import recommended from './Course.css';

class Course extends Component{
    render(){
        return(
            <div className={recommended.body}>
            <h1 className={recommended.title}>Cursos</h1>
            <Courses></Courses>
            </div>
        )
    }
}
export default Course;