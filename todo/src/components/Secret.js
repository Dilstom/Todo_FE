import React from 'react';
import { Route, Link } from 'react-router-dom';

class Secret extends React.Component {
 state = {};
 render() {
  return (
   <div>
    <h1>Secret!!!</h1>
    <Link to="/">Login</Link>
   </div>
  );
 }
}

export default Secret;
