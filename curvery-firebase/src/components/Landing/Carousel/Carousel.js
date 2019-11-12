import React from 'react';
import './Carousel.css';

const Carousel = () => (

  <div>

  <div class="carousel-wrapper" style={{"height": "90vh"}}>

      <span id="target-item-1"></span>
      <span id="target-item-2"></span>
      <span id="target-item-3"></span>
      
      <div class="carousel-item item-1" style={{"background-image": "url('https://firebasestorage.googleapis.com/v0/b/prueba-6418b.appspot.com/o/Landing-Page%2FCurveryNuevobaja1.jpg?alt=media&token=2fdf9f7e-edb9-44c0-a4c0-a0f5c9f4de4c')"}}>
      <div className="carousel-text">
      </div>
          
          <a class="arrow arrow-prev" href="#target-item-3"></a>
          <a class="arrow arrow-next" href="#target-item-2"></a>
      </div>
      
      <div class="carousel-item item-2" style={{"background-image": "url('https://firebasestorage.googleapis.com/v0/b/prueba-6418b.appspot.com/o/Landing-Page%2FGratisNuevo.jpg?alt=media&token=41592cbd-c6e6-4176-ba32-cd2e2afc4b65')"}} >
      <div className="carousel-text">
      </div>
      <a class="arrow arrow-prev" href="#target-item-1"></a>
          <a class="arrow arrow-next" href="#target-item-3"></a>
      </div>
      <div class="carousel-item item-3 " style={{"background-image": "url('https://firebasestorage.googleapis.com/v0/b/prueba-6418b.appspot.com/o/Landing-Page%2FTiempoNuevo.jpg?alt=media&token=2ffaa7e9-8a7f-4e83-a3f5-aa71a1acedba')"}}>
      <div className="carousel-text">
      </div>
          <a class="arrow arrow-prev" href="#target-item-2"></a>
          <a class="arrow arrow-next" href="#target-item-1"></a>
      </div>
  </div>
</div>
);
export default Carousel;