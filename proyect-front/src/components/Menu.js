import {Component,useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Button, Modal, Container, Form } from 'react-bootstrap';
import { AiFillStar} from 'react-icons/ai';

function DishDetail(props) {
  return (
    <>
      <Modal show={true} centered size='xl' >
        <Modal.Header>
          <Modal.Title>Hamburguesa - McDonals</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex'>
            <Card.Img src="/images/comidas/1.jpg" className='rounded-3'></Card.Img>
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                <Card.Subtitle>Hamburguesa sencilla 100% carne de res (115g) con tomate y lechuga. *Foto incluye adiciones con costo</Card.Subtitle>
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
                            <h5>$50.000</h5>
                        </Container>

                    </Container>


                </Container>
                
                


            </Container>
            


        </Modal.Body>
        <Modal.Footer>
            <div className='me-5'><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar><AiFillStar color='red'></AiFillStar> Popular</div>
          <Button variant="success" onClick={props.toggleModal}>Comprar</Button>
          <Button variant="primary" onClick={props.toggleModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


class Menu extends Component {  

    constructor(props) {
        super(props);
        this.state = { 
            showModal:false
         };
         this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({showModal:!this.state.showModal});
    }
    render() { 
        return ( 

            <div className='container' style={{ marginTop: '6rem' }}>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem active>Todos</BreadcrumbItem>
                    </Breadcrumb >
                </div>
                {this.state.showModal?
                <DishDetail toggleModal={this.toggleModal}></DishDetail>
                :null
                }

                <div className='container d-flex flex-wrap justify-content-evenly'>
                    <Card style={{ width: '18rem' }} className="mt-5" onClick={this.toggleModal}>
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="mt-5">
                        <Card.Img variant="top" src="/images/comidas/1.jpg" alt='1' className="rounded-5"/>
                        <Card.Body>
                            <Card.Title>Hamburguesa</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Title>$ 20.000</Card.Title>
                        </Card.Body>
                    </Card>

                </div>


            </div>

         );
    }
}
 
export default Menu;