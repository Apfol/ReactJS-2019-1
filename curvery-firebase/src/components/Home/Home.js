import React from 'react';

import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import './Home.css';
//COMPONENTS
import Illustracion from '../VideoCards/Categories/Illustracion/Illustracion';
import Photography from '../VideoCards/Categories/Photography/Photography';
import Programation from '../VideoCards/Categories/Programation/Programation';
import Marketing from '../VideoCards/Categories/Marketing/Marketing';
import Instructor from '../VideoCards/Instructor/Instructor';

const HomePage = () => (
  <div>
    <h1 className="title_HOMEPAGE">Bienvenido a Curvery</h1>
    <Illustracion></Illustracion>
    <Photography></Photography>
    <Instructor></Instructor>
    <Programation></Programation>
    <Marketing></Marketing>
  </div>
);
const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);