import React, {Component} from "react"

import classes from  "./CheckListItems.css"

class CheckListItems extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked:false,
        }
    }

    handleCheck = () =>{
        let isChecked = !this.state.checked;
        this.setState({checked:isChecked});
        this.props.getCheckedStatus(this.props.index)
    };

    render() {

        this.state.checked ? classes.Task = {
            display: "flex",
            fontSize: "20px",
            marginBottom: "5px",
            color: "#FF0000",
            textDecoration: "line-through",
        }: classes.Task = {
            display: "flex",
            fontSize: "20px",
            marginBottom: "5px",
        };

        return(
          <li>
              <label style={classes.Task}>
                <input type="checkbox" onChange={this.handleCheck}/>
                  {this.props.task}
              </label>
          </li>
        );
    }
}

export default CheckListItems
