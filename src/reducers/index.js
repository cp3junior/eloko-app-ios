import { combineReducers } from 'redux';

import navigationReducer from '../reducers/navigationReducer';

export default combineReducers({
    nav: navigationReducer,
});
