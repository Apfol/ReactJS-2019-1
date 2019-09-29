import React from 'react';
import './RegisterForm.css';

function RegisterForm(props) {
    return (
        <div>
            <h1 className="main-header" >Crea tu cuenta </h1>
            <table className="new-post-form">
                <tbody>
                    <tr>
                        <td>
                            <label>Nombre</label>
                        </td>
                        <td>
                            <input type="text" value={props.newUserInfo["name"]}
                                onChange={(event) => props.loadInformation(event, "name")} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Nombre de Usuario</label>
                        </td>
                        <td>
                            <input type="text" value={props.newUserInfo["username"]}
                                onChange={(event) => props.loadInformation(event, "username")} />
                        </td>
                    </tr>
                    {/* constructor(id, username, name, mail, pass, img, books = []) */}
                    <tr>
                        <td>
                            <label>Correo</label>
                        </td>
                        <td>
                            <input type="text" value={props.newUserInfo["mail"]}
                                onChange={(event) => props.loadInformation(event, 'mail')} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Contraseña</label>
                        </td>
                        <td>
                            <input type="text" value={props.newUserInfo["password"]}
                                onChange={(event) => props.loadInformation(event, 'password')} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={props.submitNewUser}> Registrar </button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default RegisterForm;