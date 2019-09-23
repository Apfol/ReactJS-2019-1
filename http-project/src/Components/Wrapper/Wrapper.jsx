import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Wrapper.css'

class Wrapper extends Component{
    state = {}
    render(){
        return(
            <div className={classes.container}>
                <Header></Header>
                
            </div>
        );
    }
}


export default Wrapper;