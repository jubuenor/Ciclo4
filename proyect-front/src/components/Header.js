import React, { Component } from "react";
import {Nav, Navbar, NavDropdown, Form, InputGroup, Button} from 'react-bootstrap';
import { BsSearch, BsBasket, BsPersonCircle, BsDoorOpen} from "react-icons/bs";
import {request} from './helper';
import {Link} from 'react-router-dom';
import {logout} from './helper';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        restaurants:[],
        busqueda:""
    };
    this.getrestaurants=this.getRestaurants.bind(this);
  }
  getRestaurants(){
    if(this.state.restaurants.length===0){
        request.get('/restaurant')
        .then((response)=>{
            this.setState({restaurants:response.data});
        }).catch((err)=>{
            console.log(err);
        });
    }
    
  }

  render() {
    const restaurant=this.state.restaurants.map((restaurant)=>{
        return (
            <Link to="/home" className="dropdown-item" key={restaurant._id} onClick={()=>this.props.setRestaurant(restaurant._id)}>{restaurant.nombre}</Link>
        );
    });
    return (
        <Navbar expand="lg" className="p-2 nav-bg fixed-top">
            <Navbar.Brand href="">
                <img src="/images/logonav.png" alt='logonav' width="160px" className="rounded-2 border border-dark"></img>
            </Navbar.Brand>
            
            {
                this.props.logged?
                <>
                {this.getRestaurants()}
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to="/home" className="nav-link">Inicio</Link>
                        </Nav.Item>
                        <NavDropdown title="Restaurantes">  
                            {restaurant}         
                        </NavDropdown>             
                        
                    </Nav>
                </Navbar.Collapse>
                <InputGroup className="ms-5 me-5">
                    <Form.Control placeholder="Buscar" onChange={(u)=>this.setState({busqueda:u.target.value})}/>
                    <Link to="/home" className="btn border border-dark" onClick={()=>this.props.buscar(this.state.busqueda)}><BsSearch/> Buscar</Link>
                    
                </InputGroup>
                <Nav className="me-4">
                    <Link to="/cart" className=" btn ms-5 border border-dark"><BsBasket/></Link>
                    <NavDropdown title="Usuario" className="ms-2 rounded border border-dark">
                        <NavDropdown.Item href=""><BsPersonCircle/> Mi perfil</NavDropdown.Item>
                        <NavDropdown.Item href="" onClick={logout}><BsDoorOpen/> Cerrar sesion</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </>
                
                :null
            }
            
            
            
        </Navbar>
    );
  }
}

export default Header;
