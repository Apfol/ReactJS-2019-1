import React, {Component} from 'react';
import Recordatorios from './../Recordatorios/Recordatorios'
import classes from './../Home/Home.css';
import Footer from './../Footer/Footer'

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
        ]
    }

    render(){
        return(
            <div className={classes.main}>
                <div className={classes.subcontainer}>
                <h1 className={classes.title}>Reminder App!</h1>
                <button className={classes.button} onClick={this.createReminder.bind(this)}>Crear recordatorio</button>
                </div>                
                <div>
                {this.state.reminders.map((reminder, reminderIndex)  => 
                    this.renderRecordatorios(reminder, reminderIndex))}
                </div>
                <Footer></Footer>
            </div>
        );
    }

    renderRecordatorios(reminder, reminderIndex){
            if(reminder.active){
                return(
                <Recordatorios key={reminderIndex} reminder={reminder} deleteReminder={this.deleteReminder.bind(this, reminderIndex)}
                 showIndex={this.showIndex.bind(this, reminderIndex)}
                 updateReminder={this.updateReminder.bind(this, reminderIndex)}></Recordatorios>
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

    showIndex(reminderIndex){
        console.log('This index: ' + reminderIndex);
    }

    updateReminder(reminderIndex){
       console.log('Editing reminder #' + reminderIndex);
       var temp = prompt('Nuevo valor del post:');

       var tempArray = [...this.state.reminders];
       tempArray[reminderIndex].content = temp;

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