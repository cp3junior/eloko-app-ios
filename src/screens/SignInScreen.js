import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import LOGIN from '../graphql/mutations/login';
import Loading from '../components/loading';
import { login } from '../actions/userAction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    backCross: {
        color: 'white',
        position: 'absolute',
        top: 30,
        right: 25,
        shadowColor: 'black',
        shadowOffset: { top: 3 },
        shadowOpacity: 0.4,
        zIndex: 21,
    },
    wraper: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    inputWrapperStyle: {
        height: 50,
        width: '80%',
        borderBottomWidth: 2,
        marginVertical: 5,
        justifyContent: 'flex-end',
    },
    inputStyle: {
        height: 30,
        width: '100%',
        color: 'black',
        fontSize: 20,
    },
    forgotWrapperStyle: {
        marginTop: 10,
        width: '80%',
        alignItems: 'flex-end',
    },
    forgotBtnTxt: {
        color: 'black',
    },
    loginBtn: {
        width: '80%',
        marginTop: 20,
    },
    loginBtnText: {
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
        fontWeight: '300',
        fontFamily: 'arial',
    },
    linearGradient: {
        justifyContent: 'center',
        borderRadius: 50,
        opacity: 0.85,
        height: 60,
    },
    ErrorCont: {
        marginTop: 30,
    },
    ErrorText: {
        color: 'red',
    },
});

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }
    state = {
        Identification: '',
        Password: '',
        colorId: '#34495e',
        colorPw: '#34495e',
        loading: false,
        errorMessage: '',
    };

    focusNextField(id) {
        this.inputs[id].focus();
    }

    _onChangeText = (text, type) => {
        this.setState({ [type]: text });
        this.setState({ errorMessage: '' });
    };
    _onFocusInput = type => this.setState({ [type]: '#1488CC' });

    _onBlurInput = (id, type) => {
        if (!this.state[id]) {
            this.setState({ [type]: 'red' });
        } else {
            this.setState({ [type]: 'green' });
        }
        if (id === 'Password' && this.state[id].length < 6) {
            this.setState({ [type]: 'red' });
        }
    };
    _onSubmitLogin = async () => {
        const { Identification, Password } = this.state;
        Keyboard.dismiss();

        if (!Identification) {
            this.setState({ colorId: 'red' });
            return false;
        }
        if (!Password || Password.length < 6) {
            this.setState({ colorPw: 'red' });
            return false;
        }

        this.setState({ loading: true });
        try {
            const { data } = await this.props.mutate({
                variables: {
                    identification: Identification,
                    password: Password,
                },
            });

            await AsyncStorage.setItem('@usertoken', data.login.token);
            this.setState({ loading: false });
            return this.props.login();
        } catch (e) {
            this.setState({ errorMessage: e.graphQLErrors[0].message.toUpperCase() });
            this.setState({ loading: false });
            // throw e;
        }
    };

    render() {
        const {
            container,
            backCross,
            wraper,
            inputWrapperStyle,
            inputStyle,
            forgotWrapperStyle,
            forgotBtnTxt,
            loginBtn,
            loginBtnText,
            linearGradient,
            ErrorText,
            ErrorCont,
        } = styles;
        const { colorId, colorPw, loading, errorMessage } = this.state;

        return (
            <ImageBackground style={container} source={require('../assets/AuthBG_blur.jpg')}>
                <TouchableWithoutFeedback
                    hitSlop={{ bottom: 20, top: 20, right: 20, left: 20 }}
                    onPress={() => {
                        Keyboard.dismiss();
                        this.props.navigation.goBack();
                    }}
                >
                    <Icon name="window-close" size={50} style={backCross} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <View style={wraper}>
                        <View style={[inputWrapperStyle, { borderBottomColor: colorId }]}>
                            <TextInput
                                style={inputStyle}
                                placeholder="Email / Username / Phone Number"
                                placeholderTextColor="#34495e"
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                autoFocus
                                clearButtonMode="while-editing"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    this.focusNextField('two');
                                }}
                                onChangeText={text => {
                                    this._onChangeText(text, 'Identification');
                                }}
                                onFocus={() => {
                                    this._onFocusInput('colorId');
                                }}
                                onBlur={() => {
                                    this._onBlurInput('Identification', 'colorId');
                                }}
                            />
                        </View>
                        <View style={[inputWrapperStyle, { borderBottomColor: colorPw }]}>
                            <TextInput
                                style={inputStyle}
                                placeholder="Password"
                                placeholderTextColor="#34495e"
                                autoCorrect={false}
                                autoCapitalize="none"
                                secureTextEntry
                                clearButtonMode="while-editing"
                                returnKeyType="send"
                                ref={input => {
                                    this.inputs['two'] = input;
                                }}
                                onChangeText={text => {
                                    this._onChangeText(text, 'Password');
                                }}
                                onFocus={() => {
                                    this._onFocusInput('colorPw');
                                }}
                                onBlur={() => {
                                    this._onBlurInput('Password', 'colorPw');
                                }}
                                blurOnSubmit
                                onSubmitEditing={() => {
                                    this._onSubmitLogin();
                                }}
                            />
                        </View>
                        <View style={forgotWrapperStyle}>
                            <TouchableOpacity hitSlop={{ bottom: 20, top: 20, right: 20, left: 20 }} onPress={() => {}}>
                                <Text style={forgotBtnTxt}>FORGOT PASSWORD?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ErrorCont}>
                            <Text style={ErrorText}>{errorMessage}</Text>
                        </View>
                        <View style={loginBtn}>
                            {loading ? (
                                <Loading />
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        this._onSubmitLogin();
                                    }}
                                >
                                    <LinearGradient
                                        colors={['#1488CC', '#2B32B2']}
                                        style={linearGradient}
                                        start={{ x: 0.1, y: 0.7 }}
                                        end={{ x: 0.7, y: 0.9 }}
                                    >
                                        <Text style={loginBtnText} numberOfLines={1}>
                                            {' '}
                                            LOG IN{' '}
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        );
    }
}

SignInScreen.navigationOptions = {
    title: 'Sign In',
    header: null,
};

export default compose(connect(undefined, { login }), graphql(LOGIN))(SignInScreen);
