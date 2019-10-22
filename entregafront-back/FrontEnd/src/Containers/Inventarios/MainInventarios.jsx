import React, {Component} from "react"
import DataTable from "../../Components/DataTable/"

class MainInventarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: {
                demandHeaders: [],
                demandData: props.demandData,
                inventariosHeaders: [],
                inventarioData: props.inventarioData,
            },
            loading: true
        };
        this.inventarioProyectado = [];
        this.productTables = [];
        this.materiaPrimaData = props.materiaPrima
        this.totalArr = [];
        this.totalHeaders = [];
    }

    componentDidMount() {

    }


    generateProductoProyectado() {

    }

    generateProductTables() {

    }

    render() {
        this.generateProductoProyectado()
        return (
            <main>
                <h1>Inventario Actual</h1>
                <DataTable
                    className="DataTable"
                    title="Inventario Actual"
                    keyField="id"
                    width="100%"
                    headers={this.state.model.inventariosHeaders}
                    data={[]}
                    noData="No Records!"
                />
                <h1>Demanda Proyectada</h1>
                <DataTable
                    className="DataTable"
                    title="Demanda Proyectada"
                    keyField="id"
                    width="100%"
                    headers={this.state.model.demandHeaders}
                    data={[]}
                    noData="No Records!"
                />
                <h1>Inventario Proyectado</h1>
                <DataTable
                    className="DataTable"
                    title="Inventario Proyectado"
                    keyField="id"
                    width="100%"
                    headers={this.state.model.demandHeaders}
                    data={[]}
                    noData="No Records!"
                />

                <h1>Total Pedidos</h1>

                <DataTable
                    className="DataTable"
                    title="TotalPedidos"
                    keyField="id"
                    width="100%"
                    headers={[]}
                    data={[]}
                    noData="No Records!"
                />

                {this.productTables}
            </main>
        )
    }
}

export default MainInventarios
