import { combineReducers } from 'redux';

import navigationReducer from '../reducers/navigationReducer';
import userReducer from '../reducers/userReducer';

export default combineReducers({
    nav: navigationReducer,
    user: userReducer,
});
