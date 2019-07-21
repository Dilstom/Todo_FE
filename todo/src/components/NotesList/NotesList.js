import React from 'react';
import './index.css';

class NotesList extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  console.log('props in NotesList: ', this.props);
  return (
   <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
     <h5 className="card-title">{this.props.item.name}</h5>
     <p className="card-text">{this.props.item.body}</p>
     <a href="#" className="card-link">
      Card link
     </a>
     <a href="#" className="card-link">
      Another link
     </a>
    </div>
   </div>
  );
 }
}

export default NotesList;
