import React, {Component} from "react"
import {Route} from "react-router";
import API from "../../API"

import RoutesConstants from "../Routes/Routes";
import Inicio from "../Inicio/Inicio";
import Demanda from "../Demanda/Demanda";
import Inventarios from "../Inventarios/Inventarios";
import Navigation from "../../Containers/Nav/Nav";
import Footer from "../../Containers/Footer/Footer";


import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            sellsData: {
                data: [],
            },
            demandData: {
                headers: [],
                data: [],
            },
            inventaryData: {
                data: [],
            },
            newDemand: {
                data: [],
            },
            variableDivs: [],
            variableSlots: [],
        };
        this.DemandCallBack = this.DemandCallBack.bind(this)
    }


    componentDidMount() {
        this.fetchDataBackend();
    };

    DemandCallBack(Data) {
        let newDemandData = [];
        Data.map((item, index) => (newDemandData.push(item)));
    }

    async fetchDataBackend() {
        this.setState({
            loading:true
        });
        const demands = await API.get("Demand");
        const sells = await API.get("Sells");
        let demandHeaders = [];
        let demandItem = [];
        let sellsData = [];
        Object.values(demands.data).map((item,index)=> {
                if (index === 0) {
                    Object.keys(item).map((item) => {
                        demandHeaders.push(item);
                    })
                }
                demandItem.push(item);
            });

        Object.values(sells.data).map((item,index)=>{
            sellsData.push(item);
        });

        this.setState({
            loading:false,
            demandData: {
                headers:demandHeaders,
                data:demandItem
            },

            sellsData:{
                data:sellsData,
            }
        });
    }


    addVariableComponent = () => {
        let variableSlots = this.state.variableSlots;
        let variableDivs = this.state.variableDivs;
        let defaultText = "variable" + (variableSlots.length + 1);
        let name = window.prompt("Enter Variable name", defaultText);
        let value = "";
        do {
            if (name === null) {
                return
            }
            value = window.prompt("Enter the value");

            if (value === null) {
                return
            }
        } while (value === undefined || value === "");


        let input = (
            <div className="variableInput" key={variableSlots.length}>
                <h4>{`${name}: ${value}%`}</h4>
            </div>

        );

        let variable = {
            name: name,
            value: value
        };

        variableSlots.push(variable);

        variableDivs.push(input);

        this.setState({variableSlots: variableSlots, variableDivs: variableDivs});
        return 0
    };

    deleteVariableComponent = () => {
        let variableDivs = this.state.variableDivs;
        let variableSlots = this.state.variableSlots;
        variableDivs.pop();
        variableSlots.pop();
        this.setState({
            variableDivs: variableDivs,
            variableSlots: variableSlots
        });
        return 0
    };


    render() {
        let home;
        this.state.loading ? home = <h1>Loading</h1> :
        home = (
            <div className="Page">
                <Navigation/>
                <Route path={RoutesConstants.menu.inicio.path} component={Inicio}/>
                <Route path={RoutesConstants.menu.demanda.path}
                       render={() => <Demanda headers={this.state.demandData.headers}
                                              demandaData={this.state.demandData.data}
                                              vendidosData={this.state.sellsData.data}
                                              variableDivs={this.state.variableDivs}
                                              variableSlots={this.state.variableSlots}
                                              addVariableComp={this.addVariableComponent}
                                              deleteVariableComp={this.deleteVariableComponent}
                                              newData={[2]}
                                              callBack={this.DemandCallBack}
                       />}
                />

                <Route path={RoutesConstants.menu.inventario.path}
                       render={() => <Inventarios demandHeaders={this.state.demandData.headers}
                                                  demandData={this.newData}
                                                  inventariosHeaders={this.state.demandData.headers}
                                                  inventarioData={this.state.inventarioData}
                                                  materiaPrima={this.state.materiaPrima}
                       />}
                />
                <Footer/>
            </div>
        );

        return (
            <>
                {home}
            </>
        )
    }
}

export default Home
