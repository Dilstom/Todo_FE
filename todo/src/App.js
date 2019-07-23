import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Secret from './components/Secret';
import LoginPage from './components/LoginPage';
import NoteView from './components/NoteView/NoteView';
import NotFound from './components/NotFound';
import Prompt from './components/Prompt';
import Callback from './components/Callback';
import Auth from './Auth';
import CreateNote from './components/CreateNote/CreateNote';

const auth = new Auth();

class App extends React.Component {
 state = {
  auth,
  notes: [],
 };

 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts/')
   .then(response => response.json())
   .then(json => {
    let top10 = json.slice(0, 10);
    this.setState({ notes: top10 });
   });
 }

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
      exact
      path="/secret"
      render={props =>
       auth.isAuthenticated() ? (
        <Secret auth={this.state.auth} notes={this.state.notes} />
       ) : (
        <Prompt />
       )
      }
     />
     <Route
      path="/secret/note/:id"
      render={props =>
       auth.isAuthenticated() ? (
        <NoteView {...props} auth={this.state.auth} />
       ) : (
        <Prompt />
       )
      }
     />
     <Route
      path="/create"
      render={props =>
       auth.isAuthenticated() ? (
        <CreateNote {...props} auth={this.state.auth} />
       ) : (
        <Prompt />
       )
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
