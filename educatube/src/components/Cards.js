import React, { Component } from "react";
import Card from "./Card";
import './Cards.css'
 
import img1 from "./resources/img/csm_maraton_12k-22_b4a39d6c02.jpg";
import img2 from "./resources/img/csm_maraton_12k-3_ca5f169da0.jpg";
import img3 from "./resources/img/csm_maraton_12k-8_5a79ca745a.jpg";
 
class Cards extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Card imgsrc={img1} title='Console' />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img2} title='Playground' />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img3} title='Adventure' />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Cards;