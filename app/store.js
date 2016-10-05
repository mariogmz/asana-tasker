import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Root reducer
import rootReducer from './reducers/root';

const tasks = [];
const info = {};

// Base state
const defaultState = {tasks, info};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));

export default store;
