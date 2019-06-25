import { SIGNUP_REQUEST } from './types';

const createUser = (data) => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(user => dispatch({
          type: SIGNUP_REQUEST,
          payload: user
      })); 
}

export { createUser };