import React from 'react';
import './index.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

class CreateNote extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   title: '',
   body: '',
   status: '',
  };
 }

 handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
 };

 handleSubmit = e => {
  e.preventDefault();
  const newObj = {
   title: this.state.title,
   body: this.state.body,
  };

  axios
   .post('https://jsonplaceholder.typicode.com/posts/', newObj)
   .then(res => {
    this.setState({ status: res.statusText });
   })
   .catch(err => console.log(err));
 };

 render() {
  return (
   <div>
    <NavBar logout={this.props.auth.logout} />
    <div className="cardWrapperNV">
     <div className="card" style={{ maxWidth: '40rem' }}>
      <div className="card-body">
       <h4 className="headerSave">Create New Note: </h4>
       <form className="createForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
         {/* <label for="exampleFormControlInput1">Note Title</label> */}
         <input
          type="text"
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Note Title"
          onChange={this.handleChange}
         />
        </div>

        <div className="form-group">
         {/* <label for="exampleFormControlTextarea1">Note Content</label> */}
         <textarea
          className="form-control"
          placeholder="Note Content"
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={this.handleChange}
         />
        </div>
        <button className="saveBtn">Save</button>
        <div>{this.state.status ? this.state.status + '!' : null}</div>
       </form>
      </div>
     </div>
    </div>
   </div>
  );
 }
}

export default CreateNote;
