import { handleResponse } from './utils';
import { signupError } from '../authAction';

export const registerUser = (userData) => (dispatch) => (
  fetch('https://bookrr-app.herokuapp.com/api/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
    .then(handleResponse)
    .catch(e => {
      console.log(e);
      dispatch(signupError(e));
    })
);

export const loginUser = (email, password) => (
  fetch('https://mentorme-backend.herokuapp.com/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then(handleResponse)
    .then(data => {
      console.log(data);
      console.log(data.user.token);
      localStorage.setItem('bookrUser', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.user.token));
    })
);

export const logoutUser = () => {
  localStorage.removeItem('bookrUser');
  localStorage.removeItem('token');
}
