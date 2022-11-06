import {Component,React, createRef} from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import {TransitionGroup,CSSTransition} from 'react-transition-group';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggle:false,
            show:false,
         };
    }
    render() { 
        const itemRef = createRef(null);
        
        return ( 
            <>
            <Nav className='nav-bg'>
                <Navbar.Brand href="" className='m-auto'>
                    <img src="/images/logonav.png" alt='logonav' width="200px" className="rounded-2 border border-dark"></img>
                </Navbar.Brand>
                <Button variant="warning" className="mt-auto mb-auto p-1 me-2" onClick={()=>{this.setState({show:true})}}>{this.state.toggle?"Ingresar":"Registrarse"}</Button>
            </Nav>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-12 col-md-12 col-lg-12 col-xl-6'>
                        <div className='container mt-5' >
                            <img src='/images/login.jpg' alt='login' className='rounded-3 border border-dark' style={{maxWidth:"800px",height:"auto",width:"100%"}} ></img>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-12 col-lg-12 col-xl-4 container'>
                        <div className='pt-5'>
                            
                        <TransitionGroup>

                            <CSSTransition timeout={300}  key={this.state.show} classNames="show" mountOnEnter unmountOnExit  nodeRef={itemRef}
                            onEntered={()=>{
                                this.setState({toggle:!this.state.toggle});
                                console.log("a");
                            }}
                            onExit={()=>{
                                this.setState({show:false})
                                console.log("aa");
                            }}>
                                <div ref={itemRef}>
                                {
                                this.state.toggle?
                                <RegisterForm></RegisterForm>
                                :
                                <LoginForm ></LoginForm>
                                }
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Login;