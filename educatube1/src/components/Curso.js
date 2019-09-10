import React from "react";
import "./Curso-Style.css";

const Curso = props => {
  return (
    <div className='Cursos text-center shadow'>
        <h5 className='card-title'>{props.icon}    {props.title}</h5>
      <div className='card-body text-dark'>
        <p className='card-text text-secondary'>
      </p>        
      </div>
    </div>
  );
};
export default Curso;
