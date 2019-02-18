import {combineReducers} from 'redux';

import notifications from './notification';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  notifications,
  snackbar,
});

export default rootReducer;