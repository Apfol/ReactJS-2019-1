import React from 'react';

class Information extends React.Component {
    render = () => {
        return (
            <div className = "row">
                <div className = "col-md-6 cols">
                    <h9><b>{this.props.info1}</b></h9>
                </div>
                <div className = "col-md-6 cols">
                    <h9>{this.props.info2}</h9>
                </div>
                <br></br>
            </div>
        );
    };
}

export default Information;