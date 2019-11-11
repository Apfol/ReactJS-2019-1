import React, { Component } from "react";
import classes from "./ParaEntregar.css";
import Prestamo from "../ParaEntregar/Prestamos/Prestamos";
import axios from "../../../../../Instances/axios-sportequipment";

class ParaEntregar extends Component {
  state = {
     Prestamos:[] 
  };
  componentDidMount(){
    axios.get('/Prestamo.json')
    .then((response) => {  /*
         const posts = response.data.map((post, uid) => {
            
            return (<Prestamo p = {post} uid = {uid}/>);
        });*/
        
        const posts = Object.values(response.data).map((post) => {
            
            return (<Prestamo p = {post}/>);
        });
        console.log(posts)
        console.log(response.data)
        this.setState({
            Prestamos: posts
        })
        console.log(this.state.Prestamos)
    }).catch((error) => {
        console.log(error)
    })
  }   
  render() {
    return (
      <div className={classes.ParaEntregar}>
          H
          {this.state.Prestamos}           
      </div>
    );
  }
}

export default ParaEntregar;