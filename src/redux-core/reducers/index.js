import {combineReducers} from 'redux';

import notifications from './notification';

const rootReducer = combineReducers({
  notifications,
});

export default rootReducer;