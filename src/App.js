import React from 'react';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import AppWithNavigationState from './navigators/navigation';
import { client, store } from './utils/store';

if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <AppWithNavigationState {...this.props} />
                </ApolloProvider>
            </Provider>
        );
    }
}

export default Root;
