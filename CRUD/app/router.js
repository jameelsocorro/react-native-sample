
import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Contacts from './components/contacts';
import ContactForm from './components/contact-form';

const RouterComponent = () => (    
    <Router 
        navigationBarStyle={style.navBar} 
        titleStyle={style.title} 
        sceneStyle={style.scene}
    >
        <Scene
            initial 
            key="contacts" 
            component={Contacts} 
            title="Contacts" 
            rightTitle="ADD" 
            onRight={() => Actions.contactForm({ formType: 'create' })} 
        />
        <Scene 
            key="contactForm" 
            component={ContactForm} 
            title="Contact Details" 
        />
    </Router>
);

const style = {
    navBar: { backgroundColor: '#212121' },
    scene: { 
        backgroundColor: '#F0F0F0',
        paddingTop: (Platform.OS !== 'ios' ? 54 : 64),
    },        
    title: { color: 'white' },    
};

export default RouterComponent;
