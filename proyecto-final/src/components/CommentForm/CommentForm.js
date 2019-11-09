import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/';
import { connect } from 'react-redux';
import classes from './CommentForm.css';

class CommentForm extends Component {

    state = {
        newCommentInfo: {
            author: "",
            body: "",
            title: "",
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            newCommentInfo: nextState.newCommentInfo,
        });
    }

    render() {
        return (
            <div>
                <Form className={classes.form} > 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Título del comentario</Form.Label>
                        <Form.Control placeholder="Introduce el título" onChange={(event) => { this.updateCommentInfo(event, 'title') }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Experiencia</Form.Label>
                        <Form.Control style={{ paddingBottom: '100px', paddingTop: '20px' }} placeholder="Dinos cómo te pareció" onChange={(event) => { this.updateCommentInfo(event, 'body') }} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.submitCommentForm} >
                        Comentar
                    </Button>
                </Form>
            </div>
        )
    }

    updateCommentInfo = (event, type) => {
        var updatedCommentInfo = {
            ...this.state
        }

        updatedCommentInfo[type] = event.target.value;

        this.setState({
            author: updatedCommentInfo.author,
            title: updatedCommentInfo.title,
            body: updatedCommentInfo.body
        });
    }

    submitCommentForm = () => {
        const commentData = {
            author: this.props.userLoggedIn.userName,
            body: this.state.body,
            title: this.state.title
        }

        this.props.onSaveComment(commentData, this.props.idPlace);
    }
}

const mapStateToProps = state => {
    return {
        userLoggedIn: state.authenticationStore.userLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveComment: (commentData, idPlace) => dispatch(
            actionCreators.saveComment(commentData, idPlace)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);