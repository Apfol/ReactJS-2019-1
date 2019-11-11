import React, {Component} from 'react';
import './filterMyCourses.css';


class FIlter extends Component{
    render(){
        return(
            <div>
            <ul className="ul_FILTERMYCOURSES">
            <div className="filters_FILTERMYCOURSES">
            <li ><h2 className="title_FILTERMYCOURSES">MIS CURSOS</h2></li>
            <li ><h3 className="title_FILTERMYCOURSES">Filtrar por :</h3></li>
            <li className="li_FILTERMYCOURSES"><a href="#">Ilustración</a></li>
            <li className="li_FILTERMYCOURSES"><a href="#">Fotografía y Video</a></li>
            <li className="li_FILTERMYCOURSES"><a href="#">Marketing y Negocios</a></li>
            <li className="li_FILTERMYCOURSES"><a href="#">Diseño</a></li>
            <li className="li_FILTERMYCOURSES"><a href="#">3D Y Animación</a></li>
            <li className="li_FILTERMYCOURSES"><a href="#">Craft</a></li>
            <li className="li_FILTERMYCOURSES"><a href="#">Caligrafía y Tipografía</a></li>
            <li className="li_FILTERMYCOURSES"><a href="#">Tecnología</a></li>
            </div>
          </ul>
            </div>
        )
    }
}
export default FIlter;