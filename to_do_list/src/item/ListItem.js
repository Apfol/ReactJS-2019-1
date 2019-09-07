import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './ListItem.css'

class ListItem extends Component {
    onChangeItems = () => {
        this.props.onDeleteItem(this.props.position);
    }
    render() {
        return (
            <div className={styles.item}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>{this.props.position}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Text input with checkbox" />
                    <InputGroup.Append>
                        <InputGroup.Checkbox />
                        <Button onClick={this.onChangeItems} variant="outline-danger">Delete</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default ListItem;