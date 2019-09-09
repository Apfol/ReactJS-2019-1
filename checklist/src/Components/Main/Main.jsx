import React from "react"

import CheckList from "../../Containers/Main/CheckList/CheckList";
import classes from "./Main.css"

export default (props)=>{
    return(
        <div className={classes.List}>
            <CheckList/>
        </div>
    )
}