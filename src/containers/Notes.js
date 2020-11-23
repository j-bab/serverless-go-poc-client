import {Component} from 'react';
import React from "react";
import UserSelect from "./UserSelect";
import NoteList from "./NoteList";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/esm/Nav";
import NoteCreateModal from "../containers/NoteCreateModal";

export default class Notes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAddModal: false,
            isLoading: false,
            userId: "2",
        };
    }

    addNewNote(text) {
        this.setModalShow(false)
        console.log(text);
    }

    setModalShow(showAddModal) {
        this.setState({showAddModal});
    }


    render() {
        let users = this.props.users;
        let currentUser = users.filter(obj => {
            return obj.userId === this.state.userId
        })[0];

        let notes = [
            {
                userId: "1",
                timestamp: 166086661,
                body: "sdfasfsa"
            },
            {
                userId: "1",
                timestamp: 1606086661,
                body: "sdfafd sdfdsf sdfs sfsa"
            }
        ];

        return <React.Fragment>
            <Row>
                <Col sm={8} className="text-left">
                    <strong>{this.state.isLoading ? "Loading " : "Found " + notes.length} notes
                        for {currentUser.name}</strong>
                </Col>
                <Col sm={4}>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => this.setModalShow(true)}>
                                Add Note
                            </Nav.Link>
                        </Nav.Item>
                        <UserSelect users={users} isLoading={this.state.isLoading}/>
                    </Nav>
                    <NoteCreateModal show={this.state.showAddModal}
                                     onHide={() => this.setModalShow(false)}
                                     onSave={(text) => this.addNewNote(text)}/>
                </Col>
            </Row>

            <NoteList users={users} notes={notes} isBlurred={(this.state.showAddModal || this.state.isLoading)}/>

        </React.Fragment>
    }
}