import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/routes';


function App() {
  return (
    <div style={{height: '650px', position: 'relative'}}>
    <Layout fixedHeader style={{background: ''}}>
    <Header transparent className="nav-colour" title="Group By">
    {<span style={{ color: '#4f0469' }}></span>}
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/carrito">Mi Carrito</Link>
                <Link to="/transacciones">Transacciones</Link>
                <Link to="/chat">Chat</Link>
            </Navigation>
        </Header>
        <Drawer title="Group By">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/carrito">Mi carrito</Link>
                <Link to="/transacciones">Transacciones</Link>
                <Link to="/chat">Chat</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Main/>

        </Content>
        <Content />
    </Layout>
</div>
  );
}


export default App;



