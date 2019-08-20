import React, { Component } from 'react';

class Column extends Component {
    render() {
        if (this.props.data !== undefined) {
            let data2 = this.props.data2;
            if (data2 === undefined) {
                data2 = "";
            }
            return (
                <div id={this.props.id}>
                    {this.props.data}
                    {data2}
                </div>
            );
        } else {
            return (
                <div id={this.props.id}>

                </div>
            );
        }
    }
}

export default Column;