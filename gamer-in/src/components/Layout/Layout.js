import React from "react";
import Navbar from "../Navbar/Navbar"
function Layout(props) {
    let links = [
        {
            url: "/",
            name: "Home"
        },
        {
            url: "/profile",
            name: "Profile"
        },
        {
            url: "/games",
            name: "Games"
        }
    ]
    return (
        <React.Fragment>
            <Navbar links={links} />
            {props.children}
            <h1>Esto es un footer</h1>
        </React.Fragment>
    );
}

export default Layout;