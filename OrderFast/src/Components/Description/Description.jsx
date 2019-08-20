import React, {Component} from "react";
import {Button} from 'reactstrap';
import Subdescription from "./../Subdescription/Subdescription"

class Description extends Component {

    constructor(props) {
        super(props);

        this.state = {
            add: <div>
                    <div key={this.props.anuncio[0].id} className="row col-12 justify-content-center">
                        <h2 className="display-2 col-12 text-center">{this.props.anuncio[0].title}</h2>
                        <p className="col-12 col-md-8">{this.props.anuncio[0].description}</p>
                    </div>
                    <Subdescription info={this.props.anuncio[0]}></Subdescription>
                </div>
        }
    }

    onAddSelected(index) {
        this.renderAdd(index);
    }

    renderAdd(index) {
        this.setState({
            add: <div>
                    <div
                        key={this.props.anuncio[index].id}
                        className="row col-xs-8 col-md-12 justify-content-center">
                        <h2 className="display-2 col-12">{this.props.anuncio[index].title}</h2>
                        <p className="col-12 col-md-8">{this.props.anuncio[index].description}</p>
                    </div>
                    <Subdescription info={this.props.anuncio[index]}></Subdescription>
                </div>
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {this.state.add}
                </div>
                <div className="row justify-content-center">
                    <Button outline className="col-1 btn" onClick={() => this.onAddSelected(0)}>Restaurantes</Button>
                    <Button
                        outline
                        className="col-1 offset-2 btn"
                        onClick={() => this.onAddSelected(1)}>Cafés</Button>
                </div>
            </div>
        );

    }
}

export default Description;
