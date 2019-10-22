import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CounterList.css'

class CounterList extends Component {

    render () {
        
        return (
            <ul className="countList">
                {this.props.list.map((count,index)=> <li key={index}>{count}</li> )}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.counterList.countList
    }
}


export default connect(mapStateToProps)(CounterList);