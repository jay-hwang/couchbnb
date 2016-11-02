import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// dev test imports
import { login,
         logout,
         signup
       } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const mainRoot = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  ReactDOM.render(<Root store={store}/>, mainRoot);
});
