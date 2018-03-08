import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

class ContactScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Contact Screen</Text>
            </View>
        );
    }
}

ContactScreen.navigationOptions = {
    title: 'Contacts',
};

export default ContactScreen;
