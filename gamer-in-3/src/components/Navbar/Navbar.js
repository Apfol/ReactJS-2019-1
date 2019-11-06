import React, { Component } from 'react'
import classes from "./Navbar.css";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/GamerIn.png"
import * as actionCreators from '../../store/actions/';
class Navbar extends Component {
    logOut = () => {
        this.props.onLogOut();
        this.props.history.push('/');
    }
    render() {
        return (
            <header className={classes.header}>
                <img className={classes.logo} src={logo} alt="logo" />
                <nav>
                    <ul className={classes["nav-links"]}>
                        <li><Link className={classes.link} to="/" >Home</Link></li>
                        <li><Link className={classes.link} to="/games" >Games</Link></li>
                        {
                            this.props.isUserLoggedIn ? (<li><Link className={classes.link} to="/profile" >Profile</Link></li>) : ("")
                        }
                    </ul>
                </nav>
                {this.props.isUserLoggedIn ? ("") : (<Link className={classes.cta} to="/login" ><button className={classes.button}>Login</button></Link>)}
                {this.props.isUserLoggedIn ? (<button className={classes.button} onClick={() => this.logOut()} >Log out</button>) : ("")}
            </header>
        )
    }

}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actionCreators.logOut())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
