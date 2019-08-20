import React, {Component} from "react"
import "./Header.css"


class Header extends Component {

    render() {
        return (
            <div className="bg-success clearfix container-fluid stick">
                <a className="h1 float-left ml-4">{this.props.pageName}!</a>
                <p className="float-right"><a>Iniciar Sesión</a> | <a>Registrarse</a></p>
            </div>

        )
    }
}
export default Header;