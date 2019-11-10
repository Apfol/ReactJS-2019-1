import React,{Component} from 'react';

import { search } from '../../store/actions/search';
import {connect} from 'react-redux';

class SearchBar extends Component{
    state = {
        searchTerm: "",
        filters: []
    }

    handleChange = (event)=>{
        this.setState(
            {
                searchTerm: event.target.value
            }
        );
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        // TODO: CHANGE TO SEND FILTERS
        this.props.onSearchTerm(this.state.searchTerm, this.state.filters);
    }
    
    render(){
        return (
            <form  onSubmit={this.handleSubmit}>
            <input type="text" name="searchTerm" placeholder="Search..." onChange={this.handleChange}></input>
            <div></div>
           </form>
        )
    }
}


const mapDispatchToProps = dispatch=>{
    return {
        onSearchTerm: (searchTerm, filters) => dispatch(search(searchTerm, filters))
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);