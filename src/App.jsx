import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store, {history} from './store';

import TestContainer from './containers/TestContainer';

// Import React Router dependencies
// import { Route, Redirect, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { Provider } from 'react-redux';
// import { Auth, loadSvgs } from './helpers';
// import routes from './routes';

store.subscribe(() => {});

render(
  <Provider store={store}>
    <TestContainer/>
  </Provider>,
  document.getElementById('root')
);