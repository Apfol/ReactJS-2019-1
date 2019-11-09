import React from 'react';
import menu from './Menu.css';
import logo from '../../img/menu/logo2.png'
import SearchBar from '../searchBar/SearchBar';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/';


function Menu(props) {
    const { history } = props;
    return (
        <div>
            <div className={menu.navigation}>
                <div className={menu.navigation_wrap}>
                    <img className={menu.logo} src={logo} alt=""></img>
                    <div className={menu.menu}>
                        <nav className={menu.navigation_items}>
                            <li className={menu.navigation_item}><Link to="/">HOME</Link></li>
                            <li className={menu.navigation_item}><Link to="/user">USER</Link></li>
                            {props.isUserLoggedIn ?
                                (
                                    <div>
                                        <li className={menu.navigation_item}>Bienvenido {props.userLoggedIn.username}</li>
                                        <li className={menu.navigation_item}><button onClick={() => { props.onLogOut() }}>Log Out</button></li>
                                        <li className={menu.navigation_item}><Link to="/mycourses">Mis cursos</Link></li>
                                    </div>
                                ) :
                                (
                                    <div>
                                        <li className={menu.navigation_item}><Link to="/login">LOGIN</Link></li>
                                        <li className={menu.navigation_item}><Link to="/sign_up">SIGN UP</Link></li>
                                    </div>

                                )
                            }
                            <li className={menu.navigation_item}><Link to="/courses">Cursos</Link></li>
                        </nav>
                        <SearchBar></SearchBar>

                    </div>
                </div>
            </div>

            <div className={menu.buttons_navigation}>
                <button onClick={() => history.goBack()}>ATRAS</button>
                <button onClick={() => history.goForward()}>ADELANTE</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actionCreators.logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));