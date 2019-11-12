import React, {Component} from 'react';
import Courses from './Courses';
import './Course.css';
import FilterCourse from './Filter/FilterCourse';
class Course extends Component{
    render(){
        return(
            <div className="body_Course">
            <Courses></Courses>
            <FilterCourse></FilterCourse>
            </div>
        )
    }
}
export default Course;