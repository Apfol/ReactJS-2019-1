import React,{Component} from "react"

import "./Footer.css"

class Footer extends Component{
    render() {
        return(
            <footer>
                <h1 className="footerText"> Joyeria Deluxe</h1>
                <h2 className="footerText"> Group:</h2>
                <h3 className="footerText"> Juan David Cabrera</h3>
                <h3 className="footerText"> Nicolas Tellez</h3>
                <h3 className="footerText"> David Patiño</h3>
            </footer>
        )
    }
}

export default Footer
