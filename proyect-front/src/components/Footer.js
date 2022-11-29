import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className='nav-bg' style={{ marginTop: '6rem' }}>
                <div className='container-fluid'>
                    <div className='row p-5'>
                        <div className='col-xs-12-col-md-6 col-lg-3'>
                            <img src='/images/logofoot.png' alt='logofoot' width="200px" style={{borderRadius: 100}} className="border border-dark"></img>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-5"> 
                            <div className="mb-2 ms-2">
                                <Nav.Link className='text-black'>Juan Andres Bueno Ramirez</Nav.Link>
                            </div>
                            <div className="mb-2 ms-2">
                                <Nav.Link className='text-black'>Juan Guillermo Ruiz Álvarez</Nav.Link>
                            </div>
                            <div className="mb-2 ms-2">
                                <Nav.Link className='text-black'>Edwin Garzón Romero </Nav.Link>
                            </div>
                            <div className="mb-2 ms-2">
                                <Nav.Link className='text-black'>Nestor Fabian Tafur Gonzales</Nav.Link>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4"> 
                            <p className="h5 mb-3">Redes</p>
                            <div className="mb-2 ms-2">
                                <BsFacebook> </BsFacebook> Facebook
                            </div>
                            <div className="mb-2 ms-2">
                                <BsInstagram> </BsInstagram> Instagram 
                            </div>
                            <div className="mb-2 ms-2">
                                <BsTwitter> </BsTwitter> Twitter 
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;