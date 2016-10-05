import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// CSS
import css from './scss/application.scss';

import App from './components/App';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(app, document.getElementById('asana-tasker'));
