import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Navbar as Nv } from "react-bootstrap";

class Navbar extends Component {

    render() {
        let navbarValues = this.props.links.map((link, index) => {
            return (
                <Nav.Link to={link.url} >{link.name}</Nav.Link>
            );
        });
        return (
            <header>
                <Nv expand="sm" bg="dark" variant="dark">
                    <Nv.Brand>
                        <Nav.Link href="/" className="img-container">
                            <span className="text-white brandt">GamerIn</span>
                        </Nav.Link>
                    </Nv.Brand>
                    <Nv.Toggle aria-controls="basic-navbar-nav" />

                    <Nv.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav>
                            {navbarValues}
                        </Nav>
                    </Nv.Collapse>
                </Nv>
            </header>
        );
    }
}
export default Navbar;