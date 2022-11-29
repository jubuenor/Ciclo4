import {Component} from 'react';
import {Container, ListGroup, Modal, Button} from 'react-bootstrap';
import {request,getSession} from './helper';
import Loading from './loading';
import {AiOutlineCloseCircle} from "react-icons/ai";
import RegisterForm from './RegisterForm';
import { logout } from './helper';


const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 });

function ModalRegister({toggleModal,user}){
    return(
        <>
        <Modal show={true} centered>
            <Modal.Header>
            <Modal.Title>Actualizar datos</Modal.Title>
            <Button variant="btn-light" onClick={toggleModal}><AiOutlineCloseCircle size={30} color="red"></AiOutlineCloseCircle></Button>
            </Modal.Header>
            <Modal.Body>

                <RegisterForm  update={true} user={user}></RegisterForm>


            </Modal.Body>
        </Modal>
        </>
        

    );
}

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:{},
            loading:true,
            showModal:false,
         }
        this.getUsuario=this.getUsuario.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.removeAccount=this.removeAccount.bind(this);
    }
    toggleModal(){
        this.setState({showModal:!this.state.showModal});
    }
    componentDidMount(){
        this.getUsuario();
    }
    getUsuario(){
        const token=getSession();
        request.get(`/users/${token}`)
        .then((response)=>{
            this.setState({user:response.data});
            this.setState({loading:false});
        }).catch((err)=>{
            console.log(err);
        });
    }
    removeAccount(){
        request.remove(`/users/${this.state.user._id}`)
        .then((response)=>{
            logout();
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    render() { 
        
        return ( 
            <Container className='row mt-5' style={{ marginTop: '6rem',minHeight:"40em" ,margin:"auto"}}>

                <h1 className='text-center mt-5'>Mi perfil</h1>
                <h5 className='text-center'>Datos de cuenta</h5>
                <Loading show={this.state.loading}></Loading>
                {this.state.showModal?<ModalRegister toggleModal={this.toggleModal} user={this.state.user}></ModalRegister>:null}

                <Container className='col-xs-1 col-md-6 col-lg-6'>
                    <ListGroup>
                        <ListGroup.Item>Nombre: <span className='h5'>{this.state.user.nombre}</span> </ListGroup.Item>
                        <ListGroup.Item>Apellido: <span className='h5'>{this.state.user.apellido}</span> </ListGroup.Item>
                        <ListGroup.Item>E-mail: <span className='h5'>{this.state.user.email}</span> </ListGroup.Item>
                        <ListGroup.Item>Usuario: <span className='h5'>{this.state.user.usuario}</span> </ListGroup.Item>
                        <ListGroup.Item>Saldo: <span className='h5'>{currency.format(this.state.user.saldo)}</span> </ListGroup.Item>
                    </ListGroup>
                </Container>
                <Container className="col-xs-1 col-md-6 col-lg-6 text-center">
                    <img className="rounded" src="/images/profile.jpg" alt="profile" width="50%"></img>
                </Container>

                <Container>
                    <Button onClick={this.toggleModal}>Actualizar datos</Button>
                    <Button className='btn-danger ms-5' onClick={this.removeAccount}>Eliminar cuenta</Button>
                </Container>

            </Container>
            

         );
    }
}
 
export default MyProfile;
