import { handleResponse } from './utils';

export const fetchBooks = () => (
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(handleResponse)
);
          
export const fetchBook = (id) => (
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(handleResponse)
);