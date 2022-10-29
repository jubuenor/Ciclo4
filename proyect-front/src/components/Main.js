import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <>
            <Header></Header>

            <Footer></Footer>
            </>

        );
    }
}
 
export default Main;