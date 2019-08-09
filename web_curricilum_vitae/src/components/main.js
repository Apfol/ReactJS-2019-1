import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Skills from './skills';
import Social from './social';
import Achievements from './achievements';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/achievements" component={Achievements}/>
        <Route exact path="/social" component={Social}/>
        <Route exact path="/skills" component={Skills}/>
    </Switch>

)
export default Main;