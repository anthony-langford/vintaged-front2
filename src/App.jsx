import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Link } from "@reach/router"

// Import helpers
import store from './store';

// Import containers
import TestContainer from './containers/TestContainer';

store.subscribe(() => {});

let Home = () => <TestContainer />

render(
  <Provider store={store}>
    <Router>
      <Home path="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
);