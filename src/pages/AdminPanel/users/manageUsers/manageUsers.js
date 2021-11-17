import React, { useState } from "react";
import { Form, Row, Button, Col, Table} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import '../../style.css'


export const ChangeInfo = () => {
    const {info} = useSelector((state) => state.userManagement)
    
    const infos = {email:'', name:'', phone:'', address:'', company:'', city:'', state:''}
    
    const [val, setVal] = useState(infos) 
    const params = useParams()
    const history = useHistory()

    console.log(params);
    console.log(history,'history');
    const mailChange = (e) => {
        const { name, value } = e.target;
        setVal({ ...val, [name]:value })
        console.log(val.email);
        console.log(val.name);
    }
	return (
        <>
		<div style={{margin:"0 auto", justifyContent:"center", borderRadius:'10px', width:'65%', height:'auto'}}>
        <h1 style={{color:'gray'}}>Manage {info.name}'s info</h1>
			<Form className='form' style={{margin:'0 auto'}}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                name='email'
                type="email" 
                placeholder="Enter email"  
                value={val.email} 
                onChange={mailChange}
            />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control 
                name='name'
                type="user" 
                placeholder="name" 
                value={val.name}
                onChange={mailChange}
            />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
                name='phone'
                type="phone" 
                placeholder="phone" 
                value={val.phone}
                onChange={mailChange}
            />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control 
                name='address'
                value={val.address}
                placeholder="1234 Main St"
                onChange={mailChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Company</Form.Label>
            <Form.Control 
                name='company'
                value={val.company}
                onChange={mailChange}
                placeholder="Apartment, studio, or floor" 
            />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control 
                name='city'
                onChange={mailChange}
                value={val.city}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control 
                name='state'
                onChange={mailChange}
                value={val.state}
                />    
            </Form.Group>

        </Row>

        <Button variant="dark" type="submit">
            Submit
        </Button>
        </Form>

        <Table striped bordered hover size="sm" style={{marginTop:'20px', minHeight:'75px'}}>
            <thead>
                <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Company</th>
                <th>City</th>
                <th>State</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{val.email}</td>
                    <td>{val.name}</td>
                    <td>{val.phone}</td>
                    <td>{val.address}</td>
                    <td>{val.company}</td>
                    <td>{val.city}</td>
                    <td>{val.state}</td>
                </tr>
            </tbody>
        </Table>
		</div>
        </>
	);
}

