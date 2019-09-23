import React, {Component} from "react"

import DataTable from "../../Components/DataTable/index"
import "./MainDemanda.css"
import API from "../../API";

class MainDemanda extends Component {

    constructor(props) {
        super(props);

        this.state = {
            model: {
                headers: [],
                demandaData: props.demandaData,
                vendidosData: props.vendidosData
            },
            variableDivs: this.props.variableDivs,
            variableSlots: this.props.variableSlots,
            loading: true
        };
        this.newDemand = [];
        this.prueba = [];
    }

    componentDidMount() {
        this.fetchDataBackend();
        let header = {
            title: "",
            accessor: "",
            index: -1
        };

        let {headers} = this.state.model;

        // parsing the headers for the table of demanda
        this.props.headers.map((item, index) => {

            header = {
                title: item,
                accessor: item,
                index: index,
            };

            headers.push(header);

            return headers
        });
    }

    async fetchDataBackend() {
        this.setState({
            loading: true
        });

        const demands = await API.get("Demand");
        this.prueba = demands.data;

        this.setState({
            loading: false
        })
    }

    newDemandData() {
        if (!this.state.loading) {
            let multipliers = this.props.variableSlots;
            const oldDemand = [...this.state.model.demandaData];
            let newDemand = [];
            let accessors = [];
            let totalMultiplier = 0;

            if (multipliers.length > 0) {
                //calculating the total multiplier value.
                multipliers.map((multiplier) => {
                    totalMultiplier += parseInt(multiplier.value) / 100
                });
            }

            for (let i = 0; i < oldDemand.length; i++) {
                if (i === 0) {
                    Object.keys(oldDemand[i]).map((item) => {
                        if (item !== 'name') {
                            accessors.push(item)
                        }
                    })
                }
                let newDemandMonth = oldDemand[i];
                for (let u = 0; u < accessors.length; u++) {
                    newDemandMonth[accessors[u]] = newDemandMonth[accessors[u]] + (newDemandMonth[accessors[u]] * totalMultiplier);
                }
                newDemand.push(newDemandMonth);
                this.newDemand = newDemand;
            }
        }
    }

    sendToDB = async () => {
        for (let i = 1; i < this.newDemand.length + 1; i++){
            try{
                console.log(this.newDemand[i].Octubre);
                await API.post("/PostDemand", {
                    id:i,
                    idProduct: i,
                    Enero:this.newDemand[i-1].Enero,
                    Febrero:this.newDemand[i-1].Febrero,
                    Marzo:this.newDemand[i-1].Marzo,
                    Abril:this.newDemand[i-1].Abril,
                    Mayo:this.newDemand[i-1].Mayo,
                    Junio:this.newDemand[i-1].Junio,
                    Julio:this.newDemand[i-1].Julio,
                    Agosto:this.newDemand[i-1].Agosto,
                    Septiembre:this.newDemand[i-1].Septiembre,
                    Octubre:this.newDemand[i-1].Octubre,
                    Noviembre:this.newDemand[i-1].Noviembre,
                    Diciembre:this.newDemand[i-1].Diciembre,
                });
            }catch (error) {
                console.log(error)
            }
        }
        this.newDemand = []
        for (let k = 0; k<this.props.variableSlots; k++){
            this.props.deleteVariableComp()
        }
    }

    render() {
        let render = <h1> loading </h1>;
        this.newDemandData();
        this.state.loading ? render = <h1> loading </h1> :
            render = (
                <main>
                    <h1>Bienvenidos</h1>
                    <h2> veamos tu demanda proxima</h2>
                    <div className="Table">

                        <DataTable
                            className="DataTable"
                            title="Demanda Actual"
                            keyField="id"
                            width="100%"
                            headers={this.state.model.headers}
                            data={this.prueba}
                            noData="No Records!"
                        /> {/* demanda previa*/}

                        <DataTable
                            className="DataTable"
                            title="Unidades Vendidas"
                            keyField="id"
                            width="100%"
                            headers={this.state.model.headers}
                            data={this.state.model.vendidosData}
                            noData="No Records!"
                        />

                        {this.state.variableDivs.map((item, index) => (item))}

                        <div className="container">
                            <button onClick={this.props.addVariableComp} className="button">Agregar variable</button>
                            <button onClick={this.props.deleteVariableComp} className="button">Eliminar variable
                            </button>
                            <button onClick={this.sendToDB} className="button">Send to DB</button>
                        </div>

                        <DataTable
                            className="DataTable"
                            title="Demanda Proyectada"
                            keyField="id"
                            width="100%"
                            headers={this.state.model.headers}
                            data={this.newDemand}
                            noData="No Records!"
                        /> {/* demanda nueva*/}
                    </div>
                </main>
            );

        return render
    }
}

export default MainDemanda
