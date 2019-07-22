import React from 'react';
import './index.css';
import NavBar from '../NavBar/NavBar';

class NoteView extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  return (
   <div>
    <NavBar logout={this.props.auth.logout} />
    <div className="cardWrapperNV">
     <div class="card" style={{ maxWidth: '48rem' }}>
      <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
       <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
       </p>
       <a href="#" class="card-link">
        Card link
       </a>
       <a href="#" class="card-link">
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
