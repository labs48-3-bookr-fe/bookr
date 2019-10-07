import { FETCH_BOOKS, FETCH_BOOKS_ERROR, FETCH_BOOK, REVIEW_BOOK, DELETE_BOOK, GETTING_BOOK, GETTING_BOOKS } from '../actions/types';

const book = localStorage.getItem('book');

const initialState = {
	items : [],
	item: book ? { book } : {},
	errors: [],
	gettingBook: false,
	gettingBooks: false,
}

export default (state = initialState, action) => {
	switch(action.type){
		case FETCH_BOOKS: 
			return {
				...state, 
				items: action.payload,
				gettingBooks: false,
			}
		case FETCH_BOOKS_ERROR:
			return {
				...state, 
				errors: action.payload,
				gettingBook: false,
				gettingBooks: false,
			}
		case FETCH_BOOK:
			return {
				...state, 
				item: action.payload,
				gettingBook: false,
			}
		case GETTING_BOOK:
			return {
				...state, 
				gettingBook: true,
			}
		case GETTING_BOOKS:
				return {
					...state, 
					gettingBooks: true,
				}
		case REVIEW_BOOK: 
			const bookItem = state.item;
			bookItem.reviews = [...bookItem.reviews, action.payload];
			return {
				...state,
				item: bookItem,
			}
		case DELETE_BOOK: 
			return {
				...state,
			}
			
		default: return state;
	}
}
