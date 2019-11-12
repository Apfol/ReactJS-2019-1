import React from 'react';
import Carousel from './Carousel/Carousel'

import Illustracion from '../VideoCards/Categories/Illustracion/Illustracion';
import Photography from '../VideoCards/Categories/Photography/Photography';
import Programation from '../VideoCards/Categories/Programation/Programation';
import Marketing from '../VideoCards/Categories/Marketing/Marketing';

const Landing = () => (
  <div>
    <Carousel></Carousel>
    <Illustracion></Illustracion>
    <Photography></Photography>
    <Programation></Programation>
    <Marketing></Marketing>
  </div>
);
export default Landing;