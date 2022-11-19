import {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import PrivateRoute from './auth/privaterouter';



class appRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() { 
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<PrivateRoute></PrivateRoute>}>
                        <Route exact path="/home" element={<Main></Main>}></Route>
                    </Route>
                    {/* <Route path="*" element={<Login></Login>}></Route> */}
                    <Route exact path="/login" element={<Login></Login>}></Route>
                    
                    

                </Routes>
            
            </BrowserRouter>
                
                
        );
    }
}
 
export default appRoutes;