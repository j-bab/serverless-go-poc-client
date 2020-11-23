import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import React from "react";
import Notes from "./containers/Notes";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {UsersContext} from "./UsersContext";

function App() {
    let users = [
        {userId: "1", name: "John"},
        {userId: "2", name: "James"},
        {userId: "3", name: "Dan"},
    ];
    return <div className="App">
        <Container fluid>
            <Row>
                <UsersContext.Provider value={users}>
                    <Col sm={3}/>
                    <Col>
                        <h2 className="text-center">Notes client</h2>
                        <h4 className="text-center"> for serverless Go Api</h4>
                        <hr/>
                        <Notes defaultUserId="1"/>
                    </Col>
                    <Col sm={3}/>
                </UsersContext.Provider>
            </Row>
        </Container>
    </div>;
}

export default App;
