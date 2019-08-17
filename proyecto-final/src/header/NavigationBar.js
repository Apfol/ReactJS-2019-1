import React from 'react';
import logo from './assets/logo.png';
import "./header.css";
import { Navbar, Nav, Form, NavDropdown, Button, FormControl } from 'react-bootstrap';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navContainer">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            Sopó Cundinamarca
            <br />
            <div className="brand-subtext">
              Serguridad y Prosperidad
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Minicipio</Nav.Link>
              <Nav.Link href="#link">Alcadía</Nav.Link>
              <NavDropdown title="Anteción al ciudadano" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="¿Qué buscas?" className="mr-sm-2" />
              <Button variant="secondary">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}