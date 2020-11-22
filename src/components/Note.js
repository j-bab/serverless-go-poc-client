import React from "react";
import Moment from 'react-moment';
import Card from "react-bootstrap/esm/Card";

export default ({
                    userId,
                    timestamp,
                    body
                }) =>
    <Card style={{ width: '100%' }}  border="secondary" className="m-3">
        <Card.Body >
            <Card.Title>Added: <Moment fromNow parse="X">{timestamp}</Moment></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">by Dan</Card.Subtitle>
            <Card.Text>
                "{body}"
            </Card.Text>
            <Card.Link href="#">Delete Note</Card.Link>
        </Card.Body>
    </Card>