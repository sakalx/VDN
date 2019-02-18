import {combineReducers} from 'redux';

import building from './building';
import notifications from './notification';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  building,
  notifications,
  snackbar,
});

export default rootReducer;