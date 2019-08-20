import React, { Component } from 'react';

class Page extends Component {
    render() {
        return (
            <div id="page">
                <img id={this.props.id} src={this.props.src} alt="" />
            </div>
        );
    }
}

export default Page;