import React from 'react';
import './loginPage.css';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  console.log(this.props.auth.getProfile());
  return (
   <div className="loginPage">
    {/* <div>Hello {this.props.auth.getProfile().given_name || 'User'}!</div> */}
    <div className="loginPageContent">
     <p>
      Welcome to <Link to="/secret">Notes</Link>
     </p>
     {/* display the login button only when the user is unauthenticated*/}
     {!this.props.auth.isAuthenticated() ? (
      <div>
       <h6>Please, login first to see the content</h6>
       {/* we have auth object so we can use its property */}
       <button onClick={this.props.auth.login}>Login</button>
      </div>
     ) : (
      <button className="getStarted">
       <Link to="/secret">Get started</Link>
      </button>
     )}
    </div>
   </div>
  );
 }
}

export default LoginPage;
