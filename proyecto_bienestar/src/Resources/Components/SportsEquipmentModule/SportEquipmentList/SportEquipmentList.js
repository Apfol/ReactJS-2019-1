import React, { Component } from "react";
import classes from "./SportEquipmentList.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Module from "../SportsEquipment";
import Admin1 from "../Admin/ParaEntregar/ParaEntregar";
import {Tabs, Tab, Col, Nav} from "react-bootstrap";
class SportEquipmentModule extends Component {
  

  state = {
    key:''
  };
  setKey(k){
    this.setState({
      key: k
    })
  }
  render() {

    return (
      <div className={classes.SportEquipmentList}>
        <Module />
        <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={k => this.setKey(k)}>
      <Tab className = {classes.link} eventKey="home" title="Home">
        <Admin1/>
      </Tab>
      <Tab className = {classes.link}  eventKey="profile" title="Profile">
        jjjjj
      </Tab>
      
    </Tabs>
      </div>
    );
  }
}

export default SportEquipmentModule;
