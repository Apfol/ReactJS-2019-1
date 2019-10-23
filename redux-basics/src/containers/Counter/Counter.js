import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import History from '../../components/History/History.js';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract( 5 )}  />
                <CounterControl label="Save number" clicked={() => this.props.saveStore(this.props.ctr)}  />
                <div style={{display : "block"}}>{this.props.number.map(n => <History value={n} />)}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterStore.counter,
        number: state.saveStore.numbers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveStore: (number) => dispatch({
            type: actionTypes.SAVE,
            payload: {
                value: number
            }
        }),
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);