import { SIGNUP_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST } from './types';
import { registerUser, loginUser, logoutUser } from './helpers/user';

export const register = (userData) => (dispatch) => {
  registerUser(userData)
    .then(user => dispatch({
        type: SIGNUP_REQUEST,
        payload: user
    })); 
}

export const login = (data, history) => (dispatch) => {
  loginUser(data.email, data.password)
    .then(user => dispatch({
        type: LOGIN_REQUEST,
        payload: user
    }))
    .then(() => {
      history.push('/books');
    }); 
}

export const logout = () => (dispatch) => {
  logoutUser();
  dispatch({
    type: LOGOUT_REQUEST
  })
}
