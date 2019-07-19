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
    <Switch>
     <Route exact path="/" component={Form} />
     <Route exact path="/secret" component={Secret} />
     <Route path="*" component={NotFound} />
    </Switch>
   </div>
  );
 }
}

export default App;
