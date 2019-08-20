import React from "react";
import "./Course.css";
 
const Course = props => {
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={props.imgsrc} alt='Image 1' className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <a href='#' className='btn btn-outline-success'>
          Ver Más
        </a>
      </div>
    </div>
  );
};
 
export default Course;