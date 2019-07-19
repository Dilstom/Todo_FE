import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  console.log(this.props);
  return (
   <div>
    <div>Hello User!</div>
    <p>
     Content: <Link to="/secret">Secret Content</Link>
    </p>
    {!this.props.auth.isAuthenticated() && (
     <div>
      <h6>Please, login first to see the content</h6>
      {/* we have auth object so we can use its property */}
      <button onClick={this.props.auth.login}>Login</button>
     </div>
    )}
   </div>
  );
 }
}

export default LoginPage;
