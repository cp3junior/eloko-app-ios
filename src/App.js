'use strict';
import React, { Component } from 'react';
import { AppRegistry, UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { store, client } from './store';
import { colors } from './utils/constants';
import Welcome from './components/Welcome';

if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends Component {
    render() {
        return (
            <ApolloProvider store={store} client={client}>
                <ThemeProvider theme={colors}>
                    <Welcome />
                </ThemeProvider>
            </ApolloProvider>
        );
    }
}

AppRegistry.registerComponent('Eloko', () => App);
