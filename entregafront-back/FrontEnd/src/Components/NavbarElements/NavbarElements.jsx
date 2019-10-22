import React from "react"
import {Link} from "react-router-dom";

export default (props)=>(
    <>
        <Link to={props.item.path} className="link"><li key={props.item.id}>{props.item.name}</li></Link>
    </>
)
