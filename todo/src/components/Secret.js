import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './LeftNav/LeftNav';
import MainContent from './MainContent/MainContent';

class Secret extends React.Component {
 state = {};
 render() {
  //   console.log('props in secret: ', this.props);
  return (
   <div>
    <h1>Secret!!!</h1>
    <Link to="/">Home</Link>
    <button onClick={this.props.auth.logout}>Logout</button>

    <div>
     <LeftNav />
     <MainContent />
    </div>
   </div>
  );
 }
}

export default Secret;
