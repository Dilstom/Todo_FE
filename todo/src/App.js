import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 state = {};

 hundleLogin = () => {};

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <div>Please, login to see the content</div>
     <button onClick={this.hundleLogin}>Login</button>
    </header>
   </div>
  );
 }
}

export default App;
