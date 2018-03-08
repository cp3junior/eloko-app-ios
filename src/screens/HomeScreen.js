import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { graphql } from 'react-apollo';

import GET_POSTS from '../graphql/queries/getPosts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

class HomeScreen extends Component {
    _renderItem = ({ item }) => (
        <View style={{ flex: 1, marginBottom: 10, backgroundColor: 'green' }}>
            <Text>{item.text}</Text>
            <Text>by {item.user.username}</Text>
        </View>
    );

    render() {
        const { data } = this.props;
        if (data.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <FlatList data={data.getPosts} keyExtractor={item => item._id} renderItem={this._renderItem} />
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
    title: 'Eloko',
};

export default graphql(GET_POSTS)(HomeScreen);
