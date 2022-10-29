import React, { Component } from "react";
import {Nav, Navbar, NavDropdown, Form, InputGroup, Button} from 'react-bootstrap';
import { BsSearch, BsBasket, BsPersonCircle } from "react-icons/bs";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Navbar bg="light" expand="lg" className="p-2">
            <Navbar.Brand href="">Juneled Eats</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link href="">Inicio</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Restaurantes">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>                        
                    <NavDropdown title="Categorias">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                    <InputGroup className="ms-5">
                        <Form.Control placeholder="Buscar"/>
                        <Button variant="outline-primary"> <BsSearch/> Buscar </Button>
                    </InputGroup>
                    <Button href="" className="ms-5"><BsBasket/></Button>
                    <Button href="" className="ms-2 me-2"><BsPersonCircle/></Button>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
