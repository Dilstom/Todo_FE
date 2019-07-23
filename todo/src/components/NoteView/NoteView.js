import React from 'react';
import './index.css';
import NavBar from '../NavBar/NavBar';

class NoteView extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  //   console.log('props in noteView render: ', this.props);
  return (
   <div>
    <NavBar logout={this.props.auth.logout} />
    <div className="cardWrapperNV">
     <div className="card" style={{ maxWidth: '40rem' }}>
      <div className="displayFlexRight">
       <a className="mr-4">edit</a>
       <a>delete</a>
      </div>
      <div className="card-body">
       <h5 className="card-title">{this.props.location.state.name}</h5>
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
   </div>
  );
 }
}

export default NoteView;
