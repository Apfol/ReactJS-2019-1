import React from 'react';
import classes from './Profile.css'

var Profile = props =>{
    return(
        <div>
            <div className={classes.header}>
                <img src={props.url} className={classes.img}></img>
                <div className={classes.info}>
                    <div>
                        <p className={classes.title}>Name:</p>
                        <p>{props.name}</p>
                    </div>
                    <div>
                        <p className={classes.title}>Username:</p>
                        <p>{props.username}</p>
                    </div>
                    <div>
                        <p className={classes.title}>Email:</p>
                        <p>{props.email}</p>
                    </div>
                    <div>
                        <p className={classes.title}>Phone:</p>
                        <p>{props.phone}</p>
                    </div>
                </div>
            </div>

            <div>
                <p>Posts</p>            
            </div>
        </div>
        
    );

}
    
        
    

export default Profile;