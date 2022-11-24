import {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import PrivateRoute from './auth/privaterouter';
import {getSession} from './helper';

const checkAuth=()=>{
    return getSession()?true:false;
}

class appRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            logged:checkAuth()
         };
         this.isLogged=this.isLogged.bind(this);
    }
    isLogged(evt){
        this.setState({logged:evt})
    }
    
    render() { 
        return (
            <>
            <Header logged={this.state.logged}></Header>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<PrivateRoute></PrivateRoute>}>
                        <Route exact path="/home" element={<Menu></Menu>}></Route>
                    </Route>
                    {/* <Route path="*" element={<Login></Login>}></Route> */}
                    <Route exact path="/login" element={<Login isLogged={this.isLogged}></Login>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
            </>  
                
        );
    }
}
 
export default appRoutes;