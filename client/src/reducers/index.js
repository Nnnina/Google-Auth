import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReudcer from './authReducer';
//state.auth
//会被存在state上
export default combineReducers({
    auth: authReudcer,
    form: reduxForm
});
//key reside in our state object