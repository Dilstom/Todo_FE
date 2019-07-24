import React from 'react';
import './index.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class NoteView extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   modal: false,
   status: '',
  };
  this.toggle = this.toggle.bind(this);
 }

 handleDelete = e => {
  const id = this.props.location.state.id;

  axios
   .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then(res => {
    console.log('res in handleDelete: ', res);
    // this.setState({ modal: !this.state.modal, status: 'You ' });
    this.props.history.push('/secret');
   })
   .catch(err => {
    console.log('err: ', err);
   });
 };

 toggle() {
  this.setState(prevState => ({
   modal: !prevState.modal,
  }));
 }

 render() {
  console.log('props in noteView render: ', this.props);
  return (
   <div>
    <NavBar logout={this.props.auth.logout} />
    <div className="cardWrapperNV">
     <div className="card" style={{ maxWidth: '40rem' }}>
      <div className="displayFlexRight">
       <Link
        to={{ pathname: '/edit', state: this.props.location.state }}
        className="editLink mr-4"
       >
        edit
       </Link>
       <a onClick={this.toggle}>delete</a>
      </div>
      <div className="card-body">
       <h5 className="card-title">{this.props.location.state.title}</h5>
       {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
       <p className="card-text">{this.props.location.state.body}</p>
       <a href="#" className="card-link">
        Card link
       </a>
       <a href="#" className="card-link">
        Another link
       </a>
      </div>
     </div>
    </div>
    <DeleteNote
     modal={this.state.modal}
     toggle={this.toggle}
     className={this.props.className}
     handleDelete={this.handleDelete}
    />
   </div>
  );
 }
}

export default NoteView;
