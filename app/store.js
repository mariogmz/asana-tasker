import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Root reducer
import rootReducer from './reducers/root';
import AsanaClient from './services/Asana';

const tasks = [];

// Base state
const defaultState = {tasks};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));

export default store;
