import React from "react"

import FooterText from "./FooterText";

import classes from "./Footer.css"

export default (props)=>{
    return(
        <div className={classes.Footer}>
            <h1>{FooterText.footerTitle}</h1>
            <h2>{FooterText.author}</h2>
        </div>
    )
}