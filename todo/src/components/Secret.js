import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import NoteView from './NoteView/NoteView';
import MainContent from './MainContent/MainContent';

class Secret extends React.Component {
 state = {};
 render() {
  //   console.log('props in secret: ', this.props);
  return (
   <div>
    <NavBar logout={this.props.auth.logout} notes={this.props.notes} />

    <MainContent notes={this.props.notes} />
    {/* <Route path="/secret/note/:id" component={NoteView} /> */}
   </div>
  );
 }
}

export default Secret;
