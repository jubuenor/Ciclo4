import {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, Button, Modal, Container, Form } from 'react-bootstrap';
import {request} from './helper';
import Loading from './loading';
import DishDetail from './DishDetail';
import {getSession} from './helper';

function RenderProductItem({props,toggleModal}){

    return(
        // onClick={this.toggleModal}
            <Card style={{ width: '18rem' }} className="mt-5" onClick={()=>toggleModal(props)}>
                <Card.Img variant="top" src={`/images/comidas/${props._id}.jpg`} alt='1' className="rounded-5"/>
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                    {props.descripcion.slice(0,77)+" ..."}
                    </Card.Text>
                    {/* <Card.Title>$ 20.000</Card.Title> */}
                </Card.Body>
            </Card>
    );
}

class Menu extends Component {  

    constructor(props) {
        super(props);
        this.state = { 
            products:[],
            showModal:false,
            productDetail:{},
            restaurants:[],
            user:{}
         };
         this.toggleModal=this.toggleModal.bind(this);
         this.getProducts=this.getProducts.bind(this);
         this.getRestaurants=this.getRestaurants.bind(this);
         this.getUsuario=this.getUsuario.bind(this);
    }
    toggleModal(product){
        this.setState({showModal:!this.state.showModal});
        this.setState({productDetail:product})
    }
    componentDidMount(){
        this.getProducts();
        this.getRestaurants();
        this.getUsuario();
    }
    getProducts(){    
        request.get('/products')
        .then((response)=>{
            this.setState({products:response.data});
        }).catch((err)=>{
            console.log(err);
        });
    }
    getRestaurants(){
        request.get('/restaurant')
        .then((response)=>{
            this.setState({restaurants:response.data});
        }).catch((err)=>{
            console.log(err);
        });
    }
    getUsuario(){
        const token=getSession();
        request.get(`/users/${token}`)
        .then((response)=>{
            this.setState({user:response.data});
        }).catch((err)=>{
            console.log(err);
        });
    }
    render() { 
        const menu=(restaurant,buscar)=>this.state.products.map((product)=>{
            if(buscar===""){
                if(restaurant===0){
                    return(
                        <RenderProductItem props={product} key={product._id} toggleModal={this.toggleModal}></RenderProductItem>
                    );
                }else if(restaurant!==0){
                    if(restaurant==product.restaurante){
                        return(
                            <RenderProductItem props={product} key={product._id} toggleModal={this.toggleModal}></RenderProductItem>
                        )
                    }
                }
            }else{
                if(product.nombre.toUpperCase().includes(buscar.toUpperCase())){
                    return(
                        <RenderProductItem props={product} key={product._id} toggleModal={this.toggleModal}></RenderProductItem>
                    )
                }
            }
            
        });
        const restAct=()=>{
            try{
                let nombre=this.state.restaurants.filter(restaurant=>restaurant._id==this.props.restaurant)[0].nombre;
                return nombre;
            }catch(e){
                return "";
            }
        }
        return ( 

            <div className='container' style={{ marginTop: '6rem'}}>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem onClick={()=>{this.props.setRestaurant(0)}}>Home</BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.restaurant==0?"Todos":restAct()}</BreadcrumbItem>
                    </Breadcrumb >
                </div>
                {this.state.showModal?
                <DishDetail toggleModal={this.toggleModal} props={this.state.productDetail} user={this.state.user}></DishDetail>
                :null
                }


                {
                    this.props.restaurant!=""?
                    <Container className='text-center'>
                        <img  src={`/images/restaurants/${this.props.restaurant}.jpg`} alt='1' width="300px" className='rounded-circle'></img>
                    </Container>
                    :null
                }

                
                
                <Loading show={this.state.products.length>0?false:true}></Loading>
                <div className='container d-flex flex-wrap justify-content-evenly'>
                    {menu(this.props.restaurant,this.props.buscar)} 
                </div>
                


            </div>

         );
    }
}
 
export default Menu;