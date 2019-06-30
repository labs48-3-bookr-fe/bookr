import { SIGNUP_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_ERROR, LOGIN_ERROR, LOGIN_IN, SIGNIN_UP } from '../actions/types';

const user = localStorage.getItem('bookrUser');

const initialState = {
	user: user ? { user } : {} ,
	isAuthenticated: !!localStorage.getItem('token'),
	errors: [],
	loginIn: false,
	signinUp: false,
}

export default (state = initialState, action) => {
	switch(action.type){
		case SIGNUP_REQUEST: 
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				errors: []
			};

		case LOGIN_REQUEST: 
			return {
					...state, 
					isAuthenticated: true,
					user: action.payload,
					errors: []
			}
		
		case LOGOUT_REQUEST: 
			return {
				...state,
			}

		case LOGIN_IN: 
			return {
				...state, 
				loginIn: true,
			}
		
			case SIGNIN_UP: 
				return {
					...state, 
					signinUp: true,
				}
		
		case SIGNUP_ERROR:
		case LOGIN_ERROR: 
			return {
				...state,
				errors: action.payload,
				loginIn: false,
				signinUp: false,
			}

		default: return state;
	}
}
