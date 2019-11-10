import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// Routes
import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/index';
import AdminPage from '../Admin/index';
import NotFound from '../NotFound/NotFound';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Course from '../Courses/Course';

const App = () => (
  <Router>
  <div>
  <Navigation />
  <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.COURSES} component={Course} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route component={NotFound} />
      <Redirect to="/404" />
      </Switch>

      </div>
  </Router>
);
export default withAuthentication(App);