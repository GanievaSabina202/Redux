import React from 'react';
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { userData } from '../store/userSlice';

export function UserList() {
    const usersSelector = useSelector((state) => state.users.users)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(res => dispatch(userData(res)))
    }, [])

    return (
        <Container>
            <Row>
                {usersSelector.map((i) => (
                    <Col xs={12} md={2} lg={4}>
                        <Card className="mb-2">
                            <Card.Body>
                                <Card.Title>{i.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{i.email}</Card.Subtitle>
                                <Card.Text>{i.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
