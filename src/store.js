import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
// import {createBrowserHistory} from 'history';

// Import the root reducer
import rootReducer from './reducers/index';

// Create an object for the default state
const defaultState = {
  common: {
    initialState: 'fuck',
  }
};

// TODO: after react router is implemented
// Create a browser history
// export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// Customize middleware depending on environment
const environmentMiddleware = (process.env.NODE_ENV === 'development') ? (
  applyMiddleware(
    // ...middleware
  )
) : (
  applyMiddleware(
    // ...middleware
  )
);

// TODO: aafter react router is implemented
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(environmentMiddleware)
);

/* eslint-enable */

export default store;
