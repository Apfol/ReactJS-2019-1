import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../Users-icon.png';

const NavigationHeader = () => {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Users List'}
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavigationHeader;