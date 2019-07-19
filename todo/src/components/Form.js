import React from 'react';

class Form extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  return (
   <div>
    <div>Please, login to see the content</div>
    <form onSubmit={this.handleSubmit}>
     <input
      name="username"
      placeholder="Username"
      onChange={this.handleChange}
     />
     <input
      name="password"
      placeholder="Password"
      onChange={this.handleChange}
     />
     <button>Login</button>
    </form>
   </div>
  );
 }
}

export default Form;
