import React from 'react';
import './LogIn.css';

function LogIn(props) {
    return (
        <div>

            <h1 className="main-header" >Ingresa al mundo de la informacion </h1>
            <table className="new-post-form">

                <tbody>

                    <tr>
                        <td>
                            <label>Correo Electronico: </label>
                        </td>
                        <td>
                            <input type="text" value={props.newUserInfo["mail"]}
                                onChange={(event) => props.loadInformation(event, 'mail')} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Contraseña: </label>
                        </td>
                        <td>
                            <input type="text" value={props.newUserInfo["password"]}
                                onChange={(event) => props.loadInformation(event, 'password')} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={props.logOn}>Iniciar sesion</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LogIn;