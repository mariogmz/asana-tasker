import { combineReducers } from 'redux';

import tasks from './tasks';
import info from './info';

const rootReducer = combineReducers({tasks, info});

export default rootReducer;
