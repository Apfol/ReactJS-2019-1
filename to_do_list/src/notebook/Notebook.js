import React, { Component } from 'react';
import ListItem from '../item/ListItem';
import Title from '../header/Title';
import { Button } from 'react-bootstrap';
import styles from './Notebook.css';

class Notebook extends Component {

    itemList = [1, 2];

    constructor(props) {
        super(props);
        this.state = {
            items: this.itemList,
        }
    }

    handleClick = () => {
        this.itemList.push(this.itemList.length + 1);
        this.setState({
            items: this.itemList,
        });
    }

    render() {
        return (
            <div>
                <header>
                    <Title />
                </header>
                {this.state.items.map((item) =>
                    <ListItem position={item} />
                )}
                <div className={styles.button} >
                    <Button variant="dark" onClick={this.handleClick}>Add Item</Button>
                </div>
            </div>
        );
    }
}

export default Notebook;