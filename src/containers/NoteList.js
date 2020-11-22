import {Component} from 'react';
import PropTypes from 'prop-types';
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Note from "../components/Note";

export default class NoteList extends Component {
    static propTypes = {
        notes: PropTypes.arrayOf(PropTypes.object).isRequired,
        currentUser: PropTypes.shape({
            userId: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),
    };

    render() {

        let notesList = this.props.notes.map(function (note, i) {
            return <Note key={i} {...note} />;
        });


        return <React.Fragment>
            <Row>
                <Col sm={12}>
                </Col>
            </Row>
            {notesList}
        </React.Fragment>
    }
}