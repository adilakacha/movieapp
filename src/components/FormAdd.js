import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormAdd() {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>decription</Form.Label>
      <Form.Control type="text" placeholder="description" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>rating</Form.Label>
      <Form.Control type="number" placeholder="number" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>poster</Form.Label>
      <Form.Control type="text" placeholder="image" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form> 
  
  )
}

export default FormAdd
