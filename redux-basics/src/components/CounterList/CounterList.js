import React, { Component } from 'react'
import { connect } from 'react-redux';
import './List.css';
class CounterList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.counterList.map((value, index) => {
                        return (
                            <div className="List-Container">
                            <p key={index}> {index}. Results: {value}</p>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        counterList: state.saveCounterReducer.counterList
    }
}

export default connect(mapStateToProps)(CounterList);