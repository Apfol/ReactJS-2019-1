import React, {Component} from "react";

class Subdescription extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className="row col-12">
                <div className="row justify-content-center">
                    <div className="row col-12 col-md-4">
                        <div className="col-4 d-none d-md-block">
                            <p>IMAGEN</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row text-center">
                                <h3 className="col-12 display-md-4 text-md-left text-center">{this.props.info.subsection[0].title}</h3>
                                <p className="col-12 text-md-left text-center">{this.props.info.subsection[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row col-12 col-md-4">
                        <div className="col-4 d-none d-md-block">
                            <p>IMAGEN</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row text-center">
                                <h3 className="col-12 display-4 text-md-left text-center">{this.props.info.subsection[1].title}</h3>
                                <p className="col-12 text-md-left text-center">{this.props.info.subsection[1].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row col-12 col-md-4">
                        <div className="col-4 d-none d-md-block">
                            <p>IMAGEN</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row text-center">
                                <h3 className="col-12 display-4 text-md-left  text-center">{this.props.info.subsection[2].title}</h3>
                                <p className="col-12 text-md-left text-center">{this.props.info.subsection[2].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Subdescription;