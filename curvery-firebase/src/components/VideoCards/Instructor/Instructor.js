import React, {Component} from 'react';
import Intructors from './Instructors';
import './Instructor.css';

class Intructor extends Component{
    render(){
        return(
            <div className="body_INSTRUCTOR">
            <h1 className="title_INSTRUCTOR">Creativos que pueden interesarte</h1>
            <Intructors></Intructors>
            </div>
        )
    }
}
export default Intructor;