import React, {Component} from 'react';
import axios from 'axios';
import cards from './Cards.css'
class Cards extends Component{
    state = {
        courses: [],
        error: []
    }
    componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://api.myjson.com/bins/16apk1')
        .then(res => {
            console.log(res);
            this.setState({courses: res.data});
        })
        .catch(error => {
            this.setState({error: error})
            alert('Hola el error es ' + error);
        })
    }
   
    render(){
        return(<div>
            <section class={cards.card}>
            {this.state.courses.map(
                course => <div  key={Date.now()} style={{ 'background-image': `url(${course.image})`}} className={cards.content_card}>
            <div className={cards.body_card}>
            <div className={cards.title_card}>
            <h3 className={cards.title1}>{course.title}</h3>
            <h2 className={cards.title2}>{course.title}</h2>
            </div>
            <div className={cards.button_card}>
            <div className={cards.button_body}>
            <h2 className={cards.button_title2}>{course.title}</h2>
            <a href="/"><button className={cards.button}><span>OBTENER</span></button></a>
            </div>
            </div>
            </div>
            </div>
            )}
            </section>
            </div>
        )
    }
}
export default Cards;