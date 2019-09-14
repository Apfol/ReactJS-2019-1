import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './ListItem.css'

class ListItem extends Component {
    render() {
        return (
            <div className={styles.item}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>{this.props.position}</InputGroup.Text>
                        <InputGroup.Checkbox onChange={this.onChangeCheckbox} />
                    </InputGroup.Prepend>
                    <FormControl aria-label="Text input with checkbox" onChange={this.onChangeContent} />
                    <InputGroup.Append>
                        <Button onClick={this.onChangeItems} variant="danger">Delete</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
    onChangeItems = () => {
        this.props.onDeleteItem(this.props.position);
    }
    onChangeCheckbox = (evt) => {
        this.props.handleChecked(this.props.position, evt.target.checked);
    }
    onChangeContent= (evt) => {
        this.props.handleContent(this.props.position, evt.target.value);
    }
}

export default ListItem;