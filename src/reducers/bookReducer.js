import { FETCH_BOOKS, FETCH_BOOKS_ERROR, FETCH_BOOK, REVIEW_BOOK } from '../actions/types';

const book = localStorage.getItem('book');

const initialState = {
	items : [],
	item: book ? { book } : {},
	errors: []
}

export default (state = initialState, action) => {
	switch(action.type){
		case FETCH_BOOKS: 
			return {
				...state, 
				items: action.payload
			}
		case FETCH_BOOKS_ERROR:
			return {
				...state, 
				errors: action.payload
			}
		case FETCH_BOOK:
			return {
				...state, 
				item: action.payload
			}
		case REVIEW_BOOK: 
			return {
				...state,
			}
		default: return state;
	}
}
