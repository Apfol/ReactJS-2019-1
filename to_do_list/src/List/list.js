import Radium from 'radium';
import React, {Component} from 'react';
import Activity from './activity.js';
import Classes from './list.css';
import Plus from '../Img/Plus.png';

class List extends Component {
    constructor() {
        super();
        this.state = {
            activities: [
                { name : 'Send the Reacts Job'},
                { name : 'Fix some errors in the project'},
                { name : 'Study states'},
            ]
        }
        this.addActivity = this.addActivity.bind(this);
    }

    addActivity() {
        var newActivity = prompt("Enter the name of the new activity");
        this.setState(prevState => (
            { activities: prevState.activities.concat({name : newActivity}) }
        ))
    }

    render (){          
        var actividades = this.state.activities.map(    
            activity => <Activity
            name = {activity.name}
            />
        )

        return(
            <div>
                <img onClick = {this.addActivity} className = {Classes.plus} src = {Plus}></img>
                <ul className = {Classes.activitiesList}>
                    {actividades}
                </ul>
            </div>
        );
    }

    

    
}

export default Radium(List);