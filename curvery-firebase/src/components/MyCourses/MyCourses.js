import React from 'react';

import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import Filter from './Filter/FilterMyCourse';
//COMPONENTS
import MyCourse from './MyCourse';
import "./MyCourses.css"

const MyCourses = () => (
  <div>
    <div className="titleMyCourses_MYCOURSES"></div>
    <Filter></Filter>
    <MyCourse></MyCourse>
  </div>
);
const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(MyCourses);