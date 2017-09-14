import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {     
    ON_CONTACT_CHANGE,
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    UPDATE_CONTACT_REQUEST,
    UPDATE_CONTACT_SUCCESS
} from '../constants';

export const onContactChange = ({ prop, value }) => (
    {
        type: ON_CONTACT_CHANGE,
        payload: { prop, value }
    }
);

export const createContact = ({ name, phone }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_CONTACT_REQUEST });
        firebase.database().ref('/contacts')
            .push({ name, phone })
            .then(() => {
                dispatch({ type: CREATE_CONTACT_SUCCESS });
                Actions.contacts({ type: 'reset' });
            });
    };
};

export const updateContact = ({ name, phone, uid }) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_CONTACT_REQUEST });
        firebase.database().ref(`/contacts/${uid}`)
            .set({ name, phone })
            .then(() => {
                dispatch({ type: UPDATE_CONTACT_SUCCESS });
                Actions.contacts({ type: 'reset' });
            });
    };
};

export const fetchContacts = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CONTACTS_REQUEST });
        firebase.database().ref('/contacts')
            .on('value', snapshot => {
                dispatch({ type: FETCH_CONTACTS_SUCCESS, payload: snapshot.val() });
            });
    };
};
