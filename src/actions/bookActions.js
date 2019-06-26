import { FETCH_BOOKS } from './types';
import { fetchBooks, fetchBook } from './helpers/book';

const fetchBooks = () => (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data => dispatch({
				type: FETCH_BOOKS,
				payload: data
		}));
}

export { fetchBooks };