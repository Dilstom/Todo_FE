import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Secret from './components/Secret';
import Form from './components/Form';
import NotFound from './components/NotFound';

class App extends React.Component {
 state = {
  auth,
 };

 hundleLogin = e => {
  e.preventDefault();
  this.setState({ show: !this.state.show });
 };

 handleSubmit = e => {
  e.preventDefault();
 };

 handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
 };

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
