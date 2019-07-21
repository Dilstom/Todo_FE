import React from 'react';
import './index.css';

class LeftNav extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  return (
   <div className="navBarW">
    <nav className="navbar  justify-content-between">
     <a className="navbar-brand">Todo</a>
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
     <div>
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

export default LeftNav;
