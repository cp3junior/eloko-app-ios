import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

class UserScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>User Screen</Text>
                <Button
                    title="Go to inner screen"
                    onPress={() => {
                        this.props.navigation.navigate('Inner');
                    }}
                />
            </View>
        );
    }
}

UserScreen.navigationOptions = {
    title: 'User',
};

export default UserScreen;
