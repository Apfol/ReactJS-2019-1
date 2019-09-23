import React from "react"
import Main from "./../../Containers/Demanda/MainDemanda"
import Header from "../../Containers/Header/Header";
import Routes from "../Routes/Routes";
import "./Demanda.css"

export default (props) => (
    <div className="bodyCont">
        <Header name={Routes.menu.demanda.name}/>
        <Main headers={props.headers} demandaData={props.demandaData} vendidosData={props.vendidosData}
              newDemand={props.newDemand} addVariableComp={props.addVariableComp}
              deleteVariableComp={props.deleteVariableComp} variableDivs={props.variableDivs}
              variableSlots ={props.variableSlots} newData = {props.newData}
        />
    </div>
)
