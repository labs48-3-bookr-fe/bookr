import axios from 'axios';
import { FETCH_BOOKS, FETCH_BOOKS_ERROR, FETCH_BOOK, REVIEW_BOOK, DELETE_BOOK } from './types';

const instance = axios.create({
	baseURL: 'https://bookrr-app.herokuapp.com/api',
});

instance.interceptors.request.use((config) => {
	const apiToken = localStorage.getItem('token');
	config.headers = { 'Authorization': apiToken };
	return config;
}, error => {
	return Promise.reject(error)
});

export const fetchAllBooks = () => (dispatch) => {
	instance.get('/books')
    .then(res => {
			const books = typeof res.data === 'string' ? [] : res.data.books;
			
      return dispatch({
        type: FETCH_BOOKS,
				payload: books
      })
    })
    .catch((error) => {
      let err = error.response.data.error;
      err = typeof err === 'object' ? err : [{msg: err}]; 
      dispatch(fetchBooksError(err));
    });
}

export const fetchBooksError = error => ({
  type: FETCH_BOOKS_ERROR,
  payload: error
})

export const fetchBook = (id) => (dispatch) => {
	instance.get(`/books/${id}`)
    .then(res => {
			const book = typeof res.data === 'string' ? [] : res.data.book;
			localStorage.setItem('book', JSON.stringify(book));
      return dispatch({
        type: FETCH_BOOK,
				payload: book
      })
		})
    .catch((error) => {
			console.log(error);
      let err = error.response.data.error;
      err = typeof err === 'object' ? err : [{msg: err}]; 
      dispatch(fetchBooksError(err));
    });
}

export const reviewBook = (data, history) => (dispatch) => {
	instance.post('/reviews', data)
    .then(res => {
			dispatch({
				type: REVIEW_BOOK,
				payload: res.data.review
			})
			return res.data.review.bookId;
		})
		.then((id) => {
      history.push(`/books/${id}`);
    })
    .catch((error) => {
			console.log(error);
      let err = error.response.data.error;
      err = typeof err === 'object' ? err : [{msg: err}]; 
      dispatch(fetchBooksError(err));
    });
}

export const deleteBook = (id, history) => (dispatch) => {
	instance.delete(`/books/${id}`)
    .then(res => {
			if(res.status === 200)
				return dispatch({
					type: DELETE_BOOK,
					payload: res.data.review
				})
		})
		.then(() => {
      history.push('/books');
    })
    .catch((error) => {
			console.log(error);
      let err = error.response.data.error;
      err = typeof err === 'object' ? err : [{msg: err}]; 
      dispatch(fetchBooksError(err));
    });
}