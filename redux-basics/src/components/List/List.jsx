import React from "react";
import {connect} from 'react-redux';

const List = (props) =>{    
    console.log(props)  
    return(
            <div>
                <p>This is test</p>
                <ul>
                    {props.changes.map((item) =>
                        <p>{item}</p> )}
                </ul>                                
            </div>
    )  
     
}


const mapStateToProps = state => {
    return {
        changes: state.changesStore.changes
    }
}



export default connect(mapStateToProps)(List);