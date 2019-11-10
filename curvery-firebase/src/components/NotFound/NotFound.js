import React from 'react';

import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

//COMPONENTS
import './NotFound.css';

const NOTFOUND = () => (
    <div className="background_NOTFOUND">
    <div className="notfound_NOTFOUND">
    	<div className="container_NOTFOUND text-center">
    <div className="image_NOTFOUND">			
    <img src="https://firebasestorage.googleapis.com/v0/b/prueba-6418b.appspot.com/o/board.png?alt=media&token=91937ade-3980-494a-91c2-d0e827be36c8" alt="" />
    <h2 className="header_NOTFOUND">404</h2>
    </div>	
    <h3 className="oops_NOTFOUND">Oops, Esta no es la página que buscabas!</h3>
    <p>Parece que la página que está tratando de visitar no existe.</p>
    <div className="link_NOTFOUND">
    <NavLink to={ROUTES.HOME}>HOME</NavLink>
    </div>	
	</div>
	<div className="footer_NOTFOUND">
    <p> &copy; 2019 404 Error. All Rights Reserved | Curvery </p>
	</div>
    </div>

</div>
);

export default NOTFOUND;