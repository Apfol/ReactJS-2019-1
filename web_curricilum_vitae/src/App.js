import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Title, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {
  return (

    <div style={{height: '500px', position: 'relative'}}>
    <Layout fixedHeader style={{background: ''}}>
    <Header className="nav-colour" title={<span><span style={{ color: '#4f0469' }}> <b>Nathalia Avila</b> </span></span>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/skills">Skills/Projects</Link>
                <Link to="/social">Social N</Link>
            </Navigation>
        </Header>
        <Drawer title="Nathalia">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/skills">Skills/Projects</Link>
                <Link to="/social">Social N</Link>
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
