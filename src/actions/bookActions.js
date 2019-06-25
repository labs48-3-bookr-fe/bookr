import { FETCH_BOOKS } from './types';

const fetchBooks = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_BOOKS,
            payload: data
        }));
}

export { fetchBooks };