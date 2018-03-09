import React, { Component } from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';

const styles = {
    container: {
        flex: 1,
        width: null,
        height: null,
    },
};

class SignUbScreen extends Component {
    render() {
        const { container } = styles;

        return (
            <ImageBackground style={container} source={require('../assets/AuthBG_blur.jpg')}>
                <Text>Sign Up Screen</Text>
                <Button
                    title="Goback"
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                />
            </ImageBackground>
        );
    }
}

SignUbScreen.navigationOptions = {
    title: 'Sign Up',
    header: null,
};

export default SignUbScreen;
