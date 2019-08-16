import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Productos from './productos';
import Chat from './chat';
import Carrito from './carrito';
import Transacciones from './transacciones';


const Main = () => (
    <Switch>
        <Route exact path="/carrito" component={Carrito}/>
        <Route exact path="/productos" component={Productos}/>
        <Route exact path="/chat" component={Chat}/>
        <Route exact path="/transacciones" component={Transacciones}/>
    </Switch>

)
export default Main;