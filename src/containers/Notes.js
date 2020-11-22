import {Component} from 'react';
import React from "react";
import NoteMenu from "./NoteMenu";
import NoteList from "./NoteList";
import Spinner from "react-bootstrap/esm/Spinner";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default class Notes extends Component {

    render() {

        let users = [
            {userId: "1", name: "John"},
            {userId: "2", name: "James"},
            {userId: "3", name: "Dan"},
        ];

        let isLoading = false;

        let userId = "3";

        let currentUser = users.filter(obj => {
            return obj.userId === userId
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
                <Col sm={8}  className="text-left">
                    <strong>{isLoading ? "Loading " : "Found " + notes.length} notes for {currentUser.name}</strong>
                </Col>
                <Col sm={4}>
                    <NoteMenu users={users} currentUser={currentUser} isLoading={isLoading} />
                </Col>
            </Row>

        {isLoading ?
            <Spinner animation="border"/>
            :
            <React.Fragment>
                <NoteList notes={notes} isLoading={false}/>

            </React.Fragment>
        }
        </React.Fragment>
    }
}