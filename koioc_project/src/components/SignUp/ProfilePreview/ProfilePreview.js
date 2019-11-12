import React from 'react';
import classes from './ProfilePreview.css';

const ProfilePreview = (props)  => {

    return(
        <section className={classes.preview}>
                <img alt="profile-pic" className={classes.photo_profile} src={props.data.fileURL}/>
            
            <div className={classes.userData}>
                <span><strong>Name: </strong>{props.data.name}</span>
                <span><strong>E-mail: </strong>{props.data.mail}</span>
                <span><strong>Address: </strong>{props.data.address}</span>
                <span><strong>City: </strong>{props.data.city}</span>
                <span><strong>Zip code: </strong>{props.data.zip_code}</span>
                <span><strong>Phone: </strong>{props.data.phone}</span>
            </div>
        </section>
    )
}

export default (ProfilePreview);