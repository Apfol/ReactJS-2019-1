import React, { Component } from 'react'
import { connect } from 'react-redux';

class List1 extends Component {

    render() {
        return (
            <div>
                {
                    this.props.List.map((value) => {
                        return (
                            <li>{value}</li>
                        );
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        List: state.saveCounterReducer.List
    }
}

export default connect(mapStateToProps)(List1);
