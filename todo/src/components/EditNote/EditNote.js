import React from 'react';
import './index.css';

class EditNote extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  return (
   <div>
    <NavBar logout={this.props.auth.logout} />
    <div className="cardWrapperNV">
     <div className="card" style={{ maxWidth: '40rem' }}>
      <div className="card-body">
       <h4 className="headerSave">Edit Note: </h4>
       <form
        className="createForm"
        // onSubmit={}
       >
        <div class="form-group">
         {/* <label for="exampleFormControlInput1">Note Title</label> */}
         <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Note Title"
         />
        </div>

        <div class="form-group">
         {/* <label for="exampleFormControlTextarea1">Note Content</label> */}
         <textarea
          class="form-control"
          placeholder="Note Content"
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
