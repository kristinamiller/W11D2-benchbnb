import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import { signup, login, logout } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to ParkBnB - React is working fine! Don't worry</h1>, root);


});


window.signup = signup;
window.login = login;
window.logout = logout;