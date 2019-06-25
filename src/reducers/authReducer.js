import { SIGNUP_REQUEST, LOGIN_REQUEST } from '../actions/types';

const user = localStorage.getItem('bookrUser');
const initialState = {
	user: user ? { user } : {} ,
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

		default: return state;
	}
}
