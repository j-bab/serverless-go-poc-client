import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import React from "react";
import Notes from "./containers/Notes";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function App() {

    return <div className="App">
        <Container fluid>
            <Row>
                <Col sm={3}/>
                <Col>
                    <h2 className="text-center">Notes client</h2>
                    <h4 className="text-center"> for serverless Go Api</h4>
                        <hr/>
                    <Notes/>
                </Col>
                <Col sm={3}/>
            </Row>
        </Container>
    </div>;
}

export default App;
