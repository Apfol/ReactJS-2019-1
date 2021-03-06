import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import ListControl from '../../components/ListControl/ListControl';
import ListOutput from '../../components/ListOutput/ListOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract( 5 )}  />
                <ListControl label="List" clicked={() => this.props.onList(this.props.ctr)} />
                <ListOutput value={this.props.list} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterStore.counter,
        list: state.listStore.list,
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
        onList: (value) => dispatch({
            type: actionTypes.SAVE,
            payload: {
                value: value
            }
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);