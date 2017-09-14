import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/contact';

import { 
    Card, 
    CardSection,
    Input,
    Button
} from './common';

class ContactForm extends Component {
    componentWillMount() {
        _.each(this.props.contact, (value, prop) => {            
            this.props.onContactChange({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone } = this.props;

        if (this.props.formType === 'create') {            
            this.props.createContact({ name, phone });
        } else {
            this.props.updateContact({ name, phone, uid: this.props.contact.uid });
        }            
    }

    render() {
        const buttonText = (this.props.formType === 'create') ? 'Create' : 'Save Changes';
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        value={this.props.name}
                        placeholder="John Doe"
                        onChangeText={value => this.props.onContactChange({ prop: 'name', value })}
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                        label="Phone"
                        value={this.props.phone}
                        placeholder="111-222-3333"
                        onChangeText={value => this.props.onContactChange({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>{buttonText}</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone } = state.contactForm;
    return { name, phone };
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
