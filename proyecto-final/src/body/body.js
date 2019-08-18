import React from 'react';
import "./body.css";
import image1 from './assets/iglesia.jpg';
import noticia1 from './assets/convocatoria.jpeg';
import noticia2 from './assets/convenio.jpg';
import noticia3 from './assets/informe.jpg';
import noticia4 from './assets/noticia1.jpg';
import { Carousel, Card, Accordion, Button, ButtonToolbar, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Notices from './Notices'
import Information from './Information'

export default class Body extends React.Component {
    render(){
        return(
            <div className = "container body">
                <div className = "row">
                    <div className = "col-md-7 leftColumn">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="outline-primary" eventKey="1">
                                    <h1 className = "title">Noticias</h1>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <div className = "container">
                                    <ul class="nav nav-pills nav-stacked scroll">
                                        <Notices notice = {noticia1} p = "Convocatoria Laboral" info = "Esto es información"/>
                                        <Notices notice = {noticia2} p = "Convenio Educativo"/>
                                        <Notices notice = {noticia3} p = "Informe del Consejo Municipal"/>
                                        <Notices notice = {noticia4} p = "Concurso de Cuento Corto"/>
                                    </ul>
                                </div>   
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </div>
                    <div className = "col-md-1"></div>
                    <div className = "col-md-4 rightColumn">
                        <ButtonToolbar>
                            {['top'].map(placement => (
                                <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        <Information info1 = "País" info2 = "Colombia"/>
                                        <Information info1 = "Departamento" info2 = "Cundinamarca"/>
                                        <Information info1 = "Ciudad" info2 = "Sopó"/>
                                        <Information info1 = "Area" info2 = "111.5km^2"/>
                                        <Information info1 = "Población" info2 = "26.768 Hab"/>
                                        <Information info1 = "Altitud" info2 = "2587 m.s.n.m"/>
                                        <Information info1 = "Código Postal" info2 = "251001"/>
                                    </Tooltip>
                                }
                                >
                                <img className="information" src={image1}/>
                                </OverlayTrigger>
                            ))}
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }


}