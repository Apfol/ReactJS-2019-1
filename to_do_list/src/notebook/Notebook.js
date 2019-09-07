import React, { Component } from 'react';
import ListItem from '../item/ListItem';
import Title from '../header/Title';
import { Button, Card } from 'react-bootstrap';
import styles from './Notebook.css';

class Notebook extends Component {

    itemList = [1];
    index = 0;

    constructor(props) {
        super(props);
        this.state = {
            items: this.itemList,
        }
    }

    handleClick = () => {
        this.itemList.push(this.itemList[this.itemList.length - 1] + 1);
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

    render() {
        return (
            <Card className={styles.container}>
                <Card.Body>
                    <header>
                        <Title />
                    </header>
                    {this.state.items.map((item) =>
                        <ListItem position={item} onDeleteItem={this.onDeleteItem.bind(this)} />
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