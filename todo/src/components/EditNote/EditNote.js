import React from 'react';
import './index.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

class EditNote extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   title: this.props.location.state.title || '',
   body: this.props.location.state.body || '',
   //    title: '',
   //    body: '' ,
  };
 }

 hundleEdit = e => {
  const newObj = {
   title: this.state.title, // Cannot read property 'title' of undefined
   body: this.state.body,
  };
  console.log('newObj: ', newObj);
  const id = this.props.location.state.id;

  axios
   .put(`https://jsonplaceholder.typicode.com/posts/${id}`, newObj)
   .then(res => {
    console.log('res in put: ', res);
   })
   .catch(err => {
    console.log('err in edit: ', err);
   });
 };

 handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
  console.log('this state title', this.state.title);
 };

 render() {
  //   console.log('props in EditNote: ', this.props);
  console.log('state title in EditNote: ', this.state.title);
  console.log('state body in EditNote: ', this.state.body);
  return (
   <div>
    <NavBar logout={this.props.auth.logout} />
    <div className="cardWrapperNV">
     <div className="card" style={{ maxWidth: '40rem' }}>
      <div className="card-body">
       <h4 className="headerSave">Edit Note: </h4>
       <form className="createForm" onSubmit={this.hundleEdit}>
        <div className="form-group">
         {/* <label for="exampleFormControlInput1">Note Title</label> */}
         <input
          //  `Using value={whatever} will make it immutable. You should use defaultValue={this.props.location.state.title}`
          defaultValue={this.props.location.state.title} // populate value from props
          type="text"
          name="title"
          className="form-control"
          id="exampleFormControlText"
          onChange={this.handleChange}
         />
        </div>

        <div className="form-group">
         {/* <label for="exampleFormControlTextarea1">Note Content</label> */}
         <textarea
          defaultValue={this.props.location.state.body}
          name="body"
          onChange={this.handleChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
         />
        </div>
        <button className="saveBtn">Save</button>
       </form>
      </div>
     </div>
    </div>
   </div>
  );
 }
}

export default EditNote;
