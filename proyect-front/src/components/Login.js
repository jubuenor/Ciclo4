import {Component,React, createRef} from 'react';
import {Button, Container} from 'react-bootstrap';
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
            <div className='container-fluid mt-5'>
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
                                }}
                                onExit={()=>{
                                    this.setState({show:false})
                                }}>
                                    <div ref={itemRef}>
                                    {
                                    this.state.toggle?
                                    <RegisterForm update={false}></RegisterForm>
                                    :
                                    <LoginForm isLogged={this.props.isLogged}></LoginForm>
                                    }
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                        <Container className='mt-5 d-flex justify-content-center'>
                            <Button variant="success" className="mt-auto mb-auto p-1 me-2" onClick={()=>{this.setState({show:true})}}>{this.state.toggle?"Ingresa aquí":"Registrate aquí"}</Button>    
                        </Container>
                        
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Login;