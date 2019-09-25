import React,{Component} from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import img1 from "../Assets/Persona3.jpg";
import img2 from "../Assets/Persona3.jpg";
import img3 from "../Assets/Persona3.jpg";
import "./Carousel.css";

class DemoCarousel extends Component {
    render() {
        return (
            <div
            className="App"
          >
            <Carousel arrows infinite>
              <img class="imgCaro" src={img1} />
              <img class="imgCaro" src={img2} />
              <img class="imgCaro" src={img3} />
            </Carousel>
          </div>
        );
    }
}
export default DemoCarousel;

