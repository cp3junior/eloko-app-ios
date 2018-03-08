import { StackNavigator } from 'react-navigation';

import { HomeScreen } from '../screens/';

export default StackNavigator(
    {
        Home: {
            screen: HomeScreen,
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
