import {Component } from 'react';
import {Container, Form, ListGroup, Button } from 'react-bootstrap';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {request,getSession} from './helper';
import Loading from './loading';
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 });

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sales:[],
            user:{},
            products:[],
            loading:true
         };
         this.getUsuario=this.getUsuario.bind(this);
         this.getSales=this.getSales.bind(this);
         this.getProducts=this.getProducts.bind(this);
         this.setCantidad=this.setCantidad.bind(this);
         this.removeSale=this.removeSale.bind(this);
         this.getVal_tot=this.getVal_tot.bind(this);
    }
    componentDidMount(){
        this.getProducts();
        this.getUsuario();  
    }
    getSales(user){
        request.get(`/sales/${user._id}`)
        .then((response)=>{
            this.setState({sales:response.data});
            this.setState({loading:false});
        }).catch((err)=>{
            console.log(err);
        });
    }
    getUsuario(){
        const token=getSession();
        request.get(`/users/${token}`)
        .then((response)=>{
            this.setState({user:response.data});
            this.getSales(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    getProducts(){    
        request.get('/products')
        .then((response)=>{
            this.setState({products:response.data});
        }).catch((err)=>{
            console.log(err);
        });
    }
    setCantidad(venta,cantidad,val){
        venta.cantidad=cantidad;
        venta.valor_total=val*cantidad;
        let ven=[venta];
        let sal=this.state.sales.map(v=>ven.find(o=>v._id==o._id)||v);
        this.setState({sales:sal});
    }
    removeSale(venta){
        request.remove(`/sales/${venta._id}`)
        .then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        });
        let ven=this.state.sales.filter((sal)=>sal._id!=venta._id);
        this.setState({sales:ven});
        if(ven.length==0)
            this.setState({loading:false});
    }
    getVal_tot(){
        let val=0;
        this.state.sales.forEach(sale=>val+=Number(sale.valor_total));
        return val;
    }
    render() { 
        const ventas=this.state.sales.map((venta)=>{
            const producto=this.state.products.filter(product=>venta.id_producto==product._id)[0];
            return (
                <ListGroup.Item key={venta.id_producto}>
                        <div className="row">
                            <div className="col-xs-1 col-md-6 col-lg-2">
                                <img src={`/images/comidas/${venta.id_producto}.jpg`} alt="Producto" width="100" height="100" className='rounded-circle'></img>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-7 mt-2">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                            </div>
                            <Container className="col-xs-12 col-md-4 col-lg-1 mt-2">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Group className='mb-5 d-flex'>
                                    <Form.Control as='input' type='number' min={1} defaultValue={venta.cantidad} rows={4} onChange={(u)=>this.setCantidad(venta,u.target.value,producto.precio)}></Form.Control>
                                </Form.Group>
                            </Container>
                            <Container className="col-xs-6 col-md-4 col-lg-1 mt-2">
                                    <Form.Label>Precio</Form.Label>
                                    <h5>{currency.format(venta.valor_total)}</h5>
                            </Container>
                            <div className="col-xs-6 col-md-4 col-lg-1 d-flex justify-items-center">
                                <Button variant='ligth' onClick={()=>this.removeSale(venta)}>
                                    <AiOutlineCloseCircle size={30} color="red"></AiOutlineCloseCircle>
                                </Button>
                            </div> 
                        </div>
                    </ListGroup.Item>
            );
        });
        return ( 
            <div className='container' style={{ marginTop: '6rem' }}>
                
                <Loading show={this.state.loading}></Loading>
                <h1 className='text-center mb-5 mt-5'>Carrito</h1>
                <ListGroup>
                    
                    {ventas}
                </ListGroup>
                <div className="d-flex justify-content-end mt-5">
                    <h5 className="card-title p-3">Valor total</h5>
                    <h5 id="valor_total" className="card-title text-success p-3">{currency.format(this.getVal_tot())}</h5>
                    <Button className="btn btn-success rounded">Comprar</Button>
                </div>

            </div>
            
         );
    }
}
 
export default Cart;
