import React, { Component } from "react";
import classes from "./FoundedObjectsList.css";
import FoundedObject from "../FoundedObject/FoundedObject";
import SearchFilter from "../MissingObjectList/SearchFilter";
import { connect } from 'react-redux';
import * as actionCreators from '../../../../Store/Actions/';

class FoundedObjectsList extends Component {
  state = {
    missingObjects: this.props.missingObjects,
    search: "",
    tareaLista: []
  }
  componentDidMount() {
    this.props.onFetchObjects();
  }
  componentWillReceiveProps(nextState) {
    this.setState({

      missingObjects: nextState.missingObjects
    });
    console.log(this.props.missingObjects)
  }

  handlechange = e => {
    this.setState({
      search: e.target.value
    }, () => console.log(this.state.search));
    console.log(e.target.value)
  }

  renderList = () => {
    if (this.state.search != "" && this.state.missingObjects) {
      
      var arrayFilter = [...this.state.missingObjects];
      
      arrayFilter = arrayFilter.filter(object => object.name == this.state.search);//object => object.name.includes(this.state.search.toLowerCase())
      
      return (
        arrayFilter.map((object, index) => object.found===false ?
          <FoundedObject key={index} name={object.name} foundlocation={object.foundlocation}
            foundedby={object.foundedby} image={object.image} />:console.log("not found yet")
        )
      )
    }
    else {
      return (
        
        this.state.missingObjects.map((object, index) => object.found === false?
          <FoundedObject key={index} name={object.name} foundlocation={object.foundlocation}
            foundedby={object.foundedby} image={object.image} />:console.log("not found yet")
            
        )
      )
      
    }
  }

  render() {
    return (
      <div className={classes.MissingObjectList} >
        <SearchFilter handleChange={this.handlechange} value={this.state.search} />
        <h1 className={classes.Title}>Has encontrado estos objetos</h1>
        {this.renderList()}
      </div>);
  }

}

const mapStateToProps = state => {
  return {
    missingObjects: state.mObjectsStore.missingObjects,
    loadingObjects: state.mObjectsStore.loadingObjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchObjects: () => dispatch(actionCreators.fetchObjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundedObjectsList);