import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './ListItem.css'

const ListItem = () => {
    return (
        <div className={styles.item}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
                <InputGroup.Append>
                    <Button variant="danger">Eliminar</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default ListItem;