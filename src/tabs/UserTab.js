import { StackNavigator } from 'react-navigation';

import { UserScreen, TestScreen } from '../screens/';

export default StackNavigator(
    {
        User: {
            screen: UserScreen,
        },
        Inner: {
            screen: TestScreen,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
    },
    {
        cardStyle: {
            backgroundColor: '#F1F6FA',
        },
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
