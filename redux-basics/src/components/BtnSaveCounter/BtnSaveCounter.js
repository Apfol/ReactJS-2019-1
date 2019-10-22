import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

class BtnSaveCounter extends Component {

    saveClicked(){
        console.log("save clicked ctr",this.props.ctr);
        
        this.props.onBtnSaveClicked(this.props.ctr);
    }
    render () {
        return (
            <div>
                <button  onClick={()=> this.saveClicked() }>Save</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterStore.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBtnSaveClicked: (value) => dispatch({
            type: actionTypes.SAVE_BTN_ACTION,
            payload: {
                value: value
            }
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnSaveCounter);