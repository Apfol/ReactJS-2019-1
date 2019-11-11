import React from 'react';
import './Carousel.css'
const Carousel = () => (

  <div>

  <div class="carousel-wrapper" style={{"height": "400px"}}>

      <span id="target-item-1"></span>
      <span id="target-item-2"></span>
      <span id="target-item-3"></span>
      
      <div class="carousel-item item-1 light" style={{"background-image": "url('https://firebasestorage.googleapis.com/v0/b/prueba-6418b.appspot.com/o/Landing-Page%2FCurvery.jpg?alt=media&token=b3e1e8ba-c7de-457d-9899-8b482b501753')"}}>
      <div className="carousel-text">
      <h2>CURVERY</h2>
      <p>La nueva plataforma de aprendizaje donde te olvidaras de las distracciones que tiene YouTube para que aproveches el tiempo</p>
      <button>Registrate</button>
      </div>
          
          <a class="arrow arrow-prev" href="#target-item-3"></a>
          <a class="arrow arrow-next" href="#target-item-2"></a>
      </div>
      
      <div class="carousel-item item-2 light" style={{"background-image": "url('https://firebasestorage.googleapis.com/v0/b/prueba-6418b.appspot.com/o/Landing-Page%2FTiempo.jpg?alt=media&token=ca831ae1-c0be-4189-a4b9-0ee29033c8de')"}} >
      <div className="carousel-text">
      <h2>VE A TU RITMO</h2>
      <p>Con CURVERY planea tus horarios y estudia cuando y donde puedas</p>
      <button>Registrate</button>
      </div>
      <a class="arrow arrow-prev" href="#target-item-1"></a>
          <a class="arrow arrow-next" href="#target-item-3"></a>
      </div>
      <div class="carousel-item item-3 light" style={{"background-image": "url('https://firebasestorage.googleapis.com/v0/b/prueba-6418b.appspot.com/o/Landing-Page%2FGratis.jpg?alt=media&token=2695acb6-550c-4ce3-a0c2-0a6ae39dc05f')"}}>
      <div className="carousel-text">
      <h2>ES GRATIS</h2>
      <p>Curvery es una plataforma donde encontraras cursos 100% gratis ya que creamos y buscamos listas apartir de un tema con los videos de Youtube</p>
      <button>Registrate</button>
      </div>
          <a class="arrow arrow-prev" href="#target-item-2"></a>
          <a class="arrow arrow-next" href="#target-item-1"></a>
      </div>
  </div>
</div>
);
export default Carousel;