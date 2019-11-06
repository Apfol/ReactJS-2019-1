import React, { Component } from 'react'
import classes from "./Navbar.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from "../../assets/GamerIn.png"

class Navbar extends Component {
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
                <Link className={classes.cta} to="/login" ><button className={classes.button}>Login</button></Link>
            </header>
        )
    }
}
const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    }
}
export default connect(mapStateToProps)(Navbar);
