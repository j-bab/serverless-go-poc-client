import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import {Component} from 'react';
import PropTypes from 'prop-types';

export default class NoteCreateModal extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        onHide: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,

    };

    constructor(props) {
        super(props);
        this.state = {
            noteText: "",
        };
    }

    closeModal = () => {
        this.props.onHide();
        this.clearModal();
    };


    saveForm = () => {
        this.props.onSave(this.state.noteText);
        this.clearModal();
    };

    clearModal = () => {
        this.setState({noteText: ""});
    };


    render() {
        return <Modal
            show={this.props.show}
            onHide={this.closeModal}
            size="lg"
            aria-labelledby="addModal"
            centered
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Add a note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>What do you need to remember?</Form.Label>
                        <Form.Control as="textarea" rows={3} value={this.state.noteText} onChange={(e) => {
                            this.setState({noteText: e.target.value})
                        }}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.saveForm}>Save</Button>
            </Modal.Footer>
        </Modal>
    }
}



