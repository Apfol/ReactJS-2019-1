import React, {Component} from 'react';
import Buttons from './../Buttons/Buttons';
import Recordatorios from './../Recordatorios/Recordatorios'


class Home extends Component{
    state = {
        reminders: [
            {
                content: "This is the first reminder",
                active: true
            },
            {
                content: "This is the second reminder",
                active: true
            }
        ],
        postToDelete: -1,
        postToCreate: {
            content: "",
            active: true
        }
    }

    render(){
        return(
            <div>
                <h1>Reminder App!</h1>
                <a href="#" onClick={this.createReminder.bind(this)}>Crear recordatorio</a>

                {this.state.reminders.map((reminder, reminderIndex)  => 
                    this.renderRecordatorios(reminder, reminderIndex))}

            </div>
        );
    }

    renderRecordatorios(reminder, reminderIndex){
            if(reminder.active){
                return(
                <Recordatorios reminder={reminder} deleteReminder={this.deleteReminder.bind(this, reminderIndex)}></Recordatorios>
                );
            }

        
    }

    deleteReminder(reminderIndex){
        console.log('Borrando... ' + reminderIndex);

        var tempArray = [...this.state.reminders];
        tempArray[reminderIndex].active = false;


        this.setState({
            reminders: tempArray
        });
    }

    createReminder(){
        let tempInput = prompt('Ingrese el nuevo recordatorio:'); 
        var tempArray = [...this.state.reminders];
        var tempReminder = {
            content: tempInput,
            active: true
        }
        tempArray.push(tempReminder);

        this.setState({
             reminders: tempArray
        });

        console.log(this.state.reminders);
    }

}

export default Home;