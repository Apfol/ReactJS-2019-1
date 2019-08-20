import React from 'react';
import {Layout,Navigation,Drawer,Header,Content} from 'react-mdl';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import info from './assets/info';
import Profile from './components/Profile/profile';
import Home from './components/Home/Home';
import Category from './components/Category/Category'

function App() {

  return (
    <BrowserRouter>
    <div style={{height: '100%'}}>
      <Layout fixedHeader  style={{background: ''}}>
          <Header fixedHeader transparent className="nav-colour" title={<span><span style={{ color: '#ffffff' }}> <b>Κοῖος</b> </span></span>}>
              <Navigation>
                  <Link to= {`/home`}>Home</Link>
                  <Link to= {`/product`} title="Products" >Products</Link>
                  <Link to="/">Shopping cart</Link>
                  <Link to="/profile">Profile</Link>
                  <Link to="/">Chat room</Link>
              </Navigation>
          </Header>
          <Drawer title="Κοῖος">
            <Navigation>
                  <Link to= {`/home`}>Home</Link>
                  <Link to= {`/product`} title="Products" >Products</Link>
                  <Link to="/">Shopping cart</Link>
                  <Link to="/profile">Profile</Link>
                  <Link to="/">Chat room</Link>
            </Navigation>
          </Drawer>

          <main>
                  <Route exact path="/profile" component={Profile}/>
                  <Route exact path="/home" render={() => <Home info = {info}/>} />
                  <Route exact path="/categories/:idCategory" render={props => <Category {...props} categoriesList = {info.categories}/>} 
                />
          </main>

          
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
