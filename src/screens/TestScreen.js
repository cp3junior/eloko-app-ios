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

class TestScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Inner Screen</Text>
            </View>
        );
    }
}

TestScreen.navigationOptions = {
    title: 'InnerPage',
};

export default TestScreen;
