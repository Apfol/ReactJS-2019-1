import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract( 5 )}  />
                <CounterControl label="Add element" clicked={() => this.props.addElement(this.props.ctr)} />
                {this.props.lst.map((element) => <p>{element}</p>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterStore.counter,
        lst: state.listStore.lst
    }
}

const mapDispatchToProps = dispatch => {
    return {
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
        addElement: (element) => dispatch({
            type: actionTypes.ADDTOLIST,
            payload: {
                element: element
            }
        }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);