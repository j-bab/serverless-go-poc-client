import {Component} from 'react';
import React from "react";
import PropTypes from 'prop-types';
import UserSelect from "./UserSelect";
import NoteList from "./NoteList";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/esm/Nav";
import NoteCreateModal from "../containers/NoteCreateModal";
import {invokeApi} from "../lib/api";
import {UsersContext} from "../UsersContext";

export default class Notes extends Component {

    static propTypes = {
        defaultUserId: PropTypes.string.isRequired,
        users: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    static contextType = UsersContext;

    constructor(props) {
        super(props);

        this.state = {
            showAddModal: false,
            isLoading: true,
            userId: false,
            notes: []
        };
        this.setUserId = this.setUserId.bind(this);
    }

    async componentDidMount() {
        this.setUserId(this.props.defaultUserId);
    }

    async addNewNote(text) {
        let userId = this.state.userId;
        this.setModalShow(false);
        this.setState({isLoading: true});
        try {
            await invokeApi({method: "POST", path: "/notes/" + encodeURIComponent(userId), body: {"body": text}});
            await this.setUserId(userId)
        } catch (e) {
            alert(e);
        }
        this.setState({isLoading: false});
    }

    setModalShow(showAddModal) {
        this.setState({showAddModal});
    }

    async setUserId(userId) {
        this.setState({isLoading: true, userId});
        try {
            const notes = await invokeApi({path: "/notes/" + encodeURIComponent(userId)});
            this.setState({notes});
        } catch (e) {
            alert(e);
        }
        this.setState({isLoading: false});
    }


    render() {
        let currentUser = this.context.filter(obj => {
            return obj.userId === this.state.userId
        })[0];

        return <React.Fragment>
            <Row>
                <Col sm={8} className="text-left">
                    {
                        currentUser ?
                            <strong>{this.state.isLoading ? "Loading " : "Found " + this.state.notes.length} notes
                                for {currentUser.name}</strong>
                            : null
                    }
                </Col>
                <Col sm={4}>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => this.setModalShow(true)}>
                                Add Note
                            </Nav.Link>
                        </Nav.Item>
                        <UserSelect isLoading={this.state.isLoading} onSwitch={(userId) => {
                            this.setUserId(userId)
                        }}/>
                    </Nav>
                    <NoteCreateModal show={this.state.showAddModal}
                                     onHide={() => this.setModalShow(false)}
                                     onSave={(text) => this.addNewNote(text)}/>
                </Col>
            </Row>

            <NoteList notes={this.state.notes}
                      isBlurred={(this.state.showAddModal || this.state.isLoading)}/>

        </React.Fragment>
    }
}