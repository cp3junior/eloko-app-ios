import { StackNavigator } from 'react-navigation';

import { SignUpScreen, SignInScreen, AuthentificationScreen } from '../screens/';

export default StackNavigator(
    {
        Auth: {
            screen: AuthentificationScreen,
        },
        SignUp: {
            screen: SignUpScreen,
        },
        SignIn: {
            screen: SignInScreen,
        },
    },
    {
        cardStyle: {
            backgroundColor: '#F1F6FA',
        },
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#000',
                fontSize: 23,
            },
        }),
    },
);
