import React, { Component } from 'react'
import photo from '../../assets/images/profile.png';
import './profile.css'

class Perfil extends Component{
    render(){
        return(
            <div className="all">
                <div className="grid">
                    <div className="cell">
                        <div className="perfil">
                            <h1 className='text-profile'>Perfil</h1>
                            <div className="photo-div">
                                <img className="photo-profile" src={photo} alt="photo-profile"/>
                                <p className="update-photo">Actualizar foto</p>
                            </div>
                            <div className="name-div">
                                <p className='name'>Juan Felipe Rivadeneira Delgado</p>
                                <p className="editar">Editar</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div>
                            <h1 className='text-profile'>Direccion</h1>
                            <p>Crra 9C #121-48</p>
                            <p>Bogotá DC 110111</p>
                            <p>DISTRITO CAPITAL DE BOGOTÁ</p>
                            <p></p>
                            <p className="editar">Administrar direcciones</p>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="cell">
                        <div>
                            <h1 className='text-profile'>Correo electronico</h1>
                            <p>jfeliperd@gmail.com</p>
                            <p style={{fontSize:'12px'}}>Principal</p>
                            <p></p>
                            <p className="editar">Editar</p>
                        </div>
                    </div>
                    <div className="cell">
                        <div>
                            <h1 className='text-profile'>Mis servicios</h1>
                            <p style={{textDecoration: 'underline'}}>Historial</p>
                            <p style={{textDecoration: 'underline'}}>Activos</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="cell">
                        <div>
                            <h1 className='text-profile'>Opciones de cuenta</h1>
                            <p>Telefono: </p>
                            <p>3045481244</p>
                            <p>Celular, Principal</p>
                            <p></p>
                            <p className="editar">Editar</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Perfil;