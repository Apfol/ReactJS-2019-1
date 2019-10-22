import React, {Component} from "react"
import processDiagram from "./../../../assets/images/ProccessDiagram.png"
import ModeloRelacional from "./../../../assets/images/ModeloRelacional.png"
import "./Main.css"

class Main extends Component {
    render() {
        return (
            <main className="inicio">

                <div className="ContainerQuinesSomos">
                    <div className="quienesSomos">
                        <h1>Quienes Somos ?</h1>
                        <p>Joyería Deluxe es una empresa dedicada al comercio, distribución y fabricación de productos
                            de
                            joyería con una experiencia en el mercado de mas de 15 años en Colombia, creada en Bogotá y
                            con
                            7 puntos de ventas que están distribuidos en las principales ciudades del país.</p>
                    </div>
                </div>


                <div className="misionVision">
                    <div className="mision">
                        <h1>Mision</h1>
                        <p>Crear los mejores diseños de joyería y ofrecer una alta gama de estos mismos para ofrecer un
                            producto de alta calidad y competir en los grandes mercados.</p>
                    </div>
                    <div className="vision">
                        <h1>Vision</h1>
                        <p>Para 2050 nuestra empresa será líder en diseño, distribución y comercialización en todos los
                            mercados a nivel nacional e internacional de las mejores joyas producidas en nuestro
                            país.</p>
                    </div>
                </div>

                <div className="mapa">
                    <h1>Diagrama de procesos</h1>
                    <img src={processDiagram} alt="Diagrama de procesos"/>
                    <div className="text">
                        <p> Este es el diagrama de procesos, el proceso empieza con el recurso de demanda que llega por
                            parte del area de marketing, luego llega a inventario de producto terminado y mira cuanto
                            producto terminado hay y revisa si le sera suficiente o necesitara producir mas producto
                            para satisfacer la demanda de la temporada. para eso revisa la base de datos de producto
                            terminado y genera un reporte de produccion que va a para a produccion donde se hace el
                            calculo de toda la materia pprima necesaria para cubrir la cuota de produccion. </p>

                        <p> se genera un reporte de materia prima necesaria que ira a para a inventario de materia prima donde
                            revisan si hay suficiente materia prima para cubrir la produccion o no. si si la hay la
                            preparan y la mandan a produccion, si no hay generan un reporte y se lo pasan a ventas para
                            que ventas haga los tramites necesarios. Luego ventas genera una orden de compra que se la
                            manda a los proveedores y a financiera. financiera le desembolsa el dinero a los proveedores
                            y estos le mandan la materia prima a inventario de producto terminado para que este se la
                            pase a produccion para continuar con la produccion de los productos que finalmente
                            terminaran en inventario de producto terminado</p>
                    </div>
                </div>

                <div className="modeloRelacional">
                    <h1>Modelo Relacional</h1>
                    <img src={ModeloRelacional} alt="Modelo relacional" className="procesos"/>
                    <div className="text">
                        <p>En este diagrama podemos observar las relaciones que existen en la base de datos hasta el
                            proceso
                            de "Revision de materia prima" en el diagrama de procesos. Esta va a ser la base de datos
                            que se
                            utilizara para soportar toda la aplicacion y se extendera lo que sea necesario para
                            almacenarla
                            informacion del MRP2</p>
                    </div>
                </div>

            </main>
        )
    }
}

export default Main
