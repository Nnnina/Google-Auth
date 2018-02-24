import { combineReducers } from 'redux';
import authReudcer from './authReducer';

export default combineReducers({
   auth: authReudcer
});
//key reside in our state object