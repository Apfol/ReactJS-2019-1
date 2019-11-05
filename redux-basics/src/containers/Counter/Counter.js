import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
<<<<<<< HEAD
    render() {
=======

    render () {
>>>>>>> 85c2175d7bf690f47d0dfebdb697c1a397b2d5fb
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
<<<<<<< HEAD
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()} />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract(5)} />
                <CounterControl label="Save" clicked={() => this.props.save(this.props.ctr)} />
=======
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract( 5 )}  />
>>>>>>> 85c2175d7bf690f47d0dfebdb697c1a397b2d5fb
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
<<<<<<< HEAD
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
=======
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
>>>>>>> 85c2175d7bf690f47d0dfebdb697c1a397b2d5fb
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
<<<<<<< HEAD
        save: (currentCounter) => dispatch({
            type: actionTypes.SAVE,
            payload: {
                counterValue: currentCounter
            }
        })
=======
>>>>>>> 85c2175d7bf690f47d0dfebdb697c1a397b2d5fb
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);