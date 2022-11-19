import {Component}from 'react';
import { Spinner } from 'react-bootstrap';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <>
                {this.props.show?
                    <div className='loading-backdrop'>
                    <Spinner animation='border' variant='primary'></Spinner>
                    </div>
                :null}
            </>
            
            

         );
    }
}
 
export default Loading;