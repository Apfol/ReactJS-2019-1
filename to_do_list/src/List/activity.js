import Radium from 'radium';
import React, {Component} from 'react';
import Delete from '../Img/Delete.png';
import Red from '../Img/red.png';
import Green from '../Img/green.png';
import Classes from './activity.css';


class Activity extends Component {
    constructor() {
        super();
        this.state = {
            image: [
                Red
            ],

            actual: [
                "Exists"
            ]
        }
        this.completeActivity = this.completeActivity.bind(this);
        this.deleteActivity = this.deleteActivity.bind(this);
    }
    render (){
        if(this.state.actual == "Exists"){
            return(
                <div>
                    <li>
                        <div>
                            <img onClick = {this.completeActivity} className = {Classes.leftImage} src = {this.state.image}></img>
                            <span className = {Classes.information}>{this.props.name}</span>
                            <img className = {Classes.rightImage} src = {Delete} onClick = {this.deleteActivity}></img>
                        </div>
                    </li>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }   
    }

    completeActivity () {
        var imageChange = [
            Green
        ]
        this.setState({ 
            image: [
                imageChange
            ],

            actual: [
                "Exists"
            ]
        });
    }

    deleteActivity () {
        var newActual = [
            "Dont Exists"
        ]
        this.setState({
            image: [
                this.state.image
            ],

            actual: [
                newActual
            ]
        })
    }
}

export default Radium(Activity);