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
     {/* <form className="form-inline">
      <input
       className="form-control mr-sm-2"
       type="search"
       placeholder="Search"
       aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
       Search
      </button>
    </form> */}
     <div className="navBarLeft">
      <a className="aTag" onClick={this.props.logout}>
       Logout
      </a>
      <button className="btn btn-light my-2 my-sm-0" type="submit">
       View Your Notes
      </button>
      <button className="btn btn-light my-2 my-sm-0 ml-2" type="submit">
       + Create New Note
      </button>
     </div>
    </nav>
   </div>
  );
 }
}

export default NavBar;
