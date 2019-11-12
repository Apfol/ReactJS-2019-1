import React, {Component} from 'react';
import './FilterCourse.css';


class FilterCourse extends Component{
    render(){
        return(
            <div>
            <ul className="ul_FILTERCOURSE">
            <div className="filters_FILTERCOURSE">
            <li ><h2 className="title_FILTERCOURSE">MIS CURSOS</h2></li>
            <li ><h3 className="title_FILTERCOURSE">Filtrar por :</h3></li>
            <li className="li_FILTERCOURSE"><a href="#">Ilustración</a></li>
            <li className="li_FILTERCOURSE"><a href="#">Fotografía y Video</a></li>
            <li className="li_FILTERCOURSE"><a href="#">Marketing y Negocios</a></li>
            <li className="li_FILTERCOURSE"><a href="#">Diseño</a></li>
            <li className="li_FILTERCOURSE"><a href="#">3D Y Animación</a></li>
            <li className="li_FILTERCOURSE"><a href="#">Craft</a></li>
            <li className="li_FILTERCOURSE"><a href="#">Caligrafía y Tipografía</a></li>
            <li className="li_FILTERCOURSE"><a href="#">Tecnología</a></li>
            </div>
          </ul>
            </div>
        )
    }
}
export default FilterCourse;