import { combineReducers } from 'redux';
import DataReducer from './dataReducer'
import ScreenReducer from './screenReducer'

const rootReducer = combineReducers({
  //state: (state = {"data":"testing 1..2..3..4..5"}) => state
  mydata: DataReducer,
  screen: ScreenReducer
});

export default rootReducer;
