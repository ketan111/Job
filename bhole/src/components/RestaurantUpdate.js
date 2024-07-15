import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const RestaurantUpdate = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({
        name: null,
        email: null,
        rating: null,
        address: null
    });

    useEffect(() => {
        fetch(`http://localhost:3000/restaurant/${id}`)
            .then(resp => resp.json())
            .then(result => {
                if (result) {
                    setUpdate({
                        name: result.name,
                        email: result.email,
                        rating: result.rating,
                        address: result.address
                    });
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const updateHandle = e => {
        e.preventDefault();
        fetch(`http://localhost:3000/restaurant/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(resp => resp.json())
        .then(result => {
            console.log('Update successful:', result);
            // You might want to handle success feedback here
        })
        .catch(error => console.error('Error updating data:', error));
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Restaurant Update</h2>
            <Container className="mt-5">
                <Row>
                    <Col md={{ offset: 5 }}>
                        <Form onSubmit={updateHandle}>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={update.name || ''}
                                onChange={e => setUpdate({ ...update, name: e.target.value })}
                            /><br /><br />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={update.email || ''}
                                onChange={e => setUpdate({ ...update, email: e.target.value })}
                            /><br /><br />
                            <input
                                type="text"
                                placeholder="Rating"
                                name="rating"
                                value={update.rating || ''}
                                onChange={e => setUpdate({ ...update, rating: e.target.value })}
                            /><br /><br />
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={update.address || ''}
                                onChange={e => setUpdate({ ...update, address: e.target.value })}
                            /><br /><br />
                            <input type="submit" value="Update" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RestaurantUpdate;
