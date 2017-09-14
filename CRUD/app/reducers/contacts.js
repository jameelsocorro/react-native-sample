import {     
    FETCH_CONTACTS_SUCCESS
} from '../constants';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {    
    switch (action.type) {        
        case FETCH_CONTACTS_SUCCESS:
            return action.payload;                 
        default:
            return state;    
    }
}
