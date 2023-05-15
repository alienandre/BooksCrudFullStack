import React, { useRef, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        price: ''
    });

    const nameElement = useRef(null);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:8080/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                console.log('Form data saved successfully');
                alert('User saved')
                setFormData({
                    name: '',
                    price: ''
                });
            })
            .catch(error => {
                console.error('Error saving data:', error);
                alert('Error: unable to save user')
            })

        setFormData({
            name: '',
            price: ''
        });

        nameElement.current.focus();
    }

    return (
        <Container>
        <Row className="vh-100 d-flex justify-content-center ">
          <Col md={8} lg={6} xs={12}>
            <Card bg='secondary'>
              <Card.Body>
                <div className="mb-3 mt-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-white">Register Book</h2>
                  <p className=" mb-5 text-white">Please enter name and price of book to register it to the system</p>
                  <Form className="mb-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-white" controlId="formName">
                      <Form.Label className="text-center">
                        Name
                      </Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          name='name'
                          value={formData.name}
                          autoFocus
                          ref={nameElement}
                          onChange={handleInputChange}
                          />
                    </Form.Group>
  
                    <Form.Group className="mb-3 text-white" controlId="formPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control 
                          type="number"
                          placeholder="Price"
                          name='price'
                          value={formData.price}
                          onChange={handleInputChange} 
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="dark" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}