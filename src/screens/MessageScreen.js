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

class MessageScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Message Screen</Text>
            </View>
        );
    }
}

MessageScreen.navigationOptions = {
    title: 'Messages',
};

export default MessageScreen;
