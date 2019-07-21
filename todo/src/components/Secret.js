import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import MainContent from './MainContent/MainContent';

class Secret extends React.Component {
 state = {};
 render() {
  //   console.log('props in secret: ', this.props);
  return (
   <div>
    <NavBar logout={this.props.auth.logout} />

    <div>
     <MainContent />
    </div>
   </div>
  );
 }
}

export default Secret;
