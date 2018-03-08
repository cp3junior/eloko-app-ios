import { createStore, applyMiddleware } from 'redux';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import thunk from 'redux-thunk';

import { middleware } from '../utils/redux';
import appReducer from '../reducers/';

const middlewares = [middleware, thunk];

const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://192.168.1.101:3000/graphql' }),
    cache: new InMemoryCache(),
});

const store = createStore(appReducer, applyMiddleware(...middlewares));

export { store, client };
