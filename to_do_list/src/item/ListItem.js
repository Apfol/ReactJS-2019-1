import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './ListItem.css'

const ListItem = (props) => {
    return (
        <div className={styles.item}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>{props.position}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
                <InputGroup.Append>
                    <InputGroup.Checkbox />
                    <Button variant="outline-danger">Delete</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default ListItem;