import axios from 'axios';
import { SIGNUP_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_ERROR, LOGIN_ERROR, LOGIN_IN, SIGNIN_UP } from './types';
import { logoutUser } from './helpers/user';

const instance = axios.create({
	baseURL: 'https://bookrr-app.herokuapp.com/api/users',
});

export const register = (userData, history) => (dispatch) => {
  dispatch({ type: SIGNIN_UP });
  instance.post('/', userData)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('bookrUser', JSON.stringify(res.data.user));
      return dispatch({
        type: SIGNUP_REQUEST,
        payload: res.data.user
      })
    })
    .then(() => {
      history.push('/books');
    })
    .catch((error) => {
      let err;
      if(error.response){
        err = error.response.data.error;
      } else if(error instanceof Error){
        err = [{msg: error.message}]
      }
      err = typeof err === 'object' ? err : [{msg: err}]; 
      dispatch(signupError(err));
    });
}

export const login = (data, history) => (dispatch) => {
  dispatch({ type: LOGIN_IN });
  instance.post('/login', data)
    .then(res =>{
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('bookrUser', res.data.user);
      dispatch({
        type: LOGIN_REQUEST,
        payload: res.data.user
      })
    })
    .then(() => {
      history.push('/books');
    })
    .catch((error) => {
      let err;
      if(error.response){
        err = error.response.data.error;
        if (error.response.status === 404)
          return dispatch(loginError([{msg: 'Invalid email and password combination'}]));
      } else if (error instanceof Error){
        err = [{msg: error.message}]
      }
      err = typeof err === 'object' ? err : [{msg: err}]; 
      dispatch(loginError(err));
    }); 
}

export const logout = () => (dispatch) => {
  logoutUser();
  dispatch({
    type: LOGOUT_REQUEST
  })
}

export const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error
})

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error
})
