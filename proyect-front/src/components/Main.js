import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Login from './Login';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div style={{backgroundColor: '#ffffff'}}>
            {/* <Header></Header>
            <Menu></Menu>
            <Footer></Footer> */}
            <Login></Login>
            </div>

        );
    }
}
 
export default Main;