import {combineReducers} from 'redux';
import userReducer from './reducers-users';
import activeUserReducer from './reducers-activeUser';
import resumeSample from './reducers-resumeSample';
import resumeCreatedReducer from './reducers-resumeCreated';

const allReducers = combineReducers({
  users: userReducer,
  activeUser: activeUserReducer,
  sample: resumeSample,
  resumeCreated: resumeCreatedReducer
});

export default allReducers;
