import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';

import { logout } from '../actions/userAction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

class UserScreen extends Component {
    _logout = () => {
        this.props.client.resetStore();
        return this.props.logout();
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>User Screen</Text>
                <Button title="Logout" onPress={this._logout} />
            </View>
        );
    }
}

UserScreen.navigationOptions = {
    title: 'User',
};

export default withApollo(connect(undefined, { logout })(UserScreen));
