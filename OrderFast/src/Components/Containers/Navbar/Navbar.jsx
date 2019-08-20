import React, {Component} from "react"
import {Navbar, NavbarBrand} from 'reactstrap';
import "./Navbar.css"
import LiElements from "./../../NavliElements/NavliElements.jsx"

class Navbar1 extends Component {
    render() {
        return (
            <Navbar dark color="warning">
                <nav className="navbar">
                    <ul className="restaurantOptions">
                        {/*Lista de restaurantes pasa como prop*/}
                        <LiElements
                            restaurantsList={[
                            {
                                restaurantID: -1,
                                restaurantName: "Inicio"
                            }, {
                                restaurantID: 0,
                                restaurantName: "Punto verde"
                            }, {
                                restaurantID: 1,
                                restaurantName: "Punto Cafe O"
                            }, {
                                restaurantID: 2,
                                restaurantName: "Punto Wok"
                            }, {
                                restaurantID: 3,
                                restaurantName: "Punto Cafe G"
                            }, {
                                restaurantID: 4,
                                restaurantName: "Punto Pizza"
                            }, {
                                restaurantID: 5,
                                restaurantName: "Kioskos"
                            }, {
                                restaurantID: 6,
                                restaurantName: "Meson"
                            }, {
                                restaurantID: 7,
                                restaurantName: "Arcos"
                            }, {
                                restaurantID: 8,
                                restaurantName: "Restaurante Escuela"
                            }, {
                                restaurantID: 9,
                                restaurantName: "Embarcadero Carta"
                            }, {
                                restaurantID: 10,
                                restaurantName: "Embarcadero"
                            }, {
                                restaurantID: 11,
                                restaurantName: "Cafeteria AdPortas"
                            }, {
                                restaurantID: 12,
                                restaurantName: "Terraza"
                            }
                        ]}/>
                    </ul>
                </nav>
            </Navbar>
        )
    }
}
export default Navbar1;