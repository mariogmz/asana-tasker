import { createStore, compose } from 'redux';

// Root reducer
import rootReducer from './reducers/root';

// Base state
const defaultState = {};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Store
const store = createStore(rootReducer, defaultState, enhancers);

export default store;
