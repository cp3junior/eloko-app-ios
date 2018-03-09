import React from 'react';
import { UIManager, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import AppWithNavigationState from './navigators/navigation';
import { client, store } from './utils/store';
import { login } from './actions/userAction';
import Loading from './components/loading';

if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class Root extends React.Component {
    state = {
        AppIsReady: false,
    };
    componentWillMount() {
        this._checkIfToken();
    }

    _checkIfToken = async () => {
        try {
            const token = await AsyncStorage.getItem('@usertoken');

            if (token != null) {
                store.dispatch(login());
            }
        } catch (e) {
            throw e;
        }
        this.setState({ AppIsReady: true });
    };

    render() {
        if (!this.state.AppIsReady) {
            return <Loading />;
        }
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
