import React from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';

class MainContent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  return (
   <div>
    <h4 className="headerN">Your Notes: </h4>
    <div className="cardWrapper">
     <NotesList />
    </div>
   </div>
  );
 }
}

export default MainContent;
