import {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Card} from 'react-bootstrap';




class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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

                <div className='container d-flex flex-wrap justify-content-evenly'>
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