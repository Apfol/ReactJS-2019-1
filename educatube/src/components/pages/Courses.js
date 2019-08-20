import React, { Component } from "react";
import Course from "./Course";
import './Courses.css';
//Data
import courses from '../data/courses.json'
 
import img1 from "../resources/img/csm_maraton_12k-8_5a79ca745a.jpg";
 
class Courses extends Component {
    state = {
        courses: courses
    }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
          {this.state.courses.map(e => 
            <Course key={e.id} imgsrc={img1} title={e.title} />)}
          </div>
        </div>
      </div>
    );
  }
}
 
export default Courses;