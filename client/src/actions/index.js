import axios from 'axios';
import { FETCH_USER } from "./types";

//action creator： return a action and then sent to all reducers
export const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/current_user')//return a promise,resolve the promise to a request object
        dispatch({ type: FETCH_USER, payload: res.data});
    };
};