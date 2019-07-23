import React from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';

class MainContent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   //    notes: [],
  };
 }

 render() {
  //   console.log('state: ', this.state.notes);
  return (
   <div>
    <h4 className="headerN">Your Notes: </h4>
    <div className="cardWrapper displayFlex">
     {this.props.notes.map(item => {
      return <NotesList key={item.id} item={item} />;
     })}
    </div>
   </div>
  );
 }
}

export default MainContent;
