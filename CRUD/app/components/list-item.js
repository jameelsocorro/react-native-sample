import styled from 'styled-components/native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

const ListItemText = styled.Text`
    fontSize: 16;
    paddingTop: 8;
    paddingLeft: 16;
    paddingBottom: 8;
`;

class ListItem extends Component {
    onRowPress() {
        Actions.contactForm({ contact: this.props.contact, formType: 'update' });
    }

    render() {
        const { name } = this.props.contact;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <ListItemText>
                            {name}
                        </ListItemText>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>            
        );
    }
}

export default ListItem;
