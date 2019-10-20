import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import StepsList from '../StepsList/StepsList';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.stepList = "";
    }

    saveSteps = () => {
        this.stepList = <StepsList steps={this.props.steps} />;
        this.props.onSave();
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()} />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract(5)} />
                <CounterControl label="Save" clicked={() => this.saveSteps()} />
                {this.stepList}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr: state.counterStore.counter,
        steps: state.counterSave.steps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            dispatch({ type: actionTypes.INCREMENT });
        },
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdd: (value) => dispatch({
            type: actionTypes.ADD,
            payload: {
                value: value
            }
        }),
        onSubtract: (value) => dispatch({
            type: actionTypes.SUBTRACT,
            payload: {
                value: value
            }
        }),
        onSave: () => {
            dispatch({ type: actionTypes.CLEAR })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);