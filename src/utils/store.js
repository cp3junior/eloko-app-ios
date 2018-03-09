import { createStore, applyMiddleware } from 'redux';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import { middleware } from '../utils/redux';
import appReducer from '../reducers/';

const middlewares = [middleware, thunk];

const httpLink = createHttpLink({ uri: 'http://192.168.1.101:3000/graphql' });

// const middlewareLink = setContext(async (req, { headers }) => {
//     const token = await AsyncStorage.getItem('@usertoken');

//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` :
//       },
//     };
//   });

const asyncAuthLink = setContext(request =>
    AsyncStorage.getItem('@usertoken').then(token => {
        // do some async lookup here
        const tokenAuth = `Bearer ${token}`;
        if (token == null) {
            return {
                headers: {},
            };
        }
        return {
            headers: {
                Authorization: tokenAuth || null,
            },
        };
    }),
);

const link = asyncAuthLink.concat(httpLink);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const store = createStore(appReducer, applyMiddleware(...middlewares));

export { store, client };
