import React, { Component } from 'react';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { addListener } from '../utils/redux';
import AppNavigator from './AppNavigator';
import AuthentificationNavigator from './AuthentificationNavigator';

class AppWithNavigationState extends Component {
    componentDidMount() {
        this.props.dispatch(NavigationActions.init());
    }
    render() {
        const nav = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener,
        });
        if (!this.props.user.isAuthenticated) {
            return <AuthentificationNavigator />;
        }
        return <AppNavigator navigation={nav} />;
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    user: state.user,
});

export default connect(mapStateToProps)(AppWithNavigationState);
