import {Component} from 'react';
import PropTypes from 'prop-types';
import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

export default class NoteMenu extends Component {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.object).isRequired,
        currentUser: PropTypes.shape({
            userId: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),
        isLoading: PropTypes.bool.isRequired,
    };


    render() {

        let userList = this.props.users.map(function (user) {
            return <NavDropdown.Item href="#/" key={user.userId}>{user.name}</NavDropdown.Item>;
        });

        return this.props.isLoading ? <Spinner animation="border"/> :
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        Add Note
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Change User" id="nav-dropdown">
                    {userList}
                </NavDropdown>
            </Nav>
    }
}