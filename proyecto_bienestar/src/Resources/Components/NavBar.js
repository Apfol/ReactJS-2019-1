import React, { Component } from "react";
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';




class NavBarComponent extends Component {
    state = {
        objects:[
          {name: "Celular Xyz", location: "Biblioteca", by: "Cristian"},
          {name: "Sombrilla", location: "Atelier 205", by: "Laura"},
          {name: "Celular y", location: "Edificio B-105", by: "Pedro"},
          {name: "Cargador Iphone", location: "Edificio B-204", by: "Leidy"},
          {name: "Cachucha", location: "Biblioteca", by: "Juan"},
          {name: "Botilito", location: "Biblioteca", by: "Felipe"},
          {name: "Chaqueta", location: "Biblioteca", by: "Cristian"},          
        ]
      }
  render() {
    return (   
        <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>   
        
    );
  }
}

export default NavBarComponent;