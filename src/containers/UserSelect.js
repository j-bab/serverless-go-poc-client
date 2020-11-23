import {Component} from 'react';
import PropTypes from 'prop-types';
import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

export default class UserSelect extends Component {
    static propTypes = {
        onSwitch: PropTypes.func.isRequired,
        users: PropTypes.arrayOf(PropTypes.object).isRequired,
        currentUser: PropTypes.shape({
            userId: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),
        isLoading: PropTypes.bool.isRequired,
    };


    render() {

        let userList = this.props.users.map( (user)  => {
            return <NavDropdown.Item onClick={()=>this.props.onSwitch(user.userId)} key={user.userId}>{user.name}</NavDropdown.Item>;
        });

        return this.props.isLoading ? <Spinner animation="border"/> :
                <NavDropdown title="Change User" id="nav-dropdown">
                    {userList}
                </NavDropdown>
    }
}