import React, {Component} from "react"
import "./NavliElements.css"
import { Link } from "react-router-dom"

class NavliElements extends Component{
    constructor(props){
        super(props)
        this.state = {
            restaurants: this.props.restaurantsList,
            liComponents:[]
        }
    }

    componentDidMount() {
        this.createElements()
    }

    createElements(){
        let liComponents = this.state.restaurants.map(({restaurantID,restaurantName}) => {
            let route
            if(restaurantName === "Inicio"){
                 route = "/"
            }else{
                 route = "/" + restaurantName.replace(/\s/g, "");
            }

            return(
                <li key={restaurantID}>
                    <Link to={route}>{restaurantName}</Link>
                </li>
            )
        });
        this.setState({
                liComponents: liComponents
            }
        )
    }

    render() {
        return(
            this.state.liComponents
        )
    }
}
export default NavliElements