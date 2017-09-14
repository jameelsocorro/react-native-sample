import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import * as actions from '../actions/contact';

import ListItem from './list-item';

class Contacts extends Component {
    componentWillMount() {
        this.props.fetchContacts();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ contacts }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(contacts);
    }

    renderRow(contact) {
        return <ListItem contact={contact} />;
    }

    render() {        
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}


const mapStateToProps = (state) => {
    const contacts = _.map(state.contacts, (val, uid) => {
        return { ...val, uid };
    });

    return { contacts };
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
