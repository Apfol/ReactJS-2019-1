import React from 'react'
import classes from './profile.css'

const Perfil  = props => {
    if(!props.valid){
        alert("Usuario o contraseña invalido");
        props.history.push('/');
        return(null);
    }
    console.log(props.profile)
    return(
        <div className={classes.all}>
            <div className={classes.grid}>
                <div className={classes.cell}>
                    <div className={classes.perfil}>
                        <h1 className={classes.text_profile}>Perfil</h1>
                        <div className={classes.photo_div}>
                            <img className={classes.photo_profile} src={props.profile.photo} alt="profile-pic"/>
                            <p className={classes.update_photo}>Actualizar foto</p>
                        </div>
                        <div className={classes.name_div}>
                            <p className={classes.name}>{props.profile.name}</p>
                            <p className={classes.editar}>Editar</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={classes.cell}>
                    <div>
                        <h1 className={classes.text_profile}>Direccion</h1>
                        <p>{props.profile.address.address}</p>
                        <p>{props.profile.address.city} {props.profile.address.zip_code}</p>
                        <p></p>
                        <p className={classes.editar}>Administrar direcciones</p>
                    </div>
                </div>
            </div>
            <div className={classes.grid}>
                <div className={classes.cell}>
                    <div>
                        <h1 className={classes.text_profile}>Correo electronico</h1>
                        <p>{props.profile.mail}</p>
                        <p style={{fontSize:'12px'}}>Principal</p>
                        <p className={classes.editar}>Editar</p>
                    </div>
                </div>
                <div className={classes.cell}>
                    <div>
                        <h1 className={classes.text_profile}>Mis servicios</h1>
                        <p style={{textDecoration: 'underline'}}>Historial</p>
                        <p style={{textDecoration: 'underline'}}>Activos</p>
                        <p></p>
                    </div>
                </div>
                <div className={classes.cell}>
                    <div>
                        <h1 className={classes.text_profile}>Opciones de cuenta</h1>
                        <p>Telefono: </p>
                        <p>{props.profile.phone.number}</p>
                        <p>{props.profile.phone.type}</p>
                        <p className={classes.editar}>Editar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;