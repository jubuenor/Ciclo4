import {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import app from '../app.json';

const {APIHOST}=app;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuario:'',
            pass:'',
         };
         this.login=this.login.bind(this);
    }
    login(){
        // event.preventDefault();

        console.log(`user: ${this.state.usuario} pass: ${this.state.pass}`);
        axios.post(`${APIHOST}/users/login/`,{
            usuario: this.state.usuario,
            pass: this.state.pass,
        }
        ).then((response)=>{
            response.data.token!==null?
            console.log(response):
            this.setState({showError:true})
        }).catch((error)=>{
            console.log(error);
        });
    }
    render() { 
        return (

            <div>
            <h2 className='text-center'>Ingreso</h2>
            <Form onSubmit={this.login}>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su usuario" id="user" onChange={(u)=>this.setState({usuario:u.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" id="pass" onChange={(p)=>this.setState({pass:p.target.value})}/>
                </Form.Group>
                <p className={this.state.showError?'text-danger':'text-danger d-none'}>Usuario o contraseña incorrectos.</p>
                <div className='d-grid'>
                <Button variant="secondary" onClick={this.login}>Ingresar</Button>
                </div>
            </Form>
            </div> 
            );
    }
}
 
export default LoginForm;