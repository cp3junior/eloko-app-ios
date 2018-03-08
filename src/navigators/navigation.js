import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { addListener } from '../utils/redux';
import AppNavigator from '../navigators/AppNavigator';

class AppWithNavigationState extends Component {
    render() {
        const nav = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener,
        });
        return <AppNavigator navigation={nav} />;
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
