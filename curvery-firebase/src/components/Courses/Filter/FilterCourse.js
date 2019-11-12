import React, {Component} from 'react';
import { search } from '../../store/actions/search';
import {connect} from 'react-redux';

import './FilterCourse.css';


class FilterCourse extends Component{
    state = {
        searchTerm: "",
        filters: []
    }
    handleSubmit = (SearchItem,event)=>{
        this.setState(
            {
                searchTerm: SearchItem
            }
        );
        event.preventDefault();
        // TODO: CHANGE TO SEND FILTERS
        this.props.onSearchTerm(this.state.searchTerm, this.state.filters);
    }
    render(){
        return(
            <div>
            <ul className="ul_FILTERCOURSE">
            <div className="filters_FILTERCOURSE">
            <li ><h2 className="title_FILTERCOURSE">MIS CURSOS</h2></li>
            <li ><h3 className="title_FILTERCOURSE">Filtrar por :</h3></li>
            
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Ilustration courses",e)}>Ilustración</a></li>
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Photography courses",e)}>Fotografía y Video</a></li>
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Marketing courses",e)}>Marketing y Negocios</a></li>
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Design courses",e)}>Diseño</a></li>
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Animation courses",e)}>3D Y Animación</a></li>
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Craft courses",e)}>Craft</a></li>
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Typography courses",e)}>Caligrafía y Tipografía</a></li>
            <li className="li_FILTERCOURSE"><a onClick={(e) =>this.handleSubmit("Technology courses",e)}>Tecnología</a></li>
            </div>
          </ul>
            </div>
        )
    }
    
}
const mapDispatchToProps = dispatch=>{
    return {
        onSearchTerm: (searchTerm, filters) => dispatch(search(searchTerm, filters))
    }
}

export default connect(null,mapDispatchToProps)(FilterCourse);