import React from "react"
import MainInventarios from "./../../Containers/Inventarios/MainInventarios"
import Header from "../../Containers/Header/Header";
import Routes from "../Routes/Routes";

export default (props)=>(
    <div className="bodyCont">
        <Header name = {Routes.menu.inventario.name}/>
        <MainInventarios
            demandHeaders={props.demandHeaders}
            demandData={props.demandData}
            inventariosHeaders = {props.inventariosHeaders}
            inventarioData = {props.inventarioData}
            materiaPrima = {props.materiaPrima}
        />
    </div>
)
