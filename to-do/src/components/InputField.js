import React, {Component} from 'react';
import classes from './InputField.css';

export default class InputField extends Component {
    render(){
        const{task, handleChange,handleSubmit}=this.props;
        return(
            <div className={classes.container}>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    className={classes.onlyField}
                    value={task}
                    onChange={handleChange}
                    />
                    <button className={classes.buttonsub}>
                        
                    </button> 
                </form>
            </div>


        )
    }

}