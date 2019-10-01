import React, {Component} from 'react';
import Menu from '../../components/menu/Menu';
import Card from '../../components/cards/Card';
import Recommended from '../../components/recommended/Recommended';
import Categories from '../../components/categorie/Categorie';
import Footer from '../../components/footer/Footer';
import Instructor from '../../components/instructor/Instructor';
class Home extends Component{
    render(){
        return(
            <div>
            <Menu></Menu>
            <Card></Card>
            <Instructor></Instructor>
            <Categories></Categories>
            <Recommended></Recommended>
            <Footer></Footer>
            </div>
        )
    }
}

export default Home;