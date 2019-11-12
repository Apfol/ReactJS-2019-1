import React, {Component } from 'react';
import classes from './profile.css'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Perfil extends Component {

    constructor(props){
        super(props);

        this.state = {
            user : null
        }
    }
    
    componentDidMount () {
        axios.get('https://koioc-23ec2.firebaseio.com/users/'+this.props.userLoggedIn.uid+'.json')
        .then(response  => {
            this.setState({
                user : response.data
            })
        });
    }

    componentDidUpdate(){
        if (!this.props.isUserLoggedIn) {
            this.props.history.push('/');
        }        
    }

    render(){
        if(this.state.user !== null)
        {
            return(
                <div className={classes.all}>
                    <div className={classes.grid}>
                        <div className={classes.cell}>
                            <div className={classes.perfil}>
                                <h1 className={classes.text_profile}>Profile</h1>
                                <div className={classes.photo_div}>
                                    <img className={classes.photo_profile} src={this.state.user.photo} alt="profile-pic"/>
                                </div>
                                <div className={classes.name_div}>
                                    <p className={classes.name}>{this.state.user.name}</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cell}>
                            <div>
                                <h1 className={classes.text_profile}>Address</h1>
                                <p className={classes.mail}>{this.state.user.address.address}</p>
                                <p className={classes.mail}>{this.state.user.address.city} {this.state.user.address.zip_code}</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.grid}>
                        <div className={classes.cell}>
                            <div>
                                <h1 className={classes.text_profile}>E-mail</h1>
                                <p className={classes.mail}>{this.props.userLoggedIn.userName}</p>
                                <p className={classes.style}>Main</p>
                            </div>
                        </div>
                        <div className={classes.cell}>
                            <div>
                                <h1 className={classes.text_profile}>My services</h1>
                                <Link to="/serviceHistory">
                                    <p className={classes.history}>History</p>
                                </Link>
                                <p></p>
                            </div>
                        </div>
                        <div className={classes.cell}>
                            <div>
                                <h1 className={classes.text_profile}>Other info</h1>
                                <p className={classes.phone}>Phone: </p>
                                <p className={classes.number}>{this.state.user.phone.number}</p>
                                <p className={classes.number}>{this.state.user.phone.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(<div>

                </div>)
        }
    
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        error: state.authenticationStore.error,
        userLoggedIn: state.authenticationStore.userLoggedIn
    }
}

export default connect(mapStateToProps)(Perfil);