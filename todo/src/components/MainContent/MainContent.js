import React from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';

class MainContent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   notes: [],
  };
 }
 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/comments/')
   .then(response => response.json())
   .then(json => {
    let top10 = json.slice(0, 10);
    this.setState({ notes: top10 });
   });
 }

 render() {
  //   console.log('state: ', this.state.notes);
  return (
   <div>
    <h4 className="headerN">Your Notes: </h4>
    <div className="cardWrapper displayFlex">
     {this.state.notes.map(item => {
      return <NotesList key={item.id} item={item} />;
     })}
    </div>
   </div>
  );
 }
}

export default MainContent;
