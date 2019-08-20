import React from "react"
import Header from "../../Components/Containers/Header/Header";
import Navbar from "../../Components/Containers/Navbar/Navbar";
import Main from "../../Components/Containers/Main/Main";
import SideBar from "../../Components/Containers/SideBar/SideBar";
import Footer from "../../Components/Containers/Footer/Footer";

export default () =>{
    return(
        <>
            <div className="Page">
                <Header pageName = "Punto Pizza"/>
                <Navbar/>
                <Main/>
                <SideBar/>
                <Footer/>
            </div>
        </>
    )
}
