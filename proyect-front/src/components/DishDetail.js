import {Component} from 'react';
import {Card, Button, Modal, Container, Form } from 'react-bootstrap';
import {BsBasket} from "react-icons/bs";
import { AiFillStar} from 'react-icons/ai';
import {request} from './helper';
import {Link} from 'react-router-dom';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 });

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            precio:this.props.props.precio,
            cantidad:1,
            descripcion_cliente:""
         };
         this.setPrecio=this.setPrecio.bind(this);
         this.carrito=this.carrito.bind(this);
    }
    setPrecio(cant){
        this.setState({cantidad:cant});
        this.setState({precio:this.props.props.precio*cant});
    }
    carrito(){
        request.post('/sales',{
            id_usuario: this.props.user._id,
            id_producto: this.props.props._id,
            cantidad: this.state.cantidad,
            descripcion_cliente: this.state.descripcion_cliente,
            valor_total: this.state.precio,
            fecha: new Date().getDate()
        })
        .then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            console.log(err);
        });

    }
    
    render() { 
        return ( 
            <Modal show={true} centered size='xl'>
                <Modal.Header>
                <Modal.Title>{this.props.props.nombre} - {this.props.props.restaurante}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex'>
                    <img src={`/images/comidas/${this.props.props._id}.jpg`} className='rounded-3' width={546} height={546} alt={this.props.props._id}></img>
                    <Container className='d-flex flex-column align-items-center justify-content-center'>
                        <Card.Subtitle>{this.props.props.descripcion}</Card.Subtitle>
                        <Container className='mt-5'>
                            <Form.Label>¿Como quieres que te llegue?</Form.Label>
                            <Form.Group className='mb-5 container-fluid'>
                                <Form.Control as='textarea' placeholder='¿Sin tomate?' rows={4}  onChange={(u)=>this.setState({descripcion_cliente:u.target.value})}></Form.Control>
                            </Form.Group>
                            <Container className='d-flex'>
                                <Container>
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Group className='mb-5 d-flex'>
                                        <Form.Control as='input' type='number' min={1} defaultValue={1} rows={4} onChange={(u)=>this.setPrecio(u.target.value)}></Form.Control>
                                    </Form.Group>
                                </Container>
                                <Container>
                                    <Form.Label>Precio</Form.Label>
                                    <h5>{currency.format(this.state.precio)}</h5>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className='me-5'><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar> Popular</div>
                <Button onClick={this.carrito}><BsBasket/></Button>
                <Link to="/cart" className="btn btn-success" onClick={this.carrito}>Comprar</Link>
                <Button variant="secondary" onClick={this.props.toggleModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
         );
    }
}
 
export default DishDetail;