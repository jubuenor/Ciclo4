import{ Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import {AiOutlineCloseCircle} from "react-icons/ai";

class MsgModal extends Component {
    constructor(props) {
        super(props);
        this.state = {    };
    }
    render() { 
        return ( 

            <Modal show={true} centered size='sm'>
                <Modal.Header>
                <p className='text-success h4'>{this.props.msg}</p>
                <Button variant="btn-light" onClick={this.props.toggleModal}><AiOutlineCloseCircle size={30} color="red"></AiOutlineCloseCircle></Button>
                </Modal.Header>
            </Modal>

         );
    }
}
 
export default MsgModal;