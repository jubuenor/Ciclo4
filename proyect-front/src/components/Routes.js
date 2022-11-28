import {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import PrivateRoute from './auth/privaterouter';
import Cart from './Cart';
import {getSession} from './helper';

const checkAuth=()=>{
    return getSession()?true:false;
}

class appRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            logged:checkAuth(),
            restaurant:0,
            busqueda:""
         };
         this.isLogged=this.isLogged.bind(this);
         this.setRestaurant=this.setRestaurant.bind(this);
         this.buscar=this.buscar.bind(this);
    }
    isLogged(evt){
        this.setState({logged:evt})
    }
    setRestaurant(id){
        this.setState({busqueda:""});
        this.setState({restaurant:id});
    }
    buscar(busqueda){
        this.setState({busqueda:busqueda});
    }
    render() { 
        return (
            <>
            <BrowserRouter>
            <Header logged={this.state.logged} setRestaurant={this.setRestaurant} buscar={this.buscar}></Header>
                <Routes>
                    <Route exact path="/" element={<PrivateRoute></PrivateRoute>}>
                        <Route exact path="/home" element={<Menu restaurant={this.state.restaurant}  setRestaurant={this.setRestaurant} buscar={this.state.busqueda}></Menu>}></Route>
                        <Route exact path="/cart" element={<Cart></Cart>}></Route>
                    </Route>
                    {/* <Route path="*" element={<Login></Login>}></Route> */}
                    <Route exact path="/login" element={<Login isLogged={this.isLogged}></Login>}></Route>
                    <Route path='*' element={<div className='container' style={{ marginTop: '6rem',height: '30rem'  }}><h3>Pagina no encontrada</h3><h1>4 0 4</h1></div>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
            </>  
                
        );
    }
}
 
export default appRoutes;