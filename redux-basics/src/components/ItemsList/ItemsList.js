import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

class ItemsList extends Component {
    render () {        
        const items = this.props.items.map((item, id)=>{
            return <p key={id}>{item}</p>
        });
        return (
            <div>
                {items}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.counterSaver.list
    }
}

export default connect(mapStateToProps, null)(ItemsList);