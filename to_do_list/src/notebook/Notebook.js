import React, { Component } from 'react';
import ListItem from '../item/ListItem';
import Title from '../header/Title';
import { Button, Card } from 'react-bootstrap';
import styles from './Notebook.css';

class Notebook extends Component {

    itemList = [{
        id: 1,
        isChecked: false,
        content: ""
    },]
    index = 0;

    constructor(props) {
        super(props);
        this.state = {
            items: this.itemList,
        }
    }

    handleClick = () => {
        //this.itemList.push(this.itemList[this.itemList.length - 1] + 1);
        this.itemList.push({
            id: this.itemList[this.itemList.length - 1].id + 1,
            isChecked: false,
            content: "",
        });
        this.setState({
            items: this.itemList,
        });
    }

    onDeleteItem(itemPosition) {
        this.index = this.itemList.indexOf(itemPosition);
        this.itemList.splice(this.index, 1);
        this.setState({
            items: this.itemList,
        });
    }

    handleChecked(itemPosition, isItemChecked) {
        this.index = this.itemList.findIndex(item => item.id == itemPosition);
        this.itemList[this.index].isChecked = isItemChecked;
        this.setState({
            items: this.itemList,
        });
    }

    handleContent(itemPosition, itemContent) {
        this.index = this.itemList.findIndex(item => item.id == itemPosition);
        this.itemList[this.index].content = itemContent;
        this.setState({
            items: this.itemList,
        });
    }

    render() {
        return (
            <Card className={styles.container}>
                <Card.Body>
                    <header>
                        <Title />
                    </header>
                    {this.state.items.map((item) =>
                        <ListItem
                            position={item.id}
                            isChecked={item.isChecked}
                            onDeleteItem={this.onDeleteItem.bind(this)}
                            handleChecked={this.handleChecked.bind(this)}
                            handleContent={this.handleContent.bind(this)} />
                    )}
                    <div className={styles.button} >
                        <Button variant="dark" onClick={this.handleClick}>Add Item</Button>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Notebook;