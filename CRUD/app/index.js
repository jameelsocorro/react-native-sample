import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import configureStore from './store.config';
import Router from './router';

const store = configureStore();

class App extends Component {    
    componentWillMount() {
        StatusBar.setBarStyle('light-content', true);

        firebase.initializeApp({
            apiKey: 'AIzaSyCaQ509_enK0xP2XyR7Gn1iraoVcz77heE',
            authDomain: 'contacts-mobile.firebaseapp.com',
            databaseURL: 'https://contacts-mobile.firebaseio.com',
            projectId: 'contacts-mobile',
            storageBucket: 'contacts-mobile.appspot.com',
            messagingSenderId: '734873708681'
        });
    }
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
