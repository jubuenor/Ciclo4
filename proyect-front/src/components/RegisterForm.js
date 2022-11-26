import {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import app from '../app.json';
import axios from 'axios';

const {APIHOST}=app;

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:'',
            pass:'',
            nombre:'',
            apellido:'',
            email:'',
            saldo:'',
            tipo:'',
            showError:false,
        };
        this.register=this.register.bind(this);
    }
    register(){
        axios.post(`${APIHOST}/users/register`,{
            usuario:this.state.usuario,
            pass:this.state.pass,
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            email:this.state.email,
            saldo:this.state.saldo,
        }).then((response)=>{
            console.log(response);
        }).catch((response)=>{
            console.log(response);
        });


    }
    
    render() { 
        return ( 
            <div>
            <h2 className='text-center'>Registro</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" id="nombre" onChange={(u)=>this.setState({nombre:u.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su apellido" id="apellido" onChange={(u)=>this.setState({apellido:u.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su E-mail" id="email" onChange={(u)=>this.setState({email:u.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su usuario" id="user" onChange={(u)=>this.setState({usuario:u.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" id="pass" onChange={(p)=>this.setState({pass:p.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Saldo</Form.Label>
                    <Form.Control type="number" min="0" defaultValue="0" id="saldo" onChange={(u)=>this.setState({saldo:u.target.value})}/>
                </Form.Group>
                <p className={this.state.showError?'text-danger':'text-danger d-none'}>Error al registrarse. Por favor, revise los campos.</p>

                <div className='d-grid'>
                <Button variant="secondary" onClick={this.register}>Registrarse</Button>
                </div>
            </Form>
            </div>
         );
    }
}
 
export default RegisterForm;