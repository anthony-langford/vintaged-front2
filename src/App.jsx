import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "@reach/router"

// Import helpers
import store from './store';

// Import containers
// import TestContainer from './containers/TestContainer';
import HomeContainer from './containers/Home';

store.subscribe(() => {});

// let Test = () => <TestContainer />
let Home = () => <HomeContainer />

render(
  <Provider store={store}>
    <Router>
      {/* <Test path="/test" /> */}
      <Home path="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
);