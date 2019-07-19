/* eslint no-restricted-globals: 0  */

// linter doesn't let us use resticted-globals

import auth0 from 'auth0-js';
import React from 'react';

const LOGIN_SUCCESS_PAGE = '/secret';
const LOGIN_FAILURE_PAGE = '/';

require('dotenv').config();

const APP_DOMAIN = process.env.REACT_APP_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_CLIENTID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUDIENCE = process.env.REACT_APP_AUDIENCE;
const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
const SCOPE = process.env.REACT_APP_SCOPE;

class Auth extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
  this.login = this.login.bind(this);
 }

 // 1. create auth0 property. Initialize the project
 auth0 = new auth0.WebAuth({
  domain: APP_DOMAIN,
  clientID: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  audience: AUDIENCE,
  responseType: RESPONSE_TYPE,
  scope: SCOPE,
 });

 login() {
  this.auth0.authorize();
 }

 handleAuthentication() {
  this.auth0.parseHash((err, authResults) => {
   if (authResults && authResults.accessToken && authResults.idToken) {
    let expiresAt = JSON.stringify(
     authResults.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem(' access_token', authResults.accessToken);
    localStorage.setItem('id_token', authResults.idToken);
    localStorage.setItem('expires_at', expiresAt);
    location.hash = '';
    location.pathname = LOGIN_SUCCESS_PAGE;
   } else if (err) {
    location.pathname = LOGIN_FAILURE_PAGE;
    console.log(err);
   }
  });
 }

 isAuthenticated() {
  // for this method just use 'expires_at' value stored in localStorage
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  // and check if that value is greater than the current time stamp
  return new Date().getTime() < expiresAt;
 }

 logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  location.pathname = LOGIN_FAILURE_PAGE;
 }
}

export default Auth;
