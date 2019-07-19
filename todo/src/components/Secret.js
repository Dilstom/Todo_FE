import React from 'react';
import { Route, Link } from 'react-router-dom';

class Secret extends React.Component {
 state = {};
 render() {
  //   console.log('props in secret: ', this.props);
  return (
   <div>
    <h1>Secret!!!</h1>
    <Link to="/">Home</Link>
   </div>
  );
 }
}

export default Secret;
