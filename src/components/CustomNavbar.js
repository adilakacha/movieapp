import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react'
import ReactStars from "react-rating-stars-component";


function CustomNavbar({setText,setRate}) {
  
    const handleChange=(e) => {
       setText(e.target.value)
    }
    const ratingChanged = (newRating) => {
        setRate(newRating)
      };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={true}
    onChange={ratingChanged}
  />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
         
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
