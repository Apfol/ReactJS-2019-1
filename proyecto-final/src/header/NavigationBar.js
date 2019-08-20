import React from 'react';
import logo from './assets/logo.png';
import "./header.css";
import { Navbar, Nav, Form, NavDropdown, Button, FormControl } from 'react-bootstrap';

export default class NavigationBar extends React.Component {

 temp = 32;

  constructor() {
    super();
    this.state = {
      temperature: this.temp,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.changeState();
    }, 1000);
  }

  changeState = () => {
    if(this.temp == 38) {
      this.temp = 32;
    }
    this.temp++;
    this.setState({
      temperature: this.temp,
    });
  }

  render() {
    return (
      <div className="navContainer">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            Sopó Cundinamarca
            <br />
            <div className="brand-subtext">
              Seguridad y Prosperidad
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Municipio</Nav.Link>
              <Nav.Link href="#link">Alcadía</Nav.Link>
              <NavDropdown title="Atención al ciudadano" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Peticiones, quejas, reclamos y sugerencias</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-center clima">
              <Nav.Link><i class="fas fa-sun fa-lg sun"></i> 32°C</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.youtube.com/user/alcaldiadesopo/videos"><i class="fab fa-youtube fa-lg"></i></Nav.Link>
              <Nav.Link href="https://es-la.facebook.com/AlcaldiadeSopo/"><i class="fab fa-facebook-f fa-lg"></i></Nav.Link>
              <Nav.Link href="https://twitter.com/alcaldiadesopo?lang=es"><i class="fab fa-twitter fa-lg"></i></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              </Nav.Link>
              <Form inline>
                <FormControl type="text" placeholder="¿Qué buscas?" className="mr-sm-2" />
                <Button variant="secondary">Buscar</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
