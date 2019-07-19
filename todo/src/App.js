import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Secret from './components/Secret';
import Form from './components/Form';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

class App extends React.Component {
 state = {
  auth,
 };

 render() {
  return (
   <div className="App">
    <Switch>
     <Route
      exact
      path="/"
      render={props => <LoginPage auth={this.state.auth} />}
     />
     {/* secure "/secret" route by validating if the user is authenticated or not */}
     <Route
      path="/secret"
      render={props =>
       auth.isAuthenticated() ? <Secret auth={this.state.auth} /> : <Prompt />
      }
     />
     <Route path="/callback" component={Callback} />
     <Route path="*" component={NotFound} />
    </Switch>
   </div>
  );
 }
}

export default App;
