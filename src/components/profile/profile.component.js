import React from "react";
import { ListGroup, Card, ListGroupItem, Form, Row, Col, Button } from "react-bootstrap";
import './style.css'
import man from'../../assets/img/man.png'
import woman from'../../assets/img/woman.png'

export const ProfilePage = ({info}) => {
        return(
        <>
        <div className="profileContainer">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={info.gender == 'Man'?man:woman} />
            <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Text>
                Some quick example text 
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Phone - 0{info.phone}</ListGroup.Item>
                <ListGroup.Item>Adress - {info.address}</ListGroup.Item>
                <ListGroup.Item>Email - {info.email}</ListGroup.Item>
                <ListGroupItem>Gender - {info.gender}</ListGroupItem>
                <ListGroupItem>Position</ListGroupItem>
                <ListGroupItem>Position</ListGroupItem>
                <ListGroupItem>Position</ListGroupItem>
            </ListGroup>
            
        </Card>

        <Form className='form'>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="user" placeholder="name" />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control />    
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="dark" type="submit">
            Submit
        </Button>
        </Form>

        
        </div>



        

        </>
    )
}