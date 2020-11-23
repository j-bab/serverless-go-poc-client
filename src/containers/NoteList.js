import {Component} from 'react';
import PropTypes from 'prop-types';
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Note from "../components/Note";

export default class NoteList extends Component {
    static propTypes = {
        isBlurred: PropTypes.bool.isRequired,
        notes: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    render() {

        let notesList = this.props.notes.map( (note, i) => {
            note.userName = this.props.users.filter(obj => {
                return obj.userId === note.userId
            })[0].name;
            return <Note key={i} {...note} />;
        });

        let blur = this.props.isBlurred ? "8px" : 0;

        return <React.Fragment>
            <Row style={{"filter": "blur(" + blur + ")"}}>
                <Col sm={12}>
                    {notesList}
                </Col>
            </Row>
        </React.Fragment>
    }
}