import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Card extends React.Component {
    render () {
        return (
            <View style={styles.card}>
                <Text>Hi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        marginTop: 20,
        padding: 20,
        width: '100%',
        backgroundColor: '#00aeef',
        borderRadius: 4,
        alignItems: 'center',
    },
});

export default withNavigation(Card);