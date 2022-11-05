import {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <>
            <Nav className='nav-bg p-2'>
                <Navbar.Brand href="" className='m-auto'>
                    <img src="/images/logonav.png" alt='logonav' width="240px" className="rounded-2 border border-dark"></img>
                </Navbar.Brand>
            </Nav>
            </>
         );
    }
}
 
export default Login;