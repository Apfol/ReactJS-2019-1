import React, {Component} from "react";
import InfoBlock from './../InfoBlock/InfoBlock';
import axios from 'axios';
import classes from './Home.css';

class Home extends Component {
    state ={
        pictures: [],
        loading: true
    }
    render(){
        if(this.state.loading === true){
            return(
                <div className={classes.blocks}>
                    <h1 className={classes.loading}>Loading feed...</h1>
                </div>
            );
        } else{
                return (
                    <div>
                        <h2 className={classes.center}>This is the home page!</h2>
                        <div>
                            <div className={classes.blocks}>
                                {this.state.pictures.map((url, urlIndex) =>
                                   this.renderPictures(url, urlIndex))}
                            </div>
                        </div>
                    </div>
                );
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                let picture = response.data.slice(0,9);
                let tempArray = [...this.state.pictures];

                picture = picture.map((photo) =>
                   tempArray.push(photo.url)
                );

                this.setState({
                    pictures: tempArray,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error: ' + error);
            })
    }

    renderPictures(url, photoIndex){
        return(
            <InfoBlock key={photoIndex} url={url}></InfoBlock> 
        );
    }
}

export default Home;