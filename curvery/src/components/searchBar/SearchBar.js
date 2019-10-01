import React,{Component} from 'react';
import searchBar from './SearchBar.css';
class SearchBar extends Component{
    state = {
        searchTerm: '',
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
    }
    
    render(){
        return (
            <form className={searchBar.button} onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search..." onChange={this.handleChange}></input>
            <div className={searchBar.searchButton}></div>
           </form>
        )
    }
}

export default SearchBar;