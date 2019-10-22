import React, {Component} from "react";

import CheckListItems from "../CheckListItems/CheckListItems";

import checkListText from "./checkListText.js";
import classes from "./CheckList.css"

class CheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            checkedItems: []
        }
    }

    getCheckedStatus = (key) => {
        let checkedItems = this.state.checkedItems;
        let numberInArr = false;
        for (let i = 0; i<checkedItems.length; i++){
            if(key === checkedItems[i]){
                numberInArr = true;
            }else{
                numberInArr = false;
            }
        }
        if(!numberInArr){
            checkedItems.push(key);
        }
        console.log(checkedItems)
        this.setState({checkedItems:checkedItems});
    };

    listItemAdded = () => {

        let listItems = this.state.listItems;
        let defaultText = checkListText.defaultText + (listItems.length + 1);
        let task = window.prompt(checkListText.messageText, defaultText);
        listItems.push(<CheckListItems
            index = {listItems.length}
            task={task}
            key={listItems.length}
            getCheckedStatus={this.getCheckedStatus}
        />);
        this.setState({
            listItems: listItems,
        });
        return 0;
    };

    listItemDel = () => {
        let listItems = this.state.listItems;
        listItems.pop();
        this.setState({
            listItems: listItems,
        });
        return 0;
    };
    //TODO: getting problems with the delete method.
    deleteDone = () => {
        let unfinished = this.state.listItems;
        for(let i = 0; i < this.state.listItems.length; i++){
            for(let j = 0; j < this.state.checkedItems.length; j++){
                if(!(this.state.checkedItems[j] === i)){
                    unfinished.push()
                }
            }
        }
        this.setState({
            listItems: unfinished,
            checkedItems:[]
        });
    };

    render() {
        let rend = <h1>{checkListText.error}</h1>;

        this.state.listItems.length === 0 ? rend = <h1>{checkListText.noTasks}</h1> :
            rend =
                (
                    <ul className={classes.TaskList}>
                        {this.state.listItems.map((item) => (item))}
                    </ul>
                );

        return (
            <div className={classes.CheckList}>
                {rend}
                <div className={classes.Buttons}>
                    <button className={classes.add} onClick={this.listItemAdded}>{checkListText.addButtonText}</button>
                    <button className={classes.del} onClick={this.listItemDel}>{checkListText.delButtonText}</button>
                    <button className={classes.del} onClick={this.deleteDone}>{checkListText.deleteSpecified}</button>
                </div>
            </div>
        )
    }
}

export default CheckList