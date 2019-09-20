import React from 'react';
import classes from './PersonCards.css';
import PersonCard from '../person-card/PersonCard';

const PersonCards = (props) => {
    return (
        <div className={classes.personCards}>
            {props.users.map(user => {
                return (
                    <PersonCard
                        username={user.username}
                        name={user.name}
                        email={user.email}
                    />
                )
            })}
        </div>
    )
}

export default PersonCards
