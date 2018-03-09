import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        width: 150,
        borderRadius: 50,
        opacity: 0.85,
    },
    buyContainer: {
        flex: 1,
        height: 60,
        marginTop: 10,
        alignItems: 'center',
    },
    styleBuyText: {
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
        fontWeight: '300',
        fontFamily: 'arial',
    },
    imgContainer: {
        flex: 6,
    },
    btnsContainer: {
        flex: 2,
        flexDirection: 'row',
    },
});

class AuthentificationScreen extends Component {
    render() {
        const { linearGradient, styleBuyText, buyContainer, imgContainer, container, btnsContainer } = styles;

        return (
            <ImageBackground style={container} source={require('../assets/AuthBG.jpg')}>
                <View style={imgContainer} />
                <View style={btnsContainer}>
                    <TouchableOpacity
                        style={buyContainer}
                        onPress={() => {
                            this.props.navigation.navigate('SignUp');
                        }}
                    >
                        <LinearGradient
                            colors={['#1488CC', '#2B32B2']}
                            style={linearGradient}
                            start={{ x: 0.1, y: 0.7 }}
                            end={{ x: 0.7, y: 0.9 }}
                        >
                            <Text style={styleBuyText} numberOfLines={1}>
                                SIGN UP
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buyContainer}
                        onPress={() => {
                            this.props.navigation.navigate('SignIn');
                        }}
                    >
                        <LinearGradient
                            colors={['#1488CC', '#2B32B2']}
                            style={linearGradient}
                            start={{ x: 0.1, y: 0.7 }}
                            end={{ x: 0.7, y: 0.9 }}
                        >
                            <Text style={styleBuyText} numberOfLines={1}>
                                SIGN IN
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

AuthentificationScreen.navigationOptions = {
    title: 'Authentification',
    header: null,
};

export default AuthentificationScreen;
