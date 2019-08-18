import React from 'react';

class Notices extends React.Component {
    render = () => {
        return (
            <li class="nav-item">
                <div className = "row notices">
                    <div className = "col-md-6 cols">
                        <img className="noticeImg" src={this.props.notice}/>
                    </div>
                    <div className = "col-md-6 cols">
                        <h5>{this.props.p}</h5>
                        <h9>{this.props.info}</h9>
                    </div>
                </div>
            </li>
        );
    };
}

export default Notices;