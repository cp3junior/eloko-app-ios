import { StackNavigator } from 'react-navigation';

import { MessageScreen } from '../screens/';

export default StackNavigator(
    {
        Message: {
            screen: MessageScreen,
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
