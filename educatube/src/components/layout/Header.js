import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>EducaTube</h1>
                <Link style={linkStyle}to="/">Home</Link>-<Link style={linkStyle}to="/about">About</Link>
            </header>
        )
    }
}


// TODO: PONERLO EN CSS
const linkStyle = {
    color: '#fff',
    textDecotation: 'node'
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header;
