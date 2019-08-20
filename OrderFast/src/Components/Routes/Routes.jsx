import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainPage from "./../../Pages/MainPage/MainPage";
import Arcos from "./../../Pages/Arcos/Arcos";
import CafeteriaAdPortas from "./../../Pages/CafeteriaAdPortas/CafeteriaAdPortas"
import Embarcadero from "./../../Pages/Embarcadero/Embarcadero"
import EmbarcaderoCarta from "./../../Pages/EmbarcaderoCarta/EmbarcaderoCarta"
import Kioskos from "./../../Pages/Kioskos/Kioskos"
import Meson from "./../../Pages/Meson/Meson"
import PuntoCafeG from "./../../Pages/PuntoCafeG/PuntoCafeG"
import PuntoCafeO from "./../../Pages/PuntoCafeO/PuntoCafeO"
import PuntoPizza from "./../../Pages/PuntoPizza/PuntoPizza"
import PuntoVerde from "./../../Pages/PuntoVerde/PuntoVerde"
import PuntoWok from "./../../Pages/PuntoWok/PuntoWok"
import RestauranteEscuela from "./../../Pages/RestauranteEscuela/RestauranteEscuela"
import Terraza from "./../../Pages/Terraza/Terraza"
import Page404 from "./../../Pages/404/404"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/Arcos" component={Arcos}/>
                <Route exact path="/CafeteriaAdPortas" component={CafeteriaAdPortas}/>
                <Route exact path="/Embarcadero" component={Embarcadero}/>
                <Route exact path="/EmbarcaderoCarta" component={EmbarcaderoCarta}/>
                <Route exact path="/Kioskos" component={Kioskos}/>
                <Route exact path="/Meson" component={Meson}/>
                <Route exact path="/PuntoCafeG" component={PuntoCafeG}/>
                <Route exact path="/PuntoCafeO" component={PuntoCafeO}/>
                <Route exact path="/PuntoPizza" component={PuntoPizza}/>
                <Route exact path="/PuntoVerde" component={PuntoVerde}/>
                <Route exact path="/PuntoWok" component={PuntoWok}/>
                <Route exact path="/RestauranteEscuela" component={RestauranteEscuela}/>
                <Route exact path="/Terraza" component={Terraza}/>
                <Route  path="/404" component={Page404}/>
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default Routes;