import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Root reducer
import rootReducer from './reducers/root';
import AsanaClient from './services/Asana';

const tasks = AsanaClient.getTasks();

// Base state
const defaultState = {tasks};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Store
const store = createStore(rootReducer, defaultState, enhancers, applyMiddleware(thunk));

export default store;
