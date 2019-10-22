import React from "react"

import HeaderText from "./HeaderText"

import classes from "./Header.css"

export default (props)=>{
    return(
        <div className={classes.Header}>
            <h1>{HeaderText.title}</h1>
            <h2>{HeaderText.subTitle}</h2>
        </div>
    )
}