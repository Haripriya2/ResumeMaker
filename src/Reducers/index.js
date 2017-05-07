import {combineReducers} from 'redux';
import userReducer from './reducers-users';
import activeUserReducer from './reducers-activeUser';
import resumeSample from './reducers-resumeSample';

const allReducers = combineReducers({
  users: userReducer,
  activeUser: activeUserReducer,
  sample: resumeSample
});

export default allReducers;
