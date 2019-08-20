import React from 'react';
import Image from 'react-bootstrap/Image'

class Notices extends React.Component {
    render = () => {
        return (
            <li class="nav-item noticia">
                <div className = "row notices">
                    <div className = "col-md-6 cols">
                        <Image className="noticeImg" src={this.props.notice} fluid/>
                    </div>
                    <div className = "col-md-6 cols">
                        <a href="#nothing"><h5>{this.props.p}</h5></a>
                        <h9>{this.props.info}</h9>
                    </div>
                </div>
            </li>
        );
    };
}

export default Notices;