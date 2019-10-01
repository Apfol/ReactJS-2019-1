import React, {Component} from 'react';
import filtro from './Filtro.css'


class Filtro extends Component{
    render(){
        return(
            <div className={filtro.filtro}>
                
                <div className={filtro.categorias}>
                <a href="#">Mis cursos</a> <br />
                <a href="#">Mi lista</a> <br />
                <h4>Categorias</h4>
                <a href="#"> -Ilustración</a> <br />
                <a href="#"> -Fotografía y Video</a> <br />
                <a href="#"> -Marketing y Negocios</a> <br />
                <a href="#"> -Diseño</a> <br />
                <a href="#"> -3D y Animación</a> <br />
                <a href="#"> -Craft</a> <br />
                <a href="#"> -Caligrafía y Tipografía</a> <br />
                <a href="#"> -Tecnología</a> <br />
                </div>
            </div>
        )
    }
}
export default Filtro;