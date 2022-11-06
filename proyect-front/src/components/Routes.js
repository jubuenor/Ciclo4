import {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './Login';
import Main from './Main';

class appRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() { 
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Login></Login>}></Route>
                    <Route exact path="/login" element={<Login></Login>}></Route>
                    <Route path="/home"element={<Main></Main>}></Route>

                </Routes>
            
            </BrowserRouter>
                
                
        );
    }
}
 
export default appRoutes;