import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Secret from './components/Secret';

class App extends React.Component {
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
