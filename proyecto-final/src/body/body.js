import React from 'react';
import "./body.css";
import image1 from './assets/iglesia.jpg';
import noticia1 from './assets/convocatoria.jpeg';
import noticia2 from './assets/convenio.jpg';
import noticia3 from './assets/informe.jpg';
import noticia4 from './assets/noticia1.jpg';
import anmelden from './assets/underConstruction.png';
import { Carousel, Card, Button, ButtonToolbar, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import Notices from './Notices'
import Information from './Information'

export default class Body extends React.Component {
    render() {
        return (
            <div className="row cuerpo">
                <div className="col-md-6">
                    <Card className="conNews">
                        <Card.Header style={{ backgroundColor: '#48567F' }}>
                            <div className="row">
                                <div className="col-md-5">
                                    <h1 className="title">Noticias</h1>
                                </div>
                                <div className="col-md-7">
                                    <p className="newsDesc">Encuentra las más recientes noticias sobre el municipio
                                    y mantente al tanto de los eventos, novedades y demás. </p>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="container">
                                <ul class="nav nav-pills nav-stacked scroll">
                                    <Notices notice={noticia1} p="Convocatoria Laboral"
                                        info="La Alcaldía invita a toda la comunidad a la convocatoria laboral que se realizará el día 27 de Septiembre." />
                                    <Notices notice={noticia2} p="Convenio Educativo"
                                        info="Se informa a la comunidad el nuevo convenio realizado entre la Alcaldía Municipal y la Universidad de La Sabana." />
                                    <Notices notice={noticia3} p="Informe del Consejo Municipal"
                                        info="El consejo de la Alcaldía Municipal de Sopó presenta su séptimo informe del año 2019 " />
                                    <Notices notice={noticia4} p="Concurso de Cuento Corto"
                                        info="La Alcadía Municipal invita a la comunidad a participar en la 12° edición del Concurso de Cuento Corto." />
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <p class="webDesc">¡Bienvenido/a a la página oficial del Municipio de Sopó!</p>
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
                            <a href="#info" class="infoLink">Más Información...</a>
                        </div>
                    </div>
                        <div class="row anuncio">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-3">
                                <Image src={anmelden} style={{ height: '150px' }} />
                            </div>
                            <div class="col-md-7">
                                <h1 class="anunT">Pronto, más contenido...</h1>
                            </div>
                            <div class="col-sm-1"></div>
                        </div>
                </div>
            </div>
        );
    }


}