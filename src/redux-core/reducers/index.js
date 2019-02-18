import {combineReducers} from 'redux';

import building from './building';
import notifications from './notification';
import operators from './operator';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  building,
  notifications,
  operators,
  snackbar,
});

export default rootReducer;