import { AsyncStorage } from 'react-native';

export function login() {
    return {
        type: 'LOGIN',
    };
}

export function logout() {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem('@usertoken');
            return dispatch({
                type: 'LOGOUT',
            });
        } catch (error) {
            throw error;
        }
    };
}
