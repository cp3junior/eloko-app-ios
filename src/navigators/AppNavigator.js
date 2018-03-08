import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { HomeTab, MessageTab, UserTab, ContactTab } from '../tabs/';

export default TabNavigator(
    {
        Home: {
            screen: HomeTab,
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
            screen: MessageTab,
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
            screen: ContactTab,
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
            screen: UserTab,
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
