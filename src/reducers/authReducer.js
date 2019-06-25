import { SIGNUP_REQUEST } from '../actions/types';

const initialState = {
    item: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case SIGNUP_REQUEST: 
            return {
                ...state, 
                item: action.payload
            }

        default: return state;
    }
}
