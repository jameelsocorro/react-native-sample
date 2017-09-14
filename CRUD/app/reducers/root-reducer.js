import { combineReducers } from 'redux';
import ContactFormReducer from './contact-form';
import ContactsReducer from './contacts';

const rootReducer = combineReducers({
    contacts: ContactsReducer,
    contactForm: ContactFormReducer
});

export default rootReducer;
