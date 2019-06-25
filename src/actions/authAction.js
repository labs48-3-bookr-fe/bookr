import { SIGNUP_REQUEST, LOGIN_REQUEST } from './types';
import { registerUser, loginUser } from './helpers/user';

const register = (userData) => (dispatch) => {
  registerUser(userData)
    .then(user => dispatch({
        type: SIGNUP_REQUEST,
        payload: user
    })); 
}

const login = (email, password) => (dispatch) => {
  loginUser(email, password)
    .then(user => dispatch({
        type: LOGIN_REQUEST,
        payload: user
    })); 
}

export { register, login };