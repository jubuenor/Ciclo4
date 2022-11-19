import {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import app from '../app.json';
import Cookies from 'universal-cookie';
import {SessionTime} from './helper';
import Loading from './loading';
import { useNavigate } from 'react-router-dom';

const withNavigate = Component => props => {
  const navigate = useNavigate();
  return <Component {...props} navigate={navigate} />;
};
const cookies = new Cookies();

const {APIHOST}=app;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading:false,
            showError:false,
            usuario:'',
            pass:'',
         };
         this.login=this.login.bind(this);
         this.cambiar=this.cambiar.bind(this);
    }
    cambiar(){
        this.props.navigate('/home');
    }
    login(){
        
        this.setState({loading:true});

        console.log(`user: ${this.state.usuario} pass: ${this.state.pass}`);
        axios.post(`${APIHOST}/users/login/`,{
            usuario: this.state.usuario,
            pass: this.state.pass,
        }
        ).then((response)=>{
            if(response.data.token!==null){
                console.log("token");
                cookies.set('_s',response.data.token,{
                path:'/',
                expires: SessionTime()
                })
                this.props.isLogged(true);
                this.cambiar();
                // this.props.history.push("/home");
            }else{
                this.setState({showError:true});
            }
            this.setState({loading:false});
        }).catch((error)=>{
            console.log(error);
            this.setState({loading:false});
        });
    }
    render() { 
        return (
            <div>
                <Loading show={this.state.loading}></Loading>
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
 
export default withNavigate(LoginForm);