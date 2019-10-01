import React, { Component } from 'react';
import classes from './UserBar.css';
import { Link } from 'react-router-dom';
import { tempUser } from '../../Data';


class UserBar extends Component {
    state = {
        classUpload: classes.userbar_button
    };

    render() {
        return (
            <div className={classes.bar}>
                <img src={"/img/" + tempUser.img} className={classes.img} alt="" />
                <p className={classes.name}>{tempUser.name}</p>
                <Link to="/session/upload" className={this.state.classUpload} id="upload_button" onClick={this.upload} >Subir Documento</Link>
                <Link to="/" className={classes.userbar_button} onClick={this.props.logout}>Cerrar Sesión</Link>
            </div>
        );
    }
    upload = () => {
        /* this.setState({
             classUpload: classes.is_Disabled
         });*/
    }
}

export default UserBar;