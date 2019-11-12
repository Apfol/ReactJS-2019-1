import React, {Component} from 'react';
import Courses from './Courses';
import './Course.css';

class Course extends Component{
    render(){
        return(
            <div className="body_Course">
            <h1 className="title_Course">Cursos</h1>
            <Courses></Courses>
            </div>
        )
    }
}
export default Course;