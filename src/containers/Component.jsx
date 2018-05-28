import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

// import react router deps
// import { Route, Redirect, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { Provider } from 'react-redux';
// import store, { history } from './store';
// import routes from './routes';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
};

export default App;
