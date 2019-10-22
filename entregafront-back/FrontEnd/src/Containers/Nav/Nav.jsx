import React, {Component} from "react"
import NavbarElements from "../../Components/NavbarElements/NavbarElements"
import Routes from "../../Components/Routes/Routes";

import "./Nav.css"

class Navigation extends Component{
    render() {
        return(
            <nav>
                <ul>
                    {Object.keys(Routes.menu).map((item, index)=><NavbarElements key={index} item={Routes.menu[item]}/>)}
                </ul>
            </nav>
        )
    }
}

export default Navigation
