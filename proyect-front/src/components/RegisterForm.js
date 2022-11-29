import {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import app from '../app.json';
import axios from 'axios';
import MsgModal from './MsgModal';

const {APIHOST}=app;

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:this.props.update?this.props.user.usuairo:'',
            pass:this.props.update?this.props.user.pass:'',
            nombre:this.props.update?this.props.user.nombre:'',
            apellido:this.props.update?this.props.user.apellido:'',
            email:this.props.update?this.props.user.email:'',
            saldo:this.props.update?this.props.user.saldo:'',
            showError:false,
            showModal:false,
        };
        this.register=this.register.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({showModal:!this.state.showModal});
    }
    register(){
        if(!this.props.update)
        {
            axios.post(`${APIHOST}/users/register`,{
                usuario:this.state.usuario,
                pass:this.state.pass,
                nombre:this.state.nombre,
                apellido:this.state.apellido,
                email:this.state.email,
                saldo:this.state.saldo,
            }).then((response)=>{
                this.toggleModal();
                console.log(response);
            }).catch((response)=>{
                console.log(response);
            });
        }else{
            axios.put(`${APIHOST}/users/${this.props.user._id}`,{
                usuario:this.state.usuario,
                pass:this.props.user.pass,
                nombre:this.state.nombre,
                apellido:this.state.apellido,
                email:this.state.email,
                saldo:this.state.saldo,
            }).then((response)=>{
                this.toggleModal();
                window.location.reload();
                console.log(response);
            }).catch((response)=>{
                console.log(response);
            });

        }
    }
    // Mandar modalmsg en actualizar y registrar





    render() { 
        return ( 
            <div>
                {this.state.showModal?<MsgModal toggleModal={this.toggleModal} msg={this.props.update?"Actualización exitosa":"Registro exitoso"}></MsgModal>:null}

                <h2 className='text-center'>Registro</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" id="nombre" onChange={(u)=>this.setState({nombre:u.target.value})} defaultValue={this.props.update?this.props.user.nombre:""}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su apellido" id="apellido" onChange={(u)=>this.setState({apellido:u.target.value})} defaultValue={this.props.update?this.props.user.apellido:""}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su E-mail" id="email" onChange={(u)=>this.setState({email:u.target.value})} defaultValue={this.props.update?this.props.user.email:""}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" id="user" onChange={(u)=>this.setState({usuario:u.target.value})} defaultValue={this.props.update?this.props.user.usuario:""}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" id="pass" onChange={(p)=>this.setState({pass:p.target.value})} defaultValue={this.props.update?"***************":""} disabled={this.props.update}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Saldo</Form.Label>
                        <Form.Control type="number" min="0"  defaultValue={this.props.update?this.props.user.saldo:0} id="saldo" onChange={(u)=>this.setState({saldo:u.target.value})}/>
                    </Form.Group>
                    <p className={this.state.showError?'text-danger':'text-danger d-none'}>Error al registrarse. Por favor, revise los campos.</p>

                    <div className='d-grid'>
                    <Button variant="success" onClick={this.register}>{this.props.update?"Acutalizar":"Registrarse"}</Button>
                    </div>
                </Form>
            </div>
         );
    }
}
 
export default RegisterForm;