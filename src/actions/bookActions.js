import { FETCH_BOOKS } from './types';
import { fetchBooks } from './helpers/book';

export const fetchAllBooks = () => (dispatch) => {
	fetchBooks()
		.then(books => dispatch({
				type: FETCH_BOOKS,
				payload: books
		}));
}


