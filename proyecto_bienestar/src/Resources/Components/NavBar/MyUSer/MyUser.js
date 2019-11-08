import React from 'react';
import classes from './MyUser.css';
const MyUser = (props) => {
    return (
        <div className={classes.MyUser}>                       
            <div className={classes.correo}>
                <h6>{props.user.email}</h6>
            </div>
            <div className={classes.UserPhoto}>
                        
            </div> 
            
        </div>
    );
}

export default MyUser;