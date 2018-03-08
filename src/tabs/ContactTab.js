import { StackNavigator } from 'react-navigation';

import { ContactScreen } from '../screens/';

export default StackNavigator(
    {
        Contact: {
            screen: ContactScreen,
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
