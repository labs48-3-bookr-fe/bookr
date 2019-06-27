import { SIGNUP_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST } from '../actions/types';

const user = localStorage.getItem('bookrUser');
const initialState = {
	user: user ? { user } : {} ,
	isAuthenticated: !!localStorage.getItem('token')
}

export default (state = initialState, action) => {
	switch(action.type){
		case SIGNUP_REQUEST: 
			return {
				...state
			};

		case LOGIN_REQUEST: 
			return {
					...state, 
					user: action.payload
			}
		
		case LOGOUT_REQUEST: 
			return {
				...state,
			}

		default: return state;
	}
}
