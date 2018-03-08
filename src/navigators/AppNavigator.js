import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import { HomeScreen, MessageScreen, UserScreen, ContactScreen, TestScreen } from '../screens/';

const Tabs = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/home_selected.png') : require('../assets/home.png')}
                        style={{ width: 34, height: 34 }}
                    />
                ),
            },
        },
        Message: {
            screen: MessageScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/message_selected.png') : require('../assets/message.png')}
                        style={{ width: 34, height: 34 }}
                    />
                ),
            },
        },
        Contact: {
            screen: ContactScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/contact_selected.png') : require('../assets/contact.png')}
                        style={{ width: 34, height: 34 }}
                    />
                ),
            },
        },
        User: {
            screen: UserScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../assets/user2_selected.png') : require('../assets/user2.png')}
                        style={{ width: 34, height: 34 }}
                    />
                ),
            },
        },
    },
    {
        lazy: true,
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: 'white',
                height: 50,
                paddingVertical: 5,
            },
        },
    },
);

export default StackNavigator(
    {
        Main: {
            screen: Tabs,
        },
        Inner: {
            screen: TestScreen,
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
