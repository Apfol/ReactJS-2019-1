import React from 'react';
import classes from "./Home.css";
import image1 from './assets/iglesia.jpg';
import anmelden from './assets/underConstruction.png';
import { ButtonToolbar, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import Information from '../Information/Information';
import PictureSlider from '../PictureSlider/PictureSlider';
import NewsHomeContainer from '../NewsHomeContainer/NewsHomeContainer.js';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PictureSlider></PictureSlider>
                <div className={`${classes.cuerpo} row`}>
                    <NewsHomeContainer></NewsHomeContainer>
                    <div className="col-md-6">  
                        <p class={classes.webDesc}>¡Bienvenido/a a la página oficial del Municipio de Sopó!</p>
                        <div className="row">
                            <div className="col-md-3">
                                <ButtonToolbar>
                                    {['top'].map(placement => (
                                        <OverlayTrigger
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${placement}`}>
                                                    Iglesia Divino Salvador de Sopó
                                            </Tooltip>
                                            }
                                        >
                                            <Image src={image1} style={{ height: '200px' }} rounded />
                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>
                            </div>
                            <div className="col-md-9" style={{ backgroundColor: 'white' }}>
                                <p></p>
                                <Information info1="País" info2="Colombia" />
                                <Information info1="Departamento" info2="Cundinamarca" />
                                <Information info1="Ciudad" info2="Sopó" />
                                <Information info1="Área" info2="111.5km^2" />
                                <Information info1="Población" info2="26.768 Hab" />
                                <Information info1="Altitud" info2="2587 m.s.n.m" />
                                <Information info1="Código Postal" info2="251001" />
                                <a href="#info" class={classes.infoLink}>Más Información...</a>
                            </div>
                        </div>
                        <div class={`row ${classes.anuncio}`}>
                            <div class="col-sm-1"></div>
                            <div class="col-sm-3">
                                <Image src={anmelden} style={{ height: '150px' }} />
                            </div>
                            <div class="col-md-7">
                                <h1 class={classes.anunT}>Pronto, más contenido...</h1>
                            </div>
                            <div class="col-sm-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}