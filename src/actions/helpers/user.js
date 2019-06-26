import { handleResponse } from './utils';

export const registerUser = (userData) => (
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
    .then(handleResponse)
);

export const loginUser = (email, password) => (
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('bookrUser', JSON.stringify(user));
      return user;
    }) 
);
