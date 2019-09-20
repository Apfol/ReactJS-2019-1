import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavigationHeader = () => {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavigationHeader
