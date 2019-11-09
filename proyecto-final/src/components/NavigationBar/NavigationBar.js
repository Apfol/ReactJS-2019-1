import React, {Component} from 'react';
import logo from './logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './NavigationBar.css';
import { connect } from 'react-redux';

class NavigationBar extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    temperature: this.temp,
  }
  temp = 32;

  componentDidMount() {
    setInterval(() => {
      this.changeState();
    }, 2000);
  }

  componentDidUpdate() {
    if (this.state.isUserLoggedIn) {
        this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextState) {
      this.setState({
        isUserLoggedIn: nextState.isUserLoggedIn
      });
  }

  changeState = () => {
    this.temp === 36 ? this.temp-- : this.temp++;
    this.setState({
      temperature: this.temp,
    });
  }

  render() {
    return (
      <div className={classes.navContainer}>
        <Navbar bg="dark" variant="dark">
          <Link to="/" className={classes.link}>
            <img
              src={logo}
              width="50"
              height="50"
              alt="logo"
              className="d-inline-block align-top"
            />
          </Link>
          <Link to="/" className={classes.links}>
            Sopó Cundinamarca
            <br />
            <div className={classes.brandSubtext}>
              Seguridad y Prosperidad
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className={classes.links} to="/tourism">Turismo</Link>
              <Link className={classes.links} to="/news">Noticias</Link>
            </Nav>
            <Nav className={classes.clima}>
              <Nav.Link><i class="fas fa-sun fa-lg sun"></i> {this.state.temperature}°C</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.youtube.com/user/alcaldiadesopo/videos" target="_blank"><i class="fab fa-youtube fa-lg"></i></Nav.Link>
              <Nav.Link href="https://es-la.facebook.com/AlcaldiadeSopo/" target="_blank"><i class="fab fa-facebook-f fa-lg"></i></Nav.Link>
              <Nav.Link href="https://twitter.com/alcaldiadesopo?lang=es" target="_blank"><i class="fab fa-twitter fa-lg"></i></Nav.Link>
              <Nav.Link eventKey={2} href="#memes" />
              <Nav.Link eventKey={2} href="#memes" />
            </Nav>
            <Link className={classes.links} to="/login">Iniciar sesión</Link>
            <Link className={classes.links} to="/signup">Registrarse</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
  }
}

export default connect(mapStateToProps)(NavigationBar);
