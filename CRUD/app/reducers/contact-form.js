import { 
    ON_CONTACT_CHANGE,
    CREATE_CONTACT_SUCCESS,
    UPDATE_CONTACT_SUCCESS
} from '../constants';

const INITIAL_STATE = {
    name: '',
    phone: ''
};

export default function (state = INITIAL_STATE, action) {    
    switch (action.type) {
        case ON_CONTACT_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CREATE_CONTACT_SUCCESS:
        case UPDATE_CONTACT_SUCCESS:
            return INITIAL_STATE;                 
        default:
            return state;    
    }
}
