import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Card from "react-bootstrap/esm/Card";
import {invokeApi} from "../lib/api";

export default class NoteList extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
    };


    constructor(props) {
        super(props);

        this.state = {
            isDeleting: false,
            deleted: false,
        };
        this.deleteNote = this.deleteNote.bind(this);
    }

    async deleteNote() {
        const {userId, timestamp} = this.props;
        this.setState({isDeleting: true});
        try {
            await invokeApi({
                method: "DELETE",
                path: "/notes/" + encodeURIComponent(userId) + "/" + encodeURIComponent(timestamp)
            });
            this.setState({deleted: true});
        } catch (e) {
            alert(e);
        }
        this.setState({isDeleting: false});
    }


    render() {
        const {isDeleting, deleted} = this.state;

        return deleted ? null : <Card style={{width: '100%'}} border="secondary" className="m-3">
            <Card.Body>
                <Card.Title>Added: <Moment fromNow parse="X">{this.props.timestamp}</Moment></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">by {this.props.userName}</Card.Subtitle>
                <Card.Text>
                    "{this.props.body}"
                </Card.Text>
                {isDeleting ?
                    <Card.Link>Deleting...</Card.Link>
                    :
                    <Card.Link onClick={this.deleteNote}>Delete Note</Card.Link>
                }
            </Card.Body>
        </Card>
    }
}