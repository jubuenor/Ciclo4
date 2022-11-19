import React, { Component } from "react";
import {Nav, Navbar, NavDropdown, Form, InputGroup, Button} from 'react-bootstrap';
import { BsSearch, BsBasket, BsPersonCircle, BsDoorOpen} from "react-icons/bs";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.logged);
    return (
        <Navbar expand="lg" className="p-2 nav-bg fixed-top">
            <Navbar.Brand href="">
                <img src="/images/logonav.png" alt='logonav' width="160px" className="rounded-2 border border-dark"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link href="">Inicio</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Restaurantes">
                        <NavDropdown.Item href="">Action</NavDropdown.Item>
                        <NavDropdown.Item href="">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="">Something</NavDropdown.Item>
                    </NavDropdown>                        
                    <NavDropdown title="Categorias">
                        <NavDropdown.Item href="">Action</NavDropdown.Item>
                        <NavDropdown.Item href="">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="">Something</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <InputGroup className="ms-5 me-5">
                <Form.Control placeholder="Buscar"/>
                <Button variant="outline-secondary"> <BsSearch/> Buscar </Button>
            </InputGroup>
            {
                this.props.logged?
                <Nav className="me-4">
                    <Button href="" className="ms-5" variant="outline-secondary"><BsBasket/></Button>
                    <NavDropdown title="Usuario" className="ms-2 rounded border border-dark">
                        <NavDropdown.Item href=""><BsPersonCircle/> Mi perfil</NavDropdown.Item>
                        <NavDropdown.Item href=""><BsDoorOpen/> Cerrar sesion</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
            }
            
            
            
        </Navbar>
    );
  }
}

export default Header;
