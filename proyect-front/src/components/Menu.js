import {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Button, Modal, Container, Form } from 'react-bootstrap';
import { AiFillStar} from 'react-icons/ai';
import {request} from './helper';
import Loading from './loading';



function DishDetail({props,toggleModal}) {

    console.log(props);
    return (
        <Modal show={true} centered size='xl'>
            <Modal.Header>
            <Modal.Title>{props.nombre} - {props.restaurante}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex'>
                <img src={`/images/comidas/${props._id}.jpg`} className='rounded-3' width={546} height={546} alt={props._id}></img>
                <Container className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Subtitle>{props.descripcion}</Card.Subtitle>
                    <Container className='mt-5'>
                        <Form.Label>¿Como quieres que te llegue?</Form.Label>
                        <Form.Group className='mb-5 container-fluid'>
                            <Form.Control as='textarea' placeholder='¿Sin tomate?' rows={4}></Form.Control>
                        </Form.Group>
                        <Container className='d-flex'>
                            <Container>
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Group className='mb-5 d-flex'>
                                    <Form.Control as='input' type='number' min={1} defaultValue={1} rows={4}></Form.Control>
                                </Form.Group>
                            </Container>
                            <Container>
                                <Form.Label>Precio</Form.Label>
                                <h5>{props.precio}</h5>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className='me-5'><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar> Popular</div>
            <Button variant="success" onClick={toggleModal}>Comprar</Button>
            <Button variant="primary" onClick={toggleModal}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

function RenderProductItem({props,toggleModal}){

    return(
        // onClick={this.toggleModal}
            <Card style={{ width: '18rem' }} className="mt-5" onClick={()=>toggleModal(props)}>
                <Card.Img variant="top" src={`/images/comidas/${props._id}.jpg`} alt='1' className="rounded-5"/>
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                    {props.descripcion}
                    </Card.Text>
                    {/* <Card.Title>$ 20.000</Card.Title> */}
                </Card.Body>
            </Card>
    );
}

class Menu extends Component {  

    constructor(props) {
        super(props);
        this.state = { 
            products:[],
            showModal:false,
            productDetail:{},
         };
         this.toggleModal=this.toggleModal.bind(this);
         this.getProducts=this.getProducts.bind(this);
    }
    toggleModal(product){
        this.setState({showModal:!this.state.showModal});
        this.setState({productDetail:product})
    }
    componentDidMount(){
        this.getProducts();
    }
    getProducts(){    
        request.get('/products')
        .then((response)=>{
            this.setState({products:response.data});
        }).catch((err)=>{
            console.log(err);
        });
    }
    render() { 
        const menu=this.state.products.map((product)=>{
            return(
                <RenderProductItem props={product} key={product._id} toggleModal={this.toggleModal}></RenderProductItem>
            );
        });
        return ( 

            <div className='container' style={{ marginTop: '6rem' }}>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem active>Todos</BreadcrumbItem>
                    </Breadcrumb >
                </div>
                {this.state.showModal?
                <DishDetail toggleModal={this.toggleModal} props={this.state.productDetail}></DishDetail>
                :null
                }
                
                <Loading show={this.state.products.length>0?false:true}></Loading>
                <div className='container d-flex flex-wrap justify-content-evenly'>
                    {menu}
                </div>
                


            </div>

         );
    }
}
 
export default Menu;