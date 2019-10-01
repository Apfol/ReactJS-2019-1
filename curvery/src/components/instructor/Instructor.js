import React, {Component} from 'react';
import Intructors from './Instructors';
import instructor from './Instructor.css';

class Intructor extends Component{
    render(){
        return(
            <div className={instructor.body}>
            <h1 className={instructor.title}>Creativos que pueden interesarte</h1>
            <Intructors></Intructors>
            </div>
        )
    }
}
export default Intructor;