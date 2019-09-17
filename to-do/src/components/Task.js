import React, {Component} from 'react';
import classes from './Task.css';

export default class Task extends Component{
    render(){
        const{task,handleDelete,handleComplete}=this.props;
        return(
            <li clasName={classes.listElement}>
                 <h3 className={classes.texts}>{task}</h3> 
                 <div className={classes.container}>
               
                <button className={classes.delete} onClick={handleDelete}/>
                 </div>
            </li>
        );

    }

}