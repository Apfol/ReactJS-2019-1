import React,{Component} from 'react';
import searchBar from './SearchBar.css';
import { search } from '../../store/actions/search'
import {connect} from 'react-redux';

class SearchBar extends Component{
    state = {
        searchTerm: this.props.searchTerm,
        filters: this.props.filers
    }

    handleChange = (event)=>{
        this.setState(
            {
                searchTerm: event.target.value
            }
        );
    }

    handleSubmit = (event)=>{
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        event.preventDefault();
        onFormSubmit(searchTerm);
        // TODO: CHANGE
        this.props.onSearchTerm(this.state.searchTerm, null);
    }
    
    render(){
        return (
            <form className={searchBar.button} onSubmit={this.handleSubmit}>
            <input type="text" name="searchTerm" placeholder="Search..." onChange={this.handleChange}></input>
            <div className={searchBar.searchButton}></div>
           </form>
        )
    }
}

const mapStateToProps = state=>{
    return {
        searchTerm: state.searchStore.searchTerm,
        filers: state.searchStore.filters,
    }
}

const mapDispathToProps = dispatch=>{
    return {
        onSearchTerm: (searchTerm, filters) => dispatch(search(searchTerm, filters))
    }
}

export default connect(mapStateToProps,mapDispathToProps)(SearchBar);