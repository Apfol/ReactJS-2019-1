import React, {Component} from 'react';

class Column extends Component {
    render() {
        if (this.props.booksRenderized !== undefined) {
            return (
                <div id={this.props.id}>
                    {this.props.booksRenderized}
                </div>
            );
        } else if (this.props.personInfo !== undefined) {
            return (
                <div id={this.props.id}>
                    {this.props.personInfo}
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