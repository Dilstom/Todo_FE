import React from 'react';
import './index.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteNote extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  return (
   <div>
    <Modal
     isOpen={this.props.modal}
     toggle={this.props.toggle}
     className={this.props.className}
    >
     {/* <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader> */}
     <ModalBody>Are you sure you want to delete this note?</ModalBody>
     <ModalFooter>
      <Button color="#C30505" onClick={this.props.handleDelete}>
       Delete
      </Button>{' '}
      <Button color="#202374" onClick={this.props.toggle}>
       No
      </Button>
     </ModalFooter>
    </Modal>
   </div>
  );
 }
}

export default DeleteNote;
