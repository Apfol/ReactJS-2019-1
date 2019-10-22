import React from 'react';
//import connrct
import './CounterList.css';

/*class CounterList extends React.Component{
    render(){
        return(
            <div>
                <ul>{this.props.value.lenght}</ul> 
                <ul>qwertyui</ul>
            </div>
                                  
        );
    }
}*/

const counterOutput = (props) => (

    <div className="numberList">
        {props.value.map(item => <ul>{item}</ul>)}
    </div>
);

/*const mapStateToProps = state => {
    return {
        ctr: state.save.counter
    }
}*/

export default counterOutput;