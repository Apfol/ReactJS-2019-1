import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import { Carousel } from 'react-bootstrap';
import SliderCard from './SliderCard'

class PictureSlider extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        height="500"
                    />
                    <Carousel.Caption>
                        <SliderCard title="Nuestro Municipio"
                            p="Sopó es un municipio ubicado a 39 km de Bogotá, fundado en el año 1653 por Fray Francisco Chacón." />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                        height="500"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        height="500"
                    />
                    <Carousel.Caption>
                        <SliderCard title="Turismo" 
                        p="Un pequeño municipio con grandes maravillas naturales e históricas que resulta ideal para quienes buscan un descanso del ajetreo de la ciudad y respirar aire puro." />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
};

export default PictureSlider;