import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class NavBar extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  console.log('navbar props: ', this.props.logout);
  return (
   <div className="navBarW">
    <nav className="navbar navBarw justify-content-between">
     <Link to="/" className="navbar-brand">
      Notes
     </Link>
     <div className="navBarLeft">
      <a className="aTag" onClick={this.props.logout}>
       Logout
      </a>
      <Link to="/secret" className="btn btn-light my-2 my-sm-0">
       {/* <button type="submit"> */}
       View Your Notes
       {/* </button> */}
      </Link>
      <Link to="/create" className="btn btn-light my-2 my-sm-0 ml-2">
       {/* <button type="submit"> */}+ Create New Note
       {/* </button> */}
      </Link>
      {/* <button className="btn btn-light my-2 my-sm-0 ml-2" type="submit">
       + Create New Note
      </button> */}
     </div>
    </nav>
   </div>
  );
 }
}

export default NavBar;
