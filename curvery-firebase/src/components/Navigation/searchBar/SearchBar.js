import React, { Component } from 'react';
import { search } from '../../store/actions/search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './SearchBar.css'
class SearchBar extends Component {
    state = {
        searchTerm: "",
        filters: []
    }

    handleChange = (event) => {
        this.setState(
            {
                searchTerm: event.target.value
            }
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // TODO: CHANGE TO SEND FILTERS
        this.props.onSearchTerm(this.state.searchTerm, this.state.filters);
        
        this.props.history.push("/cursos")
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <input className="input_SEARCHBAR" type="text" name="searchTerm" placeholder="Search..." onChange={this.handleChange} ></input>
                <div></div>
            </form>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSearchTerm: (searchTerm, filters) => dispatch(search(searchTerm, filters))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));