import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import RoutesConstants from "./Routes";
import Page404 from "../Page404/Page404";
import Home from "../Home/Home";

export default ()=>(
    <Router>
        <Switch>
            <Route exact path={RoutesConstants.home.path} render={()=><Redirect to={RoutesConstants.menu.inicio.path}/>}/>
            <Route path={RoutesConstants.home.path} component={Home}/>
            <Route  path={RoutesConstants.page404.path} component={Page404}/>
            <Redirect to={RoutesConstants.page404.path}/>
        </Switch>
    </Router>
)