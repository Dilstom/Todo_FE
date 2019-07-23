import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class NotesList extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  //   console.log('props in NotesList: ', this.props);
  return (
   <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
     <Link
      to={{
       pathname: `/secret/note/${this.props.item.id}`,
       state: this.props.item, // pass data from one route to another using `state`
      }}
      className="linkId"
     >
      <h5 className="card-title">{this.props.item.title}</h5>
      <p className="card-text">{this.props.item.body}</p>
     </Link>
     <div className="cardBotton">
      <a href="#" className="card-link">
       Card link
      </a>
      <a href="#" className="card-link">
       Another link
      </a>
     </div>
    </div>
   </div>
  );
 }
}

export default NotesList;
